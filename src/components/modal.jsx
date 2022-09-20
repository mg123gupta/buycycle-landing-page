import React from 'react';
import { Link } from 'react-router-dom';

const DescSection = ({ props: { desc, pId, name } }) => <div className="w-full md:w-1/2">
	<p className="mb-8 text-xl">{name}</p>
	<p className="text-sm">{desc}</p>
	<Link to={`/product/${pId}`}>
		<button className="font-bold uppercase text-xs rounded-full px-4 py-2 text-gray-50 bg-yellow-700 mt-4 outline-none focus:outline-none">
			Learn More
		</button>
	</Link>
</div>

export default function modal() {
	const data = [
		{
			name: 'BTWIN Rockrider ST100',
			desc: "mountain bike is designed for getting started with MTB riding in dry and wet weather.. Effective? Strong? Both, please! Easily get through your first obstacles: lightweight aluminum frame and 27.5'' tires on double-walled rims.'",
			img: 'https://www.freeiconspng.com/thumbs/bicycle-png/santa-cruz-superlight-blue-bike-cycle-png-23.png',
			pId:1,
		},
		{
			name: 'BTWIN Rockrider ST100',
			desc: "mountain bike is designed for getting started with MTB riding in dry and wet weather.. Effective? Strong? Both, please! Easily get through your first obstacles: lightweight aluminum frame and 27.5'' tires on double-walled rims.'",
			img: 'https://www.freeiconspng.com/thumbs/bicycle-png/santa-cruz-superlight-blue-bike-cycle-png-23.png',
			pId:1,
		},
		{
			name: 'BTWIN Rockrider ST100',
			desc: "mountain bike is designed for getting started with MTB riding in dry and wet weather.. Effective? Strong? Both, please! Easily get through your first obstacles: lightweight aluminum frame and 27.5'' tires on double-walled rims.'",
			img: 'https://www.freeiconspng.com/thumbs/bicycle-png/santa-cruz-superlight-blue-bike-cycle-png-23.png',
			pId:1,
		}
	]
	return (
		<div className="max-w-xl md:max-w-4xl mx-auto" id="product">
			<h1 className="my-6 px-4 uppercase font-medium">MODELS</h1>
			{
				data.map(({ name, img, desc, pId }, index) => 
				<div key={index} className={`flex flex-col ${index%2 ? 'md:flex-row-reverse' : 'md:flex-row ' } p-4 my-8`}>
					<div className="relative w-full md:w-1/2">
						<img src={img} alt={name} className="mx-auto my-4" />
						<div className="-translate-x-1/2 absolute bg-yellow-400 h-2/3 left-1/2 top-0 transform w-9/12" style={{ borderRadius: index%2 === 1 ? "100px 100px 100px 330px" : "100px 330px 100px 100px", zIndex: '-1' }}></div>
					</div>
					<DescSection props={{desc, pId, name}} />
				</div>)
			}
		</div>
	)
}
