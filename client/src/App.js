import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './home';
import UserProfie from './userProfile/userProfile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userProfile" element={<UserProfie />} />
      </Routes>
    </Router>
  );
}

export default App;
