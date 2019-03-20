import React from 'react';
import { Link } from "gatsby"

const Nav = () => {
	//
	const pages = [
		'home',
		'about',
		'cv',
	];


	const navInner = pages.map((page, index) => {
		let href;
		if (page === 'home') {
			href = '/';
		} else {
			href = `/${page}`;
		}
		return (
			<Link
				key={index}
				to={href}
				activeStyle={{
					// color: "red",
					textDecoration: 'underline',
				}}
				style={{
					marginRight: '1em',
					boxShadow: 'none',
				}}
			>
				{page}
			</Link>
		);
	});

	return (
		<nav>
			{navInner}
		</nav>
	);
};

export default Nav;
