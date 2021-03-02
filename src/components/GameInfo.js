import React from 'react';
import {Card,Row, Col} from 'react-bootstrap';
import '../styles/Game.css';

function GameInfo({gameMode, player1, player2, currentPlayer, winner}) {

  return (
		<div>
			<Card>
				<Card.Header>
					<h4>Game Information</h4>
				</Card.Header>
				<Card.Body>
					<Row>
						<h6>Game Mode : {gameMode} </h6>
					</Row>
					<Row>
						<h6>Player 1 : {player1} </h6>
					</Row>
					<Row>
						<h6>Player 2 : {player2} </h6>
					</Row>
					<Row>
						<h6>Current Move : Player {currentPlayer} </h6>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
}

export default GameInfo;
