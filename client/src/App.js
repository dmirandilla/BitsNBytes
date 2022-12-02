import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './home';
import UserProfile from './UserProfile/UserProfile';
import { Account } from "./account/Account";
import CreateAccount from "./account/createAccount";
import Login from "./account/Login";
import NavBar from "./account/navbar";
import CategorySelection from "./account/categorySelection"
import LoggedIn from "./account/LoggedIn";

import Business from "./account/business";
import Entertainment from "./account/entertainment";
import Sports from "./account/sports";
import Health from "./account/health";
import Science from "./account/science";
import Technology from "./account/technology";

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
          <Route exact path="/navbar" component={NavBar} />
          <Route exact path="/loggedIn" component={LoggedIn} />

          <Route exact path="/business" component={Business} />
          <Route exact path="/entertainment" component={Entertainment} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/science" component={Science} />
          <Route exact path="/technology" component={Technology} />
          <Route exact path="/loggedIn" component={LoggedIn} />


        </Account>
        <Redirect to="/" />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
