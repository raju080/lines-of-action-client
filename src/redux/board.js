import * as ActionTypes from './ActionTypes';

let initialState6 = [
	[0, 1, 1, 1, 1, 0],
	[2, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 2],
	[0, 1, 1, 1, 1, 0],
];

let initialState8 = [
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

const Board = (
	state = {
		gameMode: GameModes.HUMAN_VS_BOT1,
		player1: 'Player 1',
		player2: 'Player 2',
		currentPlayer: 1,
		winner: -1,
		board: initialState8,
		selectedPieceMoves: [],
		selectedPiece: { i: -1, j: -1 },
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.SET_BOARD_STATE:
			if (action.payload == '6') {
				return { ...state, board: initialState6 };
			} else if (action.payload == '8') {
				return { ...state, board: initialState8 };
			}
			return state;

		case ActionTypes.SET_GAME_MODE:
			return { ...state, gameMode: action.payload };

		case ActionTypes.SET_PLAYER1:
			return { ...state, player1: action.payload };

		case ActionTypes.SET_PLAYER2:
			return { ...state, player2: action.payload };

		case ActionTypes.SET_CURRENT_PLAYER:
			return { ...state, currentPlayer: action.payload };

		case ActionTypes.SET_SELECTED_PIECE_MOVES:
			return { ...state, selectedPieceMoves: action.payload };

		case ActionTypes.RESET_SELECTED_PIECE_MOVES:
			return { ...state, selectedPieceMoves: [] };

		case ActionTypes.SET_SELECTED_PIECE:
			return { ...state, selectedPiece: action.payload };

		case ActionTypes.SET_WINNER:
			return { ...state, winner: action.payload };

		default:
			return state;
	}
};

export default Board;