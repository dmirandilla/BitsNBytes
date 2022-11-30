import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './home';
import UserProfile from './userProfile/UserProfile';
import { Account } from "./account/Account";
import CreateAccount from "./account/createAccount";
import Login from "./account/Login";

import CategorySelection from "./account/categorySelection"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Account>
          <Route exact path="/" component={Home} />
          <Route exact path="/userProfile" component={UserProfile} />  
          <Route exact path="/createAccount" component={CreateAccount} />  
          <Route exact path="/login" component={Login} />  
          <Route exact path="/categorySelection" component={CategorySelection} />
        </Account>
        <Redirect to="/" />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
