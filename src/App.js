import React from 'react';
import Home from './features/home/Home';
import './App.css';
import Nav from '../src/features/home/Nav'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MenuList from './features/menu/Menus';
import About from './features/about/About';
import Booking from './features/booking/Booking';
import MenuItem from './features/menu/MenuItem';

function App() {
  return (
      <Router>
    <div className="App">
      <header >
        <Nav/>
      </header>

        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/menus/:category"><MenuList/></Route>
            <Route exact path="/menu/:id"><MenuItem/></Route>
            <Route exact path="/booking"><Booking/></Route>
            <Route exact path="/about"><About/></Route>
        </Switch>

    </div>
      </Router>
  );
}

export default App;
