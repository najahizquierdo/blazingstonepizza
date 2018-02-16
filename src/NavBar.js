import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

export default class NavBar extends Component {
  render() {
      return(
        <div>
        <Scrollspy items={ ['menu-item', 'contact'] } currentClassName="is-current">
        <Navbar className="navBar nav-wrapper button-collapse deep-orange accent-3">
          <a id="home-item" className="nav-item" href="/">
            HOME
          </a>
          <a id="menu-item" className="nav-item" href="/menu">
            MENU
          </a>
          <a id="contact-item" className="nav-item" href="/contact">
          CONTACT
          </a>
          <a id="faq-item" className="nav-item" href="/faq">
          FAQ
          </a>
          <a className="nav-item" href="https://blazingstonepizza.revelup.com/weborder/?establishment=1#index">
              ORDER
          </a>
    </Navbar>
   </Scrollspy>
 </div>


    );
  }
}
