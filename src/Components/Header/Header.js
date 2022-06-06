import React from 'react';
import './Header.scss';
import headerphoto from '../../assets/headerphoto.png';

function Header(props) {
	return (
		<div className='showcase'>
			<div className='showcase-container'>
				<div className='showcase-content'>
					<h1>Make Your Marketing Real</h1>
					<p className='my-1'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
						asperiores doloribus voluptatem, quae consequatur mollitia
						voluptates nisi enim quam, cum, nesciunt provident. Ipsum quae
						perferendis dolorem eligendi at expedita incidunt.
					</p>
					<div className='btn-options'>
						<a className='btn btn-primary' href='#'>
							Learn More
						</a>
						<a className='btn btn-secondary' href='#'>
							Sign Up
						</a>
					</div>
				</div>
				<div className='showcase-image-container'>
					<img src={headerphoto} alt='failed to load' />
				</div>
			</div>
		</div>
	);
}

export default Header;
