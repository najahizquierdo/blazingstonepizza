import React, { Component } from 'react';
import Sidebar from './SidebarComponent.js'
import { Button, Card, row, col } from 'react-materialize';
import NavBar from './NavBar.js'
import './App.css';
import Menu from './MenuComponent'
import {BrowserRouter, Route, Router, Redirect} from 'react-router-dom';
import Contact from './ContactComponent.js'
import { StickyContainer, Sticky } from 'react-sticky'
import Homepage from './Homepage.js'
import logo from './logo.png'
import faq from './FAQComponent.js'
import order from './OrderOnline.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div className="App">
        <header className="App-header deep-orange darken-4">
          <img src={logo} className="App-logo visible-xs" alt="logo" />
          <div className="row about-me">
            <NavBar />
          </div>
          <div className="floated_div hidden-xs">
            <Sidebar />
          </div>
        </header>
        <Route exact path='/' component={Homepage} />
        <Route path='/menu' component={Menu}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/faq' component={faq} />
        <Route path='/orderonline' component={order} />
      </div>
    </BrowserRouter>


    );
  }
}

export default App;
