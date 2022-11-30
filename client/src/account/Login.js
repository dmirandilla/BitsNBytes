import React, { useContext, useState } from 'react';
import { AccountContext } from './Account';
import { useHistory } from 'react-router-dom';
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
                <button color="primary" type="submit">Sign In</button>
            </div>

            <br/>
        </form>
        <button color="secondary" onClick={onCreate}>Create Account</button>
        </>
    )


    const loggedIn = () => (
        <>
        <h1>You are already logged in!</h1>
        <br/>
        <p>Return to the BitsNBytes home page to sign out.</p>
        </>
    );


    const checkSession = () => {
        let user = Pool.getCurrentUser();

        if (user) {
            return true;
        } else {
            return false;
        }
    }


    return(
        <div className="container">
            {checkSession() ? loggedIn() : theForm()}
        </div>
    );
}


export default Login;