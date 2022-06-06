import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from 'react-router-dom';
import React from 'react';

import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Store';
import Dog from './Components/Dog';
import Cat from './Components/Cat';


function App() {
  return (
    <div className="App">
      <Router>
      <NavLink to = '/home'>Home </NavLink>
      <NavLink to = '/about'> About</NavLink>
      <NavLink to ='/store/111'>Store 111</NavLink>
      <NavLink to = '/store/222'> Store 222</NavLink>
      <NavLink to = '/store/333'>Store 333</NavLink>
      <NavLink to = '/store/555?color=blue'> Store 555</NavLink>
      <NavLink to = '/dog'>Dog</NavLink>
      <NavLink to = '/cat'>Cat</NavLink>

        <h1>Welcome</h1>
        <Routes>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path ='/store/:id' element = {<Store/>}/>
        <Route path = '*' element = {<Navigate to = '/home'/>}/>
        <Route path ='/dog' element = {<Dog/>}/>
        <Route path ='/cat' element = {<Cat/>}/>
        </Routes>
       
        
      </Router>
      
      
    </div>
  );
}

export default App;
