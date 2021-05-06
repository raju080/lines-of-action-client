import React from 'react';
import '../styles/Game.css';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const PIECE_COLOR = '';
const SQUARE_COLOR = 'darkgray';
const SUGGESTION_SQUARE_COLOR = 'grey';
const SUGGESTION_PIECE_COLOR = 'grey';

const pieceToColorMap = {
	0: 'darkgray',
	1: 'black',
	2: 'white',
};


const Piece = ({color}) => {
	return <FontAwesomeIcon icon={faCircle} style={{fontSize:40, color: `${color}`}} />;
}

const Square = ({pieceColor, squareColor, i, j, onClick }) => {
	return (
		<Button onClick={() => onClick(i, j)} className='squareButton' style={{backgroundColor: `${squareColor}`}}>
			<Piece color={pieceColor} />
		</Button>
	);
};

function GameBoard({state, currentPlayer, onClickPiece, selectedPieceMoves}) {

	const isInCurrentMoves = (i, j) => {
		let flag = false;
		for (let k=0; k<selectedPieceMoves.length; k=k+1) {
			if (i==selectedPieceMoves[k][0] && j==selectedPieceMoves[k][1]) {
				flag = true;
			}
		}
		return flag;
	}

	return (
		<>
			<div className='gameBoard'>
				{state &&
					state.map((row, i) => (
						<div className='row'>
							{row && row.map((cell, j) => {
								let squareColor = isInCurrentMoves(i, j) ? SUGGESTION_SQUARE_COLOR : SQUARE_COLOR;
								let pieceColor = isInCurrentMoves(i, j) && cell==0 ? SUGGESTION_PIECE_COLOR : pieceToColorMap[cell];
								return (
									<Square
										squareColor={squareColor}
										pieceColor={pieceColor}
										i={i}
										j={j}
										onClick={onClickPiece}
									/>
								);
							 })}
						</div>
					))}
			</div>
		</>
	);
}

export default GameBoard;
