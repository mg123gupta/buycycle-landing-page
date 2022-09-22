import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div className="flex flex-col md:flex-row uppercase justify-between max-w-3xl mx-auto items-center">
			<div className="flex items-center font-bold text-xs md:text-sm">
				<img src="https://uilogos.co/img/logotype/hexa.png" height="100" width="100" alt="logo" className="mx-2 md:mx-4" />
				<Link to="/" aria-label="Home" className="mx-2 md:mx-4">Home</Link>
				<a href="#product" aria-label="Products" className="mx-2 md:mx-4">Products</a>
				<a href="#footer" aria-label="Contact" className="mx-2 md:mx-4">Contact</a>
			</div>
			<div className="flex items-center">
				<a href="/" aria-label="search" className="mx-2">
					<i className="transform hover:scale-105 fa fa-search" aria-hidden="true"></i>
				</a>
				<a href="/" aria-label="shopping cart" className="mx-2">
					<i className="transform hover:scale-105 fa fa-shopping-cart" aria-hidden="true"></i>
				</a>
				<a href="/" aria-label="user" className="mx-2">
					<i className="transform hover:scale-105 fa fa-user-circle" aria-hidden="true"></i>
				</a>
			</div>
		</div>
	)
}
