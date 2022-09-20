import React, { useState , useEffect} from 'react'
import { motion } from "framer-motion" 

export default function ViewProduct() {
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	const [dataShow, setdataShow] = useState(1)
	const [count, setCount] = useState(1)
	return (
		<motion.div animate={{ opacity: 1}} initial={{ opacity: 0}} className="mt-10">
			<div className="flex flex-col md:flex-row max-w-3xl mx-auto p-4">
				<div className="md:w-1/2">
					<img src="https://www.freeiconspng.com/thumbs/bicycle-png/santa-cruz-superlight-blue-bike-cycle-png-23.png" alt="cycle" />
				</div>
				<div className="md:w-1/2 md:ml-10">
					<div className="p-4 w-36 font-medium text-black bg-yellow-500" style={{ borderRadius: "100px 100px 330px 100px" }}>
						<p>SIAMSE</p>
						<p className="text-white">$3400</p>
					</div>
					<div className="text-black">
						<p>Colors:</p>
						<div className="flex mb-2">
							<span className="p-3 mr-2 rounded-full bg-red-700 cursor-pointer">
							</span>
							<span className="p-3 mx-2 rounded-full bg-blue-700 cursor-pointer">
							</span>
						</div>
						<p>Size:</p>
						<select className="mb-2">
							<option>
								20"
						 	</option>
							 <option>
								24"
						 	</option>
						</select>
						<p>Ouantity</p>
						<input type="number" value={count} onChange={(e)=>setCount(e.currentTarget.value < 1 ? 1 : e.currentTarget.value)} className="w-16 px-4 bg-gray-100 mb-2" /><br />
						<button className="text-white bg-black px-4 py-2 rounded my-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
							ADD TO CART
					 	</button>
					</div>
				</div>
			</div>
			<div>
				<div className="flex max-w-4xl mx-auto px-8">
					<button className={`rounded-t-lg uppercase font-bold px-4 py-2 outline-none focus:outline-none ${dataShow === 1 ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={()=>setdataShow(1)}>description</button>
					<button className={`rounded-t-lg uppercase font-bold px-4 py-2 outline-none focus:outline-none ${dataShow === 2 ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={()=>setdataShow(2)}>specification</button>
				</div>
				<div className="bg-black h-96 text-white">
					<div className="max-w-4xl mx-auto p-8 grid grid-cols-2 gap-4 text-xs md:text-sm">
						<div>
						{
								dataShow === 1?
								'Rugged and reliable, our range of Roadsters are truly a cut above the rest when it comes to strength and durability. Our bicycles, designed to carry loads as well as travel for long distance without stopping, are a popular choice amongst customers who look at bicycles as an associate in their work. When it comes to trust and performance, nothing can beat our tough bicycles.'
								:
								'FRAME43.5cm (17) FORKSuspension ForkWHEELTyre 27.5 X 2.35 HANDLEHandle Bar Bulged 31.75 Short BendSADDLEPu Cushion With Quick ReleaseC RANKCotterless W/discBRAKEFront & Rear Disc BrakeCOLORMatt Black, Matt Silver/black, Matt Floro Neon Green/black'
							}
						</div>
						<div>
							<img src="https://www.nottinghamshire.gov.uk/media/1552/cycling.jpg?width=426&height=282" alt="cycle description"/>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
