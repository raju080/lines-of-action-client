import * as ActionTypes from './ActionTypes';
import axios from 'axios';

const baseUrl = 'http://localhost:5000';


export const exploreCluster = (i, j, pieceNumber, boardState, visited) => {
	if (
		i < 0 ||
		i >= boardState.length ||
		j < 0 ||
		j >= boardState.length ||
		boardState[i][j] != pieceNumber
	)
		return;
	visited[i][j] = true;
	if (i + 1 < boardState.length && !visited[i + 1][j])
		exploreCluster(i + 1, j, pieceNumber, boardState, visited);
	if (i - 1 >= 0 && !visited[i - 1][j])
		exploreCluster(i - 1, j, pieceNumber, boardState, visited);
	if (j + 1 < boardState.length && !visited[i][j + 1])
		exploreCluster(i, j + 1, pieceNumber, boardState, visited);
	if (j - 1 >= 0 && !visited[i][j - 1])
		exploreCluster(i, j - 1, pieceNumber, boardState, visited);
	if (
		i + 1 < boardState.length &&
		j + 1 < boardState.length &&
		!visited[i + 1][j + 1]
	)
		exploreCluster(i + 1, j + 1, pieceNumber, boardState, visited);
	if (i - 1 >= 0 && j - 1 >= 0 && !visited[i - 1][j - 1])
		exploreCluster(i - 1, j - 1, pieceNumber, boardState, visited);
	if (i + 1 < boardState.length && j - 1 >= 0 && !visited[i + 1][j - 1])
		exploreCluster(i + 1, j - 1, pieceNumber, boardState, visited);
	if (j + 1 < boardState.length && i - 1 >= 0 && !visited[i - 1][j + 1])
		exploreCluster(i - 1, j + 1, pieceNumber, boardState, visited);
};

export const isMatchOver = (boardState) => {
	const BOARD_LENGTH = boardState.length;
	console.log(boardState)
	let playerOneClusterCount = 0,
		playerTwoClusterCount = 0;
	let visited = [];
	let temp = Array(BOARD_LENGTH).fill(false);
	for (let k = 0; k < BOARD_LENGTH; k++) {
		visited.push([...temp]);
	}

	for (let i = 0; i < BOARD_LENGTH; i++) {
		for (let j = 0; j < BOARD_LENGTH; j++) {
			if (boardState[i][j] == 0) {
				visited[i][j] = true;
			}
		}
	}

	for (let i = 0; i < BOARD_LENGTH; i++) {
		for (let j = 0; j < BOARD_LENGTH; j++) {
			if (!visited[i][j]) {
				exploreCluster(i, j, boardState[i][j], boardState, visited);
				if (boardState[i][j] == 1) playerOneClusterCount += 1;
				else if (boardState[i][j] == 2) playerTwoClusterCount += 1;
			}
		}
	}
	if (playerOneClusterCount == 1 && playerTwoClusterCount == 1) return 0;
	if (playerOneClusterCount == 1) return 1;
	if (playerTwoClusterCount == 1) return 2;
	return -1;
};

