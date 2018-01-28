import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import menu1 from './menu-1.png'
import menu2 from './menu-2.png'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Collapsible from 'react-collapsible';
import $ from 'jquery'

export default class Menu extends Component {
  render() {
      return(
        <div className="page">
         <img src={menu1} className="menu" />

         <img src={menu2} className="menu" />
       </div>
      );
  }
}
