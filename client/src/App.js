import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sports from './pages/sports';
import Tech from './pages/technology';
import World from './pages/world';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/sports' element={<Sports/>} />
        <Route path='/tech' element={<Tech/>} />
        <Route path='/world' element={<World/>} />
      </Routes>
    </Router>
  );
}

export default App;
