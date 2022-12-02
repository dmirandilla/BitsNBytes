import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import { Link } from 'react-router-dom';
import Logo from './images/logoGrey.png';

const CreateAccount = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [changeCode, setChangeCode] = useState(false);
    const [code, setCode] = useState("");

    //if new user, direct them to the category selection page 
    const [newUser, setNewUser] = useState(false);


    const passReq = "Password must be at least length of 8 and include a number, uppercase & lowercase letter";

    let history = useHistory();
    let Pool = UserPool;

    // Used to check if user exists in DynamoDB. Assigned value in getUser().
    let getUserResponse;

    const onSubmit = async (event) => {
        event.preventDefault();
        
        /*
            First scan DynamoDB to see if the username exists, then scan Cognito User Pool. 
        */
        console.log(`Checking to see if username is available: ${username.toLowerCase()}`);
        // await getUser();

        // let userData = getUserResponse.data;
        // console.log("USER GET RES: ", userData);
        // if(userData) {
        //     console.log('GET REQ DONE, USERNAME NOT AVAILABLE ');
        //     alert('Username is not available!');
        //     return;
        // }

        if (password !== confirmPassword) {
            alert("Password does not match!");
        } else {
            // Cognito Sign Up
            UserPool.signUp(username.toLowerCase(), password, [{ Name: "email", Value: email }], null, (err, data) => {
                if (err) {
                    console.log("Cognito Error: ", err);
                    console.log(err.message);
                    alert("There was an error creating your account:\n\n" + err.message);
                } else {
                    console.log(data);
                    alert("Successfully Created Account! Next we will need to confirm your email.");
                    setChangeCode(true);
                }
            });
        }
    }

    const createForm = () => (
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <div className="flex min-h-full items-center justify-center py-80 px-4 sm:px-6 lg:px-8">
                <div className="bg-[#BDC6D1] px-6 py-8 rounded shadow-md text-black container max-w-lg">
                <img className="mx-auto h-20 py-1 w-auto items-center" src={Logo}/>
                    <h1 className="font-bold mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Username" 
                        /*Cam's Code here */
                        required
                        label="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        /*Cam's Code here */
                        required
                        label="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        /*Cam's Code here */
                        required
                        label="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}


                        />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" 
                        /*Cam's Code here */
                        required
                        label="Confirm Password"
                        autoComplete="current-password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        
                        />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-[#D90429] text-white hover:bg-[#5b1e28] focus:outline-none my-1"
                    >Create Account</button>

                    <Link to='/login'>
                    <button
                        type="back"
                        className="w-full text-center py-3 rounded bg-[#2B2D42] text-white hover:bg-[#5b1e28] focus:outline-none my-1"
                    >Back</button>
                    </Link>

                </div>    
            </div>
        </form>
    );


    const enterCode = () => (
        <form noValidate autoComplete="off" onSubmit={onCodeSubmit}>
        <div className="flex min-h-full items-center justify-center py-80 px-4 sm:px-6 lg:px-8">
            <div className="bg-[#BDC6D1] px-6 py-8 rounded shadow-md text-black container max-w-lg">
            <img className="mx-auto h-20 py-1 w-auto items-center" src={Logo}/>
                <h1 className="font-bold mb-8 text-3xl text-center">Confirmation code sent you your email</h1>
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="Confirmation Code"
                    placeholder="Confirmation Code" 
                    //Cam's code
                    required
                    label="Confirmation Code"
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                />

                <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-[#D90429] text-white hover:bg-[#5b1e28] focus:outline-none my-1">
                        Confirm
                </button>

                <button
                    type="back"
                    className="w-full text-center py-3 rounded bg-[#2B2D42] text-white hover:bg-[#5b1e28] focus:outline-none my-1"
                    onClick={resendCode}
                >Resend Code</button>

                </div>    
        </div>
    </form>
);

    
    const onCodeSubmit = async (event) => {
        event.preventDefault();

        let Username = username;
        let user = new CognitoUser({ Username, Pool });
        
        /*
            If user enters correct code, add to DynamoDB 
        */
        user.confirmRegistration(code, false, (err, data) => {
            if (err) {
                console.log(err);
                console.log(err.message);
                alert("Incorrect Confirmation Code");
            } else { 
                console.log("User confirm registration: ", data);
                // console.log("Adding to DynamoDB...");
                // const addRes = addToDynamo();
                // console.log("ADD RES: ", addRes);

                alert("Successfully entered code!");
                history.push('/categorySelection');
                history.go('/categorySelection');
            }
        });
    }


    const resendCode = () => {
        let Username = username;
        let user = new CognitoUser({ Username, Pool });

        user.resendConfirmationCode((err, data) => {
            if (err) {
                console.log(err);
                console.log(err.message);
            } else {
                console.log(data);
                alert("New Code Sent!");
            }
        });
    }


    return(
        <div className="container: max-w-full">
            {changeCode ? enterCode() : createForm()}
            {/* <h1>createAccount</h1> */}
        </div>
    );
}

export default CreateAccount;