import React from 'react';
import './Navbar.scss';

function Navbar(props) {
	return (
		<nav className='nav-container'>
			<h1 className='logo'>My Website</h1>
			<ul>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Services</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
