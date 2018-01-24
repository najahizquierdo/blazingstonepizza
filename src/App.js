import React, { Component } from 'react';
import logo from './logo.svg';
import Sidebar from './SidebarComponent.js'
import { Button, Card, row, col } from 'react-materialize';
import NavBar from './NavBar.js'
import './App.css';
import Menu from './MenuComponent'
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Contact from './ContactComponent.js'
import { StickyContainer, Sticky } from 'react-sticky'
import Homepage from './Homepage.js'

class App extends Component {
  render() {
    return (

      <div className="App">

        <header className="App-header deep-orange darken-4">
          <div className="row about-me">
          <Sidebar />
          <NavBar />
          </div>
        </header>
        <div className="page">
        <Homepage />
      </div>
        <div id="Menu" className="page">
          <Menu />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>


    );
  }
}

export default App;
