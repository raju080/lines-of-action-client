import React from 'react';
import {Navbar, NavItem, NavLink} from 'react-bootstrap';

function Header() {
  return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand>Lines Of Action</Navbar.Brand>
			<NavItem>
				<NavLink>Restart</NavLink>
			</NavItem>
			<NavItem>
				<NavLink>Change Bot</NavLink>
			</NavItem>
			<NavItem>
				<NavLink>New Game</NavLink>
			</NavItem>
			<NavItem>
				<NavLink>Exit</NavLink>
			</NavItem>
		</Navbar>
	);
}

export default Header;
