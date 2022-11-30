import React from 'react';

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

// import HomeIcon from './house.png';
// import PersonIcon from './person.png';
// import { ReactComponent as EllipseIcon } from './ellipse.png';


import sportsIcon from './images/sports.jpg';
import foodIcon from './images/food.jpg';
import techIcon from './images/tech.jpg';
import travelIcon from './images/travel.jpg';
import musicIcon from './images/music.jpg';
import healthfitnessIcon from './images/healthfitness.jpg';
import financeIcon from './images/finance.jpg';
import memeIcon from './images/meme.jpg';
import logoIcon from './images/logo.jpg';

const CategorySelection = () => {
	const [open, setOpen] = useState(false);

	const cancelButtonRef = useRef(null);

	const inlineDivStyle = {
		whiteSpace: 'nowrap',
		display: 'inline',
		flexDirection: 'row',
		alignItems: 'center'
	};

	return (
		<>
			<div className='heading py-16 px-16'>
				<img className="w-[300px] h-[300p]" src={logoIcon} />
				{/* <div className='heading-text'>
					<h1 className="px-4">-iconhere-</h1>
					<h1>Hello username</h1>    
				</div> */}
			</div>

			<div className="pb-20 px-40 mt-5 md:col-span-2 md:mt-0">
				<form action="#" method="POST">
				<div className="overflow-hidden shadow sm:rounded-md">
					<div className="bg-white px-4 py-5 sm:p-6">
						<div className="grid grid-cols-2 gap-6">

						{/* Start left Column */}
						<div className="space-y-8 px-11">

						{/* Title & Subtitle */}
							<div className="md:col-span-1">
								<div className="px-4 sm:px-0">
									<h3 className="text-3xl font-bold leading-6 text-gray-900 py-4">Select Newsletter Categories to subscribe to: </h3>
										{/* <p className="mt-1  text-gray-600">Decide which categories you want to see!</p> */}
								</div>
							</div>


									{/* Sports */}
							<div className="flex items-start ">
								<div className="flex h-5 items-center">
									<input
										id="sports"
										name="sports"
										type="checkbox"
										className="h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
											/>
								</div>
										<div className="ml-3 " style={inlineDivStyle}>
											<label htmlFor="sports" className="text-2xl font-bold text-gray-700">
												Sports <img src={sportsIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Food */}
									<div className="flex items-start">
										<div className="flex h-4 items-center">
											<input
												id="food"
												name="food"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
											/>
										</div>
										<div className="ml-3">
											<label htmlFor="food" className="text-2xl font-bold text-gray-700">
												Food <img src={foodIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Tech */}
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="tech"
												name="tech"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
											/>
										</div>
										<div className="ml-3 ">
											<label htmlFor="tech" className="text-2xl font-bold text-gray-700">
												Tech <img src={techIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Travel */}
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="travel"
												name="travel"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
											/>
										</div>
										<div className="ml-3">
											<label htmlFor="travel" className="text-2xl font-bold text-gray-700">
												Travel <img src={travelIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Music */}
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="music"
												name="music"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
											/>
										</div>
										<div className="ml-3 ">
											<label htmlFor="music" className="text-2xl font-bold text-gray-700">
												Music <img src={musicIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Health/Fitness */}
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="healthfitness"
												name="healthfitness"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
											/>
										</div>
										<div className="ml-3 ">
											<label htmlFor="healthfitness" className="text-2xl font-bold text-gray-700">
												Health/Fitness <img src={healthfitnessIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Finance */}
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="finance"
												name="finance"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
											/>
										</div>
										<div className="ml-3 ">
											<label htmlFor="finance" className="text-2xl font-bold text-gray-700">
												Finance <img src={financeIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Memes */}
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="memes"
												name="memes"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
											/>
										</div>
										<div className="ml-3 ">
											<label htmlFor="memes" className="text-2xl font-bold text-gray-700">
												Memes <img src={memeIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>
								</div>
								{/* End Left Column */}

								{/* Start Right Column */}
								<div className="space-y-6">
									{/* Title & Subtitle */}
									<div className="md:col-span-1">
										<div className="px-4 sm:px-0">
											<h3 className="text-3xl font-bold leading-6 text-gray-900 py-4">Select Frequency of News Updates:</h3>
											{/* <p className="mt-1  text-gray-600">Daily or Monthly</p> */}
										</div>
									</div>

									{/* Frequency */}
									<div className="flex items-center">
										<input
											id="daily"
											name="frequency"
											type="radio"
											className="h-8 w-8 border-gray-300 text-indigo-600 focus:ring-indigo-500"
										/>
										<label htmlFor="daily" className="text-2xl font-bold ml-3 block text-gray-700">
											Daily
										</label>
									</div>
									<div className="flex items-center">
										<input
											id="weekly"
											name="frequency"
											type="radio"
											className="h-8 w-8 border-gray-300 text-indigo-600 focus:ring-indigo-500"
										/>
										<label htmlFor="weekly" className="text-2xl text-bold ml-3 block font-bold text-gray-700">
											Weekly
										</label>
									</div>
								</div>

							<div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
						<button
							type="submit"
							className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-red-600 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:"
							onClick={() => setOpen(false)}
							ref={cancelButtonRef}
						>
							Confirm
						</button>
													
					</div> 




							</div>    {/* End Grid */}
						</div>		{/* End BG Color */}
					</div>		{/* End overflow-hidden shadow */}


					
					
					

				</form>
			</div>

		</>
	);
}

export default CategorySelection;