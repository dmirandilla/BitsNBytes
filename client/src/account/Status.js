import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


const Status = () => {
    let history = useHistory();

    const [status, setStatus] = useState(false);

    const { getSession, logout } = useContext(AccountContext);

    const handleLogin = () => {
        history.push('/login');
    }

    useEffect(() => {
        getSession().then((session) => {
            //console.log("Session: ", session);
            setStatus(true);
        });
    });

    return (
        <div>
            {status ? (
                <div>
                <Button color="secondary" onClick={logout}>Logout</Button> 
                </div>
            )
            : (
                <div>
                <Button color="primary" onClick={handleLogin}>Sign In</Button>
                </div>
            )
            }
            
        </div>
    );
};

export default Status;