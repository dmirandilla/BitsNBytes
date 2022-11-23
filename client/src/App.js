import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './home';
import UserProfile from './userProfile/userProfile';
import { Account } from "./account/Account";
import CreateAccount from "./account/createAccount";
import Login from "./account/Login";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />

        <Account>
          <Route path="/userProfile" element={<UserProfile />} />  
          <Route path="/createAccount" element={<CreateAccount />} />  
          <Route path="/login" element={<Login />} />  
        </Account>
        <Redirect to="/" />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
