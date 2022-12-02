import React from 'react';

import sportsIcon from './images/sports.jpg';
import techIcon from './images/tech.jpg';
import healthfitnessIcon from './images/healthfitness.jpg';
import financeIcon from './images/finance.jpg';
// import logoIcon from './images/logo.jpg';

const ExistingSettings = ({userInfo}) => {
	const inlineDivStyle = {
		whiteSpace: 'nowrap',
		display: 'inline',
		flexDirection: 'row',
		alignItems: 'center'
	};

	return (
		<>
			{/* Move the entire div */}
			<div className="px-4 py-5 sm:p-40">
				<div className="grid grid-cols-2 gap-6">

					{/* Start left Column */}
					<div className="space-y-8 px-11">

						{/* Title & Subtitle */}
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<h3 className="text-3xl font-bold leading-6 text-gray-900 py-4">Current Newsletter Subscriptions:</h3>
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
									className="h-8 w-8 rounded border-gray-300 text-red-600 focus:ring-red-500"
									onClick={() => {return false}}
									checked={userInfo.sports}
								/>
							</div>
							<div className="ml-3 " style={inlineDivStyle}>
								<label htmlFor="sports" className="text-2xl font-bold text-gray-700">
									Sports <img src={sportsIcon} style={inlineDivStyle} alt="sportsIcon"/>
								</label>
							</div>
						</div>

						{/* Business */}
						<div className="flex items-start">
							<div className="flex h-4 items-center">
								<input
									id="food"
									name="food"
									type="checkbox"
									className="h-8 w-8 rounded border-gray-300 text-red-600 focus:ring-red-500"
									onClick={() => {return false}}
									checked={userInfo.business}
								/>
							</div>
							<div className="ml-3">
								<label htmlFor="food" className="text-2xl font-bold text-gray-700">
									Business <img src={financeIcon} style={inlineDivStyle} alt="financeIcon"/>
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
									onClick={() => {return false}}
									checked={userInfo.entertainment}
								/>
							</div>
							<div className="ml-3 ">
								<label htmlFor="entertainment" className="text-2xl font-bold text-gray-700">
									Entertainment <img src={techIcon} style={inlineDivStyle} alt="techIcon" />
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
									onClick={() => {return false}}
									checked={userInfo.health}
								/>
							</div>
							<div className="ml-3 ">
								<label htmlFor="health" className="text-2xl font-bold text-gray-700">
									Health <img src={healthfitnessIcon} style={inlineDivStyle} alt="healthfitnessIcon" />
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
									onClick={() => {return false}}
									checked={userInfo.science}
								/>
							</div>
							<div className="ml-3 ">
								<label htmlFor="science" className="text-2xl font-bold text-gray-700">
									Science <img src={healthfitnessIcon} style={inlineDivStyle} alt="healthfitnessIcon" />
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
									onClick={() => {return false}}
									checked={userInfo.technology}
								/>
							</div>
							<div className="ml-3 ">
								<label htmlFor="technology" className="text-2xl font-bold text-gray-700">
									Technology <img src={techIcon} style={inlineDivStyle} alt="techIcon" />
								</label>
							</div>
						</div>
					</div>
					{/* End Left Column */}

					{/* Start Right Column */}
					<div className="space-y-6">
						{/* Title & Subtitle */}
						{/* <div className="md:col-span-1"> */}
							<div className="px-4 sm:px-0">
								<h3 className="text-3xl font-bold leading-6 text-gray-900 py-4">Frequency:</h3>
								{/* <p className="mt-1  text-gray-600">Daily or Monthly</p> */}
							</div>
						{/* </div> */}

						{/* Frequency */}
						<div className="flex items-center">
							<input
								id="daily"
								name="frequency"
								type="radio"
								className="h-8 w-8 border-gray-300 text-red-600 focus:ring-red-500"
								onClick={() => {return false}}
								checked={userInfo.frequency === "daily"}
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
								onClick={() => {return false}}
								checked={userInfo.frequency === "weekly"}
							/>
							<label htmlFor="weekly" className="text-2xl text-bold ml-3 block font-bold text-gray-700">
								Weekly
							</label>
						</div>
					</div>
					
				</div>    {/* End Grid */}
			</div>		{/* End BG Color */}
		</>
	);
}

export default ExistingSettings;