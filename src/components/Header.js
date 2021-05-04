import React from 'react';
import { Navbar, NavItem, NavLink, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header({ gameMode, resetGame }) {
	return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand>Lines Of Action</Navbar.Brand>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='ml-auto'>
					<NavItem>
						<NavLink onClick={() => resetGame(gameMode)}>Restart</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Change Bot</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/gamebegin'>New Game</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Exit</NavLink>
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
