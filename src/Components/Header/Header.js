import React from 'react';

function Header(props) {
	return (
		<div className='showcase-container'>
			<div className='showcase-content'>
				<h1>Make Your Marketing Real</h1>
				<p className='my-1'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
					asperiores doloribus voluptatem, quae consequatur mollitia voluptates
					nisi enim quam, cum, nesciunt provident. Ipsum quae perferendis
					dolorem eligendi at expedita incidunt.
				</p>
				<a href='#' className='btn-primary'>
					Learn More
				</a>
				<a href='#'>Sign Up</a>
			</div>
			<img
				src='https://themesbrand.com/zooki/layouts/images/home-2-img.png'
				alt='unable to load'
			/>
		</div>
	);
}

export default Header;
