import React from 'react';

import { useState } from 'react'
import { Link, useHistory} from 'react-router-dom';
import axios from 'axios';

import Pool from '../UserPool';
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
	const user = Pool.getCurrentUser();
	const username = user.getUsername();

	const [open, setOpen] = useState(false);
	const [userInfo, setUserInfo] = useState({
		"username": username,
		"sports": false,
		"business": false,
		"entertainment": false,
		"health": false,
		"science": false,
		"technology": false,
		"frequency": "daily",
		"lastUpdated": new Date()
	});

	let history = useHistory();

	const inlineDivStyle = {
		whiteSpace: 'nowrap',
		display: 'inline',
		flexDirection: 'row',
		alignItems: 'center'
	};

	const changeSelection = (category) => {
		if (category == "daily" || category == "weekly") {
			setUserInfo({...userInfo, 'frequency': category});
		} else {
			setUserInfo({...userInfo, [category]: !userInfo[category]});
		}
	}

	const onSave = async () => {
		const userInfoNoUsername = (({ username, ...o }) => o)(userInfo);
		const data = { 
			"username" : username,
			"settings" : userInfoNoUsername
		}

		const config = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods':'GET,POST,DELETE,PATCH,OPTIONS',
		}

		const apiURL = `https://h0kvzfoszc.execute-api.us-west-1.amazonaws.com/dev/settings`;

		await axios.patch(apiURL, data, config).then(function(res) {
			console.log("PATCH SUCCESS: ", res);
		})
		.catch(function(err) {
			console.error("PATCH ERROR: ", err);
		})
		.finally(() => {
			history.go("/");
		});
	}

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
				<form>
					<div className="overflow-hidden sm:rounded-md">
						<div className="bg-white px-4 py-5 sm:p-6">
							<div className="grid grid-cols-2 gap-6">

								{/* Start left Column */}
								<div className="space-y-8 px-11">

									{/* Title & Subtitle */}
									<div className="md:col-span-1">
										<div className="px-4 sm:px-0">
											<h3 className="text-3xl font-bold leading-6 text-gray-900 py-4">Select Newsletter Categories to subscribe to: </h3>
										</div>
									</div>

									{/* Sports */}
									<div className="flex items-start ">
										<div className="flex h-5 items-center">
											<input
												id="sports"
												name="sports"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-red-600 focus:ring-red-500"
												onChange={() => changeSelection("sports")}
												checked={userInfo.sports}
											/>
										</div>
										<div className="ml-3 " style={inlineDivStyle}>
											<label htmlFor="sports" className="text-2xl font-bold text-gray-700">
												Sports <img src={sportsIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Business */}
									<div className="flex items-start">
										<div className="flex h-4 items-center">
											<input
												id="business"
												name="business"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-red-600 focus:ring-red-500"
												onChange={() => changeSelection("business")}
												checked={userInfo.business}
											/>
										</div>
										<div className="ml-3">
											<label htmlFor="business" className="text-2xl font-bold text-gray-700">
												Business <img src={financeIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Entertainment */}
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="entertainment"
												name="entertainment"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-red-600 focus:ring-red-500"
												onChange={() => changeSelection("entertainment")}
												checked={userInfo.entertainment}
											/>
										</div>
										<div className="ml-3 ">
											<label htmlFor="entertainment" className="text-2xl font-bold text-gray-700">
												Entertainment <img src={techIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Health */}
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="health"
												name="health"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-red-600 focus:ring-red-500"
												onChange={() => changeSelection("health")}
												checked={userInfo.health}
											/>
										</div>
										<div className="ml-3">
											<label htmlFor="health" className="text-2xl font-bold text-gray-700">
												Health <img src={travelIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Science */}
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="science"
												name="science"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-red-600 focus:ring-red-500"
												onChange={() => changeSelection("science")}
												checked={userInfo.science}
											/>
										</div>
										<div className="ml-3 ">
											<label htmlFor="science" className="text-2xl font-bold text-gray-700">
												Science <img src={healthfitnessIcon} style={inlineDivStyle} />
											</label>
										</div>
									</div>

									{/* Technology */}
									<div className="flex items-start">
										<div className="flex h-5 items-center">
											<input
												id="technology"
												name="technology"
												type="checkbox"
												className="h-8 w-8 rounded border-gray-300 text-red-600 focus:ring-red-500"
												onChange={() => changeSelection("technology")}
												checked={userInfo.technology}
											/>
										</div>
										<div className="ml-3 ">
											<label htmlFor="technology" className="text-2xl font-bold text-gray-700">
												Technology <img src={healthfitnessIcon} style={inlineDivStyle} />
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
											className="h-8 w-8 border-gray-300 text-red-600 focus:ring-red-500"
											onChange={() => changeSelection("daily")}
											checked={userInfo.frequency == "daily"}
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
											className="h-8 w-8 border-gray-300 text-red-600 focus:ring-red-500"
											onChange={() => changeSelection("weekly")}
											checked={userInfo.frequency == "weekly"}
										/>
										<label htmlFor="weekly" className="text-2xl text-bold ml-3 block font-bold text-gray-700">
											Weekly
										</label>
									</div>
								</div>
								{/* End Right Column */}

								{/* Start Confirm Button Row */}
								<div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<Link to='/loggedIn'> 
										<button
											type="submit"
											className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-red-600 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:"
											onClick={() => onSave()}
										>
											Confirm
										</button>
									</Link>
								</div> 
								{/* End Confirm Button Row */}

							</div>    {/* End Grid */}
						</div>		{/* End BG Color */}
					</div>		{/* End overflow-hidden shadow */}
				</form>
			</div>

		</>
	);
}

export default CategorySelection;