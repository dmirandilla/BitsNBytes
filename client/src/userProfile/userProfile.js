import './UserProfile.css'
import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaRegUserCircle, FaHome } from 'react-icons/fa';

import axios from 'axios';
import Pool from '../UserPool';

// import HomeIcon from './house.png';
// import personIcon from './person.png';
// import { ReactComponent as EllipseIcon } from './ellipse.png';

import sportsIcon from './images/sports.jpg';
import foodIcon from './images/food.jpg';
import techIcon from './images/tech.jpg';
import travelIcon from './images/travel.jpg';
import musicIcon from './images/music.jpg';
import healthfitnessIcon from './images/healthfitness.jpg';
import financeIcon from './images/finance.jpg';
import memeIcon from './images/meme.jpg';

function UserProfile() {
	const [open, setOpen] = useState(false);
	const [userInfo, setUserInfo] = useState({});

	const cancelButtonRef = useRef(null);

	const inlineDivStyle = {
		whiteSpace: 'nowrap',
		display: 'inline',
		flexDirection: 'row',
		alignItems: 'center'
	};

	let user = Pool.getCurrentUser();
	let username = user.getUsername();

	useEffect(() => {
		async function fetchData() {
			const apiURL = `https://h0kvzfoszc.execute-api.us-west-1.amazonaws.com/dev/settings?username=${username}`;

			await axios.get(apiURL)
				.then(function({data}) {
					setUserInfo(data);
				})
				.catch(function(err) {
					console.log("ERR: ", err);
				});
		}

		fetchData();
	}, []);

	const setExistingSelections = () => {
		for (const category in userInfo) {
			console.log('category: ', category);
			if (userInfo[category] == true) {
				document.getElementById(category).checked = true;
			}
		}
	}

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
		});

		setOpen(false);
	}

  return (
    <>
			<div className='heading' style={{ backgroundColor: '#E5E5E5' }}>
				<div className='space-x-50'>
					<div className='heading-icon'>
						<FaRegUserCircle size={100} />
					</div>
					<div className='heading-text'>
						<h1>Hello, {userInfo.username}!</h1>  
					</div>
					<div className='heading-home'>
						<a
							href='/'
						>
							<FaHome size={50} />
						</a>
					</div>
				</div>
			</div>

			<div className="place-content-center h-56s">
				<button onClick={() => setOpen(true)} type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
					Edit Settings
				</button>
			</div>

			{/* MODAL */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
									<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
										<div className="sm:flex sm:items-start">
											<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
												<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
													Edit Settings
												</Dialog.Title>
											</div>
										</div>
									</div>

									<div className="mt-5 md:col-span-2 md:mt-0">
										<form action="#" method="POST">
											<div className="overflow-hidden shadow sm:rounded-md">
												<div className="bg-white px-4 py-5 sm:p-6">
													<div className="grid grid-cols-2 gap-6">
														
														{/* Start left Column */}
														<div className="space-y-4">

															{/* Title & Subtitle */}
															<div className="md:col-span-1">
																<div className="px-4 sm:px-0">
																	<h3 className="text-lg font-medium leading-6 text-gray-900">Categories Subscriptions:</h3>
																</div>
															</div>


															{/* Sports */}
															<div className="flex items-start">
																<div className="flex h-5 items-center">
																	<input
																		id="sports"
																		name="sports"
																		type="checkbox"
																		className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																		onChange={() => changeSelection("sports")}
																		checked={userInfo.sports}
																	/>
																</div>
																<div className="ml-3 text-sm" style={inlineDivStyle}>
																	<label htmlFor="sports" className="font-medium text-gray-700">
																		Sports <img src={sportsIcon} style={inlineDivStyle}/>
																	</label>
																</div>
															</div>

															{/* Business */}
															<div className="flex items-start">
																<div className="flex h-5 items-center">
																	<input
																		id="business"
																		name="business"
																		type="checkbox"
																		className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																		onChange={() => changeSelection("business")}
																		checked={userInfo.business}
																	/>
																</div>
																<div className="ml-3 text-sm">
																	<label htmlFor="business" className="font-medium text-gray-700">
																		Business <img src={financeIcon} style={inlineDivStyle}/>
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
																		className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																		onChange={() => changeSelection("entertainment")}
																		checked={userInfo.entertainment}
																	/>
																</div>
																<div className="ml-3 text-sm">
																	<label htmlFor="entertainment" className="font-medium text-gray-700">
																		Entertainment <img src={travelIcon} style={inlineDivStyle}/>
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
																		className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																		onChange={() => changeSelection("health")}
																		checked={userInfo.health}
																	/>
																</div>
																<div className="ml-3 text-sm">
																	<label htmlFor="health" className="font-medium text-gray-700">
																		Health <img src={healthfitnessIcon} style={inlineDivStyle}/>
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
																		className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																		onChange={() => changeSelection("science")}
																		checked={userInfo.science}
																	/>
																</div>
																<div className="ml-3 text-sm">
																	<label htmlFor="science" className="font-medium text-gray-700">
																		Science <img src={memeIcon} style={inlineDivStyle}/>
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
																		className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																		onChange={() => changeSelection("technology")}
																		checked={userInfo.technology}
																	/>
																</div>
																<div className="ml-3 text-sm">
																	<label htmlFor="technology" className="font-medium text-gray-700">
																		Technology <img src={techIcon} style={inlineDivStyle}/>
																	</label>
																</div>
															</div>

														</div>
														{/* End Left Column */}

														{/* Start Right Column */}
														<div className="space-y-4">
															{/* Title & Subtitle */}
															<div className="md:col-span-1">
																<div className="px-4 sm:px-0">
																	<h3 className="text-lg font-medium leading-6 text-gray-900">Frequency of Newsletter:</h3>
																</div>
															</div>

															{/* Frequency */}
															<div className="flex items-center">
																<input
																	id="daily"
																	name="frequency"
																	type="radio"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
																	onChange={() => changeSelection("daily")}
																	checked={userInfo.frequency == "daily"}
																/>
																<label htmlFor="daily" className="ml-3 block text-sm font-medium text-gray-700">
																	Daily
																</label>
															</div>
															<div className="flex items-center">
																<input
																	id="weekly"
																	name="frequency"
																	type="radio"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
																	onChange={() => changeSelection("weekly")}
																	checked={userInfo.frequency == "weekly"}
																/>
																<label htmlFor="weekly" className="ml-3 block text-sm font-medium text-gray-700">
																	Weekly
																</label>
															</div>
														</div>

													</div>    {/* End Grid */}
												</div>		{/* End BG Color */}
											</div>		{/* End overflow-hidden shadow */}


											{/* Start of Modal Footer */}
											<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
												<button
													type="submit"
													className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
													onClick={() => onSave()}
													ref={cancelButtonRef}
												>
													Save
												</button>
														
												<button
													type="button"
													className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
													onClick={() => setOpen(false)}
													ref={cancelButtonRef}
												>
													Cancel
												</button>
											</div>
											{/* End of Modal Footer */}

										</form>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
    </>
  );
}

export default UserProfile;