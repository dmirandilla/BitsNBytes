import React, { useContext, useState } from 'react';
import { AccountContext } from './Account';
import { useHistory, Link } from 'react-router-dom';
import Pool from "../UserPool";
import LoggedIn from './LoggedIn';

import logo from "../account/images/logo.jpg";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { authenticate } = useContext(AccountContext);

    let history = useHistory();

    const onLogin = (event) => {
			event.preventDefault();
			
			authenticate(username, password)
				.then((data) => {
						console.log("Logged in!", data);
						alert("Successfully logged in");
						history.go('/');
				})
				.catch((err) => {
						console.error("Failed to login", err);
						alert("Incorrect email or password");
				});
    };

    const checkSession = () => {
			let user = Pool.getCurrentUser();

			if (user) {
					return true;
			} else {
					return false;
			}
    }

		const loginComponent = () => (
			<div className="isolate bg-white">
				{/* Blurred Purple Top Left */}
				<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
					<svg
						className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
						viewBox="0 0 1155 678"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
							fillOpacity=".3"
							d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
						/>
						<defs>
							<linearGradient
								id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
								x1="1155.49"
								x2="-78.208"
								y1=".177"
								y2="474.645"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#9089FC" />
								<stop offset={1} stopColor="#FF80B5" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div className="flex min-h-full items-center justify-center py-80 px-4 sm:px-6 lg:px-8">
					<div className="w-full max-w-md space-y-8">
						<div>
								<img
									className="mx-auto h-12 w-auto"
									src={logo}
									alt="Your Company"
								/>
								<h2 className="mt-6 text-center text-6xl font-bold tracking-tight text-gray-900">
									Bits N Bytes
								</h2>
								<p className="font-bold text-blue-500 text-4xl mt-2 text-center ">
									Login
								</p>
						</div>
							<form className="mt-8 space-y-6" action="#" method="POST">
								<input type="hidden" name="remember" defaultValue="true" />
								<div className="-space-y-px rounded-md shadow-sm">
									<div>
										<label htmlFor="email-address" className="sr-only">
											Username
										</label>
										<input
											id="email-address"
											name="email"
											type="email"
											autoComplete="email"
											required
											className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
											placeholder="Username"
											value={username}
											onChange={(event) => setUsername(event.target.value)}
										/>
									</div>
									<div>
										<label htmlFor="password" className="sr-only">
											Password
										</label>
										<input
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
											required
											className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
											placeholder="Password"
											value={password}
											onChange={(event) => setPassword(event.target.value)}
										/>
									</div>
								</div>


								<div>
									<Link
										className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										onClick={(e) => onLogin(e)}
										to='/'
										type="submit"
									>
										<span className="absolute inset-y-0 left-0 flex items-center pl-3">
											{/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
										</span>
											Sign in
									</Link>
								</div>


								<div className="flex justify-center"> 
									<h1 className="text-underlined"> 
										Not a member?
										<Link to='/createAccount' className="underline underline-offset-8"> Register </Link>
									</h1>
								</div>

								<div className="flex justify-center"> 
									<Link to='/' className="flex group relative justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
										Back
									</Link>
								</div>
							</form>

							{/* Blurred Red Right Side */}
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
					</div>
				</div>
			</div>
		);


    return(
		<div className="container">
			{checkSession() ? <LoggedIn /> : loginComponent()}
		</div>
    );
}


export default Login;