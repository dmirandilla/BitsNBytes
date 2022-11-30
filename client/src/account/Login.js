import React, { useContext, useState } from 'react';
import { AccountContext } from './Account';
import { useHistory, Link } from 'react-router-dom';
import Pool from "../UserPool";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { authenticate } = useContext(AccountContext);

    let history = useHistory();

    const onLogin = (event) => {
			event.preventDefault();
			
			authenticate(email, password)
				.then((data) => {
						console.log("Logged in!", data);
						alert("Successfully logged in");
						// history.push('/');
						history.go('/');
				})
				.catch((err) => {
						console.error("Failed to login", err);
						alert("Incorrect email or password");
				});
    };


    const onCreate = () => {
			history.push('/createAccount');
    };

    const theForm = () => (
        <>
        <h1>Welcome!</h1>
        <form noValidate autoComplete="off" onSubmit={onLogin}>
					<br/><br/>
					<input
						required
						id="outlined-required"
						label="Email/Username"
						className="inputBox"
						variant="outlined"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>

					<br/><br/>
					<input
						required
						id="outlined-password-input-required"
						label="Password"
						type="password"
						autoComplete="current-password"
						className="inputBox"
						variant="outlined"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<br/><br/>

					<div className="signInButton">
						<button type="submit">Sign In</button>
					</div>

					<br/>
				</form>
				<button onClick={onCreate}>Create Account</button>
        </>
    )

    const checkSession = () => {
        let user = Pool.getCurrentUser();

        if (user) {
            return true;
        } else {
            return false;
        }
    }


		const loggedInMessage = () => (
			<>
			<h1>You are already logged in!</h1>
			<br/>
			<p>Return to the BitsNBytes home page to sign out.</p>
			</>
		);


		const loginComponent = () => (
			<div className="flex min-h-full items-center justify-center py-80 px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-md space-y-8">
					<div>
							<img
								className="mx-auto h-12 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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
										Email address
									</label>
									<input
										id="email-address"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										placeholder="Email address"
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
									/>
								</div>
							</div>


							<div>
								<button
									type="submit"
									className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									<span className="absolute inset-y-0 left-0 flex items-center pl-3">
										{/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
									</span>
										Sign in
								</button>
							</div>


							<div className="flex justify-center"> 
								<h1 className="text-underlined"> 
									Not a member?
									<Link to='/createAccount' className="underline underline-offset-8"> Register </Link>
								</h1>
							</div>

							<div className="flex justify-center"> 
								<Link to='/' className="flex group relative justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
									Back
								</Link>
							</div>
						</form>
				</div>
			</div>
		);


    return(
			<>
			<div className="container">
				{checkSession() ? loggedInMessage() : loginComponent()}
			</div>
			
			
			</>
    );
}


export default Login;