import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


import Header from './Header';
import Footer from './Footer';
import GameBoard from './GameBoard';
import GameInfo from './GameInfo';
import GameBegin from './GameBegin';
import * as ActionTypes from '../redux/ActionTypes';
import {
	findMoves,
	initGame,
	isMatchOver,
	moveBot,
	sendPlayerMoveToBot,
} from '../redux/actionCreators';
import '../styles/Main.css';

const mapStateToProps = (state) => {
	return {
		player1: state.board.player1,
		player2: state.board.player2,
		winner: state.board.winner,
		gameMode: state.board.gameMode,
		currentPlayer: state.board.currentPlayer,
		boardState: state.board.board,
		selectedPieceMoves: state.board.selectedPieceMoves,
		selectedPiece: state.board.selectedPiece,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		initGame: data => dispatch(initGame(data)),
	}
};

function Main(props) {
	// let [boardState, setBoardState] = useState([]);
	// let [selectedPieceMoves, setSelectedPieceMoves] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		if (props.gameMode == 2 && props.currentPlayer == 2) {
			moveBot(movePiece);
			//movePiece(botmove.i, botmove.j, botmove.i2, botmove.j2);
		}
	}, [props.currentPlayer]);

	const isInCurrentMoves = (i, j) => {
		let flag = false;
		for (let k = 0; k < props.selectedPieceMoves.length; k = k + 1) {
			if (
				i == props.selectedPieceMoves[k][0] &&
				j == props.selectedPieceMoves[k][1]
			) {
				flag = true;
			}
		}
		return flag;
	};

	const movePiece = (i, j, i2, j2) => {
		// alert('moving piece: '+ i + ' ' + j + ' to :' + i2 + ' ' + j2)
		if (props.gameMode == 2 && props.currentPlayer == 1)
			sendPlayerMoveToBot(i, j, i2, j2);
		let state = [];
		props.boardState.map((row) => {
			state.push(row);
		});
		state[i2][j2] = state[i][j];
		state[i][j] = 0;
		dispatch({ type: ActionTypes.SET_BOARD_STATE, payload: state });
		dispatch({
			type: ActionTypes.SET_CURRENT_PLAYER,
			payload: props.currentPlayer == 1 ? 2 : 1,
		});
		const winner = isMatchOver(props.boardState);
		if (winner >= 0) {
			dispatch({ type: ActionTypes.SET_WINNER, payload: winner });
			dispatch({ type: ActionTypes.RESET_SELECTED_PIECE_MOVES });
		}
	};

	const handlePieceClick = (i, j) => {
		if (
			// checking if it is turn for the player clicked
			props.gameMode == 1 ||
			(props.gameMode == 2 && props.currentPlayer == 1)
		) {
			if (
				props.winner < 0 &&
				!(i == props.selectedPiece.i && j == props.selectedPiece.j)
			) {
				if (isInCurrentMoves(i, j)) {
					movePiece(props.selectedPiece.i, props.selectedPiece.j, i, j);
					dispatch({
						type: ActionTypes.SET_SELECTED_PIECE,
						payload: { i: -1, j: -1 },
					});
					dispatch({ type: ActionTypes.RESET_SELECTED_PIECE_MOVES });
				} else {
					dispatch({ type: ActionTypes.SET_SELECTED_PIECE, payload: { i, j } });
					dispatch({ type: ActionTypes.RESET_SELECTED_PIECE_MOVES });
					let moves = findMoves(i, j, props.boardState, props.currentPlayer);
					dispatch({
						type: ActionTypes.SET_SELECTED_PIECE_MOVES,
						payload: moves,
					});
				}
			}
		}
	};


	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/gamebegin'>
					<GameBegin initGame={props.initGame} />
				</Route>

				<Route exact path='/gameplay'>
					<div className='container'>
						<div className='row' style={{marginTop: '20px'}}>
							<div className='col-md-8'>
								<GameBoard
									state={props.boardState}
									currentPlayer={props.currentPlayer}
									findMoves={handlePieceClick}
									selectedPieceMoves={props.selectedPieceMoves}
								/>
							</div>
							<div className='col-md-4'>
								<GameInfo
									player1={props.player1}
									player2={props.player2}
									gameMode={props.gameMode}
									currentPlayer={props.currentPlayer}
									winner={props.winner}
								/>
							</div>
						</div>
					</div>
				</Route>

				<Redirect to='/gamebegin' />
			</Switch>
		</>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
