import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

const CreateAccount = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [changeCode, setChangeCode] = useState(false);
    const [code, setCode] = useState("");

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
        <>
        <h1>Let's Get You Suited Up</h1>
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <br/><br/>
            <label>Username</label>
            <input
                required
                label="Username"
                className="inputBox"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <br/><br/>
            <label>Email</label>
            <input
                required
                label="Email"
                className="inputBox"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <br/><br/>
            <label>Password</label>
            <input
                required
                label="Password"
                type="password"
                autoComplete="current-password"
                className="inputBox"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br/><br/>
            <label>Confirm Password</label>
            <input
                required
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                className="inputBox"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <br/><br/>

            <br/>
            <div className="centerButton">
                <button type="submit">Create Account</button>
            </div>
        </form>
        <br/><br/>
        <p><i>{passReq}</i></p>
        </>
    );


    const enterCode = () => (
        <>
            <h1>Enter the Confirmation Code sent to your email:</h1>
            <br/>
            <p>If you don't see it, check your spam/junk.</p>
            <br/><br/>
            <form noValidate autoComplete="off" onSubmit={onCodeSubmit}>
                <input
                    required
                    label="Confirmation Code"
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                />
                <br/><br/>
                <div className="centerButton">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <br/>
            <button onClick={resendCode}>Resend Code</button>
        </>
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
                history.go('/login');
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
        <div className="container">
            {changeCode ? enterCode() : createForm()}
            <h1>createAccount</h1>
        </div>
    );
}

export default CreateAccount;