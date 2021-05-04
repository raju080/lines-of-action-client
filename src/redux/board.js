import * as ActionTypes from './ActionTypes';

let initialBoardState6 = [
	[0, 1, 1, 1, 1, 0],
	[2, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 2],
	[0, 1, 1, 1, 1, 0],
];

let initialBoardState8 = [
	[0, 1, 1, 1, 1, 1, 1, 0],
	[2, 0, 0, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 0, 0, 2],
	[0, 1, 1, 1, 1, 1, 1, 0],
];

const GameModes = {
	HUMAN_VS_HUMAN: 1,
	HUMAN_VS_BOT1: 2,
	HUMAN_VS_BOT2: 3,
	HUMAN_VS_BOT3: 4,
};

const initialGameState = {
	gameMode: GameModes.HUMAN_VS_BOT1,
	player1: 'Player 1',
	player2: 'Player 2',
	currentPlayer: 1,
	winner: -1,
	board: initialBoardState8,
	selectedPieceMoves: [],
	selectedPiece: { i: -1, j: -1 },
};

const Board = (state = { ...initialGameState }, action) => {
	switch (action.type) {
		case ActionTypes.SET_BOARD_STATE:
			let tempBoardState = []
			action.payload.map((row) => tempBoardState.push(row.slice()));
			return { ...state, board: tempBoardState };

		case ActionTypes.SET_GAME_MODE:
			return { ...state, gameMode: parseInt(action.payload) };

		case ActionTypes.SET_PLAYER1:
			return { ...state, player1: action.payload };

		case ActionTypes.SET_PLAYER2:
			return { ...state, player2: action.payload };

		case ActionTypes.SET_CURRENT_PLAYER:
			return { ...state, currentPlayer: parseInt(action.payload) };

		case ActionTypes.SET_SELECTED_PIECE_MOVES:
			return { ...state, selectedPieceMoves: action.payload };

		case ActionTypes.RESET_SELECTED_PIECE_MOVES:
			return { ...state, selectedPieceMoves: [] };

		case ActionTypes.SET_SELECTED_PIECE:
			return { ...state, selectedPiece: action.payload };

		case ActionTypes.SET_WINNER:
			return { ...state, winner: action.payload };

		case ActionTypes.INIT_GAME:
			let tempState = {
				...initialGameState,
				gameMode: parseInt(action.payload.gamemode),
				player1: action.payload.p1name,
				player2: action.payload.p2name,
			};
			if (action.payload.boardsize === "6") {
				tempState = { ...tempState, board: initialBoardState6 };
			} else if (action.payload.boardsize === "8") {
				tempState = { ...tempState, board: initialBoardState8 };
			}
			return tempState;

		case ActionTypes.RESET_GAME:
			if (state.board.length === 6) {
				return { ...state, board: initialBoardState6 };
			} else if (state.board.length === 8) {
				return { ...state, board: initialBoardState8 };
			}
			return { ...state, board: initialBoardState8 };

		default:
			return state;
	}
};

export default Board;
