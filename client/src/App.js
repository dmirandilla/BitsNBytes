import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Home from './home';
import UserProfile from './userProfile/userProfile';
import { Account } from "./account/Account";
import CreateAccount from "./account/createAccount";
import Login from "./account/Login";

import Home from "./loading-navbar/Home";
import NavBar from "./loading-navbar/NavBar";
import CategorySelection from "./account/categorySelection"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Account>
          <Route exact path="/userProfile" component={UserProfile} />  
          <Route exact path="/createAccount" component={CreateAccount} />  
          <Route exact path="/login" component={Login} />  

          <Route exact path="/navbar" component={NavBar} />  
          <Route exact path="/categorySelection" component={CategorySelection} />

        </Account>
        <Redirect to="/" />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
