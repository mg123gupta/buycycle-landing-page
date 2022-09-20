import React from 'react'

export default function review() {
	const reviewData=[
		{
			img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			name:'rahul sharma',
			stars:5,
			desc:'I very recently bought a Montra from CMB and what can I say, it is simply amazing! The cycle was delivered to me like i had got the cycle from the shop.'
		},
		{
			img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			name:'rahul sharma',
			stars:5,
			desc:'I very recently bought a Montra from CMB and what can I say, it is simply amazing! The cycle was delivered to me like i had got the cycle from the shop.'
		},
		{
			img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			name:'rahul sharma',
			stars:5,
			desc:'I very recently bought a Montra from CMB and what can I say, it is simply amazing! The cycle was delivered to me like i had got the cycle from the shop.'
		}
	];

	const customerPhotos=[
		'https://www.abc.net.au/news/image/12117816-3x2-940x627.jpg',
		'https://uknow.uky.edu/sites/default/files/styles/uknow_story_image/public/bikeride1.jpg',
		'https://www.bikeauckland.org.nz/wp-content/uploads/2015/02/people-cycling-5-001.jpg',
		'https://www.nottinghamshire.gov.uk/media/1552/cycling.jpg?width=426&height=282',
		'https://cms.qz.com/wp-content/uploads/2020/05/RTRH458-e1589047623310.jpg?quality=75&strip=all&w=410&h=231',
		'https://uknow.uky.edu/sites/default/files/styles/uknow_story_image/public/bikeride1.jpg',
	];

	return (
		<div>
			<h1 className="mt-8 mb-4 px-4 text-center uppercase font-bold">Reviews</h1>
			<div className="bg-yellow-400">
				<div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto py-8">
					{reviewData.map(({img, name, stars, desc} ,index)=>
						<div className="p-4" key={index}>
							<div className="flex">
								<img src={img} alt={name} className="rounded-full h-14 w-14" width="50" height="50"/>
								<div className="flex flex-col justify-between py-1">
									<p className="mx-2">{name}</p>
									<div className="flex">
									{
										[...Array(stars).keys()].map((data)=><i key={data} className="text-yellow-600 fa fa-star mx-1" aria-hidden="true"></i>)
									}
									</div>
								</div>
							</div>
							<p className="text-xs my-2">{desc}</p>
						</div>
					)}
				</div>
			</div>
			<p className="mt-8 mb-4 px-4 text-center uppercase font-bold">CUSTOMER PHOTOS</p>
			<div className="grid md:grid-cols-3 gap-2 max-w-4xl mx-auto">
				{
					customerPhotos.map((img , index)=><img key={index} src={img} alt={`cutomer_Photos_${index}`} style={{ height:"200px",width:"300px" }} className="mx-auto"/>)
				}
			</div>
			<p className="my-6 text-xs max-w-4xl mx-auto font-medium px-4">
				Bicycles were introduced in the 19th century in Europe, and by the early 21st century, more than 1 billion were in existence. These numbers far exceed the number of cars, both in total and ranked by the number of individual models produced. They are the principal means of transportation in many regions. They also provide a popular form of recreation, and have been adapted for use as children's toys, general fitness, military and police applications, courier services, bicycle racing, and bicycle stunts.	
			</p>
		</div>
	)
}
