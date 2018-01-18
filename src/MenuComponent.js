import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import menupic from './full-menu.jpg'

export default class Menu extends Component {
  render() {
      return(
        <div>
          <img src={menupic} width="1100" />
        </div>

      );
  }
}
