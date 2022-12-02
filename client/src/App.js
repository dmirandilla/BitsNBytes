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
        </Account>
        <Redirect to="/" />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
