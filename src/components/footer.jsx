import React from 'react'
import facebookImg from '../assets/images/facebook.svg';
import twitterImg from '../assets/images/twitter.svg';
import instaImg from '../assets/images/insta.svg';

export default function Footer() {
	return (
		<div className="text-white text-xs leading-8 bg-black px-4 py-8" id="footer">
			<div className="grid grid-cols-3 md:grid-cols-4 gap-1 md:max-w-3xl mx-auto">
				<ul>
					<li className="hover:underline"><a href="/" aria-label="Company">Company</a></li>
					<li className="hover:underline"><a href="/" aria-label="Material">Material</a></li>
					<li className="hover:underline"><a href="/" aria-label="Our Products">Our Products</a></li>
				</ul>
				<ul>
					<li className="hover:underline"><a href="/" aria-label="Setup">Setup</a></li>
					<li className="hover:underline"><a href="/" aria-label="Warranty">Warranty</a></li>
					<li className="hover:underline"><a href="/" aria-label="Register">Register</a></li>
				</ul>
				<ul>
					<li className="hover:underline"><a href="/" aria-label="Contact">Contact US</a></li>
					<li className="hover:underline"><a href="/" aria-label="Track Order">Track Order</a></li>
					<li className="hover:underline"><a href="/" aria-label="Shipping partner">Shipping partner</a></li>
					<li className="hover:underline"><a href="/" aria-label="Carrers">Carrers</a></li>
				</ul>
				<ul>
					<li className="grid grid-cols-3 w-28 my-4">
						<a href="/" aria-label="instagram"><img src={instaImg} alt="instagram" className="my-auto  transform hover:scale-105" /></a>
						<a href="/" aria-label="twitter"><img src={twitterImg} alt="twitter" className="my-auto  transform hover:scale-105" /></a>
						<a href="/" aria-label="facebook"><img src={facebookImg} alt="facebook" className="my-auto  transform hover:scale-105" /></a>
					</li>
					<li>Subscribe Email</li>
					<li className="flex h-8">
						<input type="email" placeholder="Email"  className="px-4 py-1 bg-black text-white border-white border rounded-l-md"/>
						<button className="px-3 py-1 bg-white border border-white text-black rounded-r-md text-xs outline-none focus:outline-none">OK</button>
					</li>
				</ul>
			</div>
			<p className="text-xs font-thin mt-6 md:max-w-3xl mx-auto text-gray-100">© 2021 Brand Cycles Ltd. All Rights Reserved | <a href="/" aria-label="Terms & Conditions/ Policy" className="hover:underline">Terms & Conditions/ Policy</a></p>
		</div>
	)
}