export const findMoves = (i, j, boardState, currentPlayer) => {
	// setSelectedPieceMoves([]);
	const BOARD_LENGTH = boardState.length;

	const currentPieceNumber = boardState[i][j];
	const opponentPieceNumber = currentPlayer == 1 ? 2 : 1;
	let verticalPieceCount = 0;
	let horizontalPieceCount = 0;
	let positiveDiagonalPieceCount = 0;
	let negativeDiagonalPieceCount = 0;
	if (currentPieceNumber == currentPlayer) {
		for (let k = 0; k < BOARD_LENGTH; k = k + 1) {
			if (boardState[k][j] != 0) verticalPieceCount += 1;
			if (boardState[i][k] != 0) horizontalPieceCount += 1;
			if (i + k < BOARD_LENGTH) {
				if (j + k < BOARD_LENGTH) {
					if (boardState[i + k][j + k] != 0) {
						negativeDiagonalPieceCount += 1;
					}
				}
				if (j - k >= 0) {
					if (boardState[i + k][j - k] != 0) {
						positiveDiagonalPieceCount += 1;
					}
				}
			}
			if (i - k >= 0 && k != 0) {
				if (j + k < BOARD_LENGTH) {
					if (boardState[i - k][j + k] != 0) {
						positiveDiagonalPieceCount += 1;
					}
				}
				if (j - k >= 0) {
					if (boardState[i - k][j - k] != 0) {
						negativeDiagonalPieceCount += 1;
					}
				}
			}
		}

		// finding moves
		let moves = [];
		moves.push([i, j]);
		if (horizontalPieceCount > 0) {
			// right
			if (
				j + horizontalPieceCount < BOARD_LENGTH &&
				boardState[i][j + horizontalPieceCount] != currentPieceNumber
			) {
				let flag = true;
				for (let k = j; k < j + horizontalPieceCount; k++) {
					if (boardState[i][k] == opponentPieceNumber) {
						flag = false;
					}
				}
				if (flag) moves.push([i, j + horizontalPieceCount]);
			}
			if (
				j - horizontalPieceCount >= 0 &&
				boardState[i][j - horizontalPieceCount] != currentPieceNumber
			) {
				// left
				let flag = true;
				for (let k = j; k > j - horizontalPieceCount; k--) {
					if (boardState[i][k] == opponentPieceNumber) {
						flag = false;
					}
				}
				if (flag) moves.push([i, j - horizontalPieceCount]);
			}
		}

		if (verticalPieceCount > 0) {
			if (
				i + verticalPieceCount < BOARD_LENGTH &&
				boardState[i + verticalPieceCount][j] != currentPieceNumber
			) {
				// down
				let flag = true;
				for (let k = i; k < i + verticalPieceCount; k++) {
					if (boardState[k][j] == opponentPieceNumber) {
						flag = false;
					}
				}
				if (flag) moves.push([i + verticalPieceCount, j]);
			}
			if (
				i - verticalPieceCount >= 0 &&
				boardState[i - verticalPieceCount][j] != currentPieceNumber
			) {
				// up
				let flag = true;
				for (let k = i; k > i - verticalPieceCount; k--) {
					if (boardState[k][j] == opponentPieceNumber) {
						flag = false;
					}
				}
				if (flag) moves.push([i - verticalPieceCount, j]);
			}
		}

		if (positiveDiagonalPieceCount > 0) {
			// left down
			if (
				i + positiveDiagonalPieceCount < BOARD_LENGTH &&
				j - positiveDiagonalPieceCount >= 0 &&
				boardState[i + positiveDiagonalPieceCount][
					j - positiveDiagonalPieceCount
				] != currentPieceNumber
			) {
				let flag = true;
				for (let k = 0; k < positiveDiagonalPieceCount; k++) {
					if (boardState[i + k][j - k] == opponentPieceNumber) {
						flag = false;
					}
				}
				if (flag)
					moves.push([
						i + positiveDiagonalPieceCount,
						j - positiveDiagonalPieceCount,
					]);
			}
			// right up
			if (
				i - positiveDiagonalPieceCount >= 0 &&
				j + positiveDiagonalPieceCount < BOARD_LENGTH &&
				boardState[i - positiveDiagonalPieceCount][
					j + positiveDiagonalPieceCount
				] != currentPieceNumber
			) {
				let flag = true;
				for (let k = 0; k < positiveDiagonalPieceCount; k++) {
					if (boardState[i - k][j + k] == opponentPieceNumber) {
						flag = false;
					}
				}
				if (flag)
					moves.push([
						i - positiveDiagonalPieceCount,
						j + positiveDiagonalPieceCount,
					]);
			}
		}

		if (negativeDiagonalPieceCount > 0) {
			// right down
			if (
				i + negativeDiagonalPieceCount < BOARD_LENGTH &&
				j + negativeDiagonalPieceCount < BOARD_LENGTH &&
				boardState[i + negativeDiagonalPieceCount][
					j + negativeDiagonalPieceCount
				] != currentPieceNumber
			) {
				let flag = true;
				for (let k = 0; k < negativeDiagonalPieceCount; k++) {
					if (boardState[i + k][j + k] == opponentPieceNumber) {
						flag = false;
					}
				}
				if (flag)
					moves.push([
						i + negativeDiagonalPieceCount,
						j + negativeDiagonalPieceCount,
					]);
			}
			// left up
			if (
				i - negativeDiagonalPieceCount >= 0 &&
				j - negativeDiagonalPieceCount >= 0 &&
				boardState[i - negativeDiagonalPieceCount][
					j - negativeDiagonalPieceCount
				] != currentPieceNumber
			) {
				let flag = true;
				for (let k = 0; k < negativeDiagonalPieceCount; k++) {
					if (boardState[i - k][j - k] == opponentPieceNumber) {
						flag = false;
					}
				}
				if (flag)
					moves.push([
						i - negativeDiagonalPieceCount,
						j - negativeDiagonalPieceCount,
					]);
			}
		}
		// setSelectedPieceMoves(moves);
		return moves;
	}
	return [];
};


/*
** Move logics interaction with server
*/


export const moveBot = async (movePiece) => {
	try {
		const res = await axios({
			method: 'GET',
			url: 'move/',
			baseURL: baseUrl,
		});
		const res_1 = res.data;
		console.log(res_1);
		movePiece(res_1.i, res_1.j, res_1.i2, res_1.j2);
	} catch (err) {
		console.log(err);
	}
};

export const sendPlayerMoveToBot = async (i, j, i2, j2) => {
	try {
		const res = await axios({
			method: 'POST',
			url: 'humanmove/',
			data: { i, j, i2, j2 },
			baseURL: baseUrl,
		});
		const res_1 = res.data;
		console.log(res_1);
	} catch (err) {
		console.log(err);
	}
};


/*
** Game logic interaction with server
*/

export const initGame = (data) => (dispatch) => {
	dispatch({ type: ActionTypes.INIT_GAME, payload: data });
};


export const resetGame = (gameMode) => async (dispatch) => {
	console.log("game mode" + gameMode)
	dispatch({ type: ActionTypes.RESET_GAME });
	if (gameMode !== 1) {
		try {
			const res = await axios({
				method: 'GET',
				url: 'resetgame/',
				baseURL: baseUrl,
			});
			const res_1 = res.data;
			console.log(res_1);
			console.log('resetting game');
		} catch (err) {
			console.log(err);
		}
	}
};


export const newGame = (gameInfo) => async (dispatch) => {
	dispatch(initGame(gameInfo));
	// not human vs human
	if (gameInfo.gamemode !== 1) {
		try {
			const res = await axios({
				method: 'POST',
				url: 'newgame/',
				data: gameInfo,
				baseURL: baseUrl,
			});
			const res_1 = res.data;
			console.log(res_1);
			console.log('new game');
		} catch (err) {
			console.log(err);
		}
	}
};

