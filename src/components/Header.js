import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, NavItem, NavLink, Nav } from 'react-bootstrap';

function Header({ gameMode, resetGame }) {
	const history = useHistory();
	const startNewGame = () => {
		resetGame(gameMode);
		history.push('/gamebegin');
	}
	return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand>Lines Of Action</Navbar.Brand>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='ml-auto'>
					<NavItem>
						<NavLink onClick={() => resetGame(gameMode)}>Restart</NavLink>
					</NavItem>
					<NavItem>
						<NavLink onClick={() => startNewGame()}>New Game</NavLink>
					</NavItem>
					<NavItem onClick={() => {history.push('/gamerules')}}>
						<NavLink>Game Rules</NavLink>
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
