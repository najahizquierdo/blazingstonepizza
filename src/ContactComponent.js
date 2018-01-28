import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer.js'

export default class Contact extends Component {
  render() {
      return(
        <div className="page">
          <MapContainer />
          <div className="contact-info-pad">
          <div className="contact-info">
          <h3> 3501 Monterey Rd
          Los Angeles, CA 90042 </h3> <p>
          (323)309-6527 </p>

        <ul className="collapsible deep-orange accent-3" data-collapsible="accordion">
          <li>
        <div className="collapsible-header deep-orange accent-3">
           <h4> Email us </h4>
          </div>
        <div className="collapsible-body deep-orange accent-3"><p>
          <div class="container">
  <form id="contact" action="" method="post">
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required />
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>


</div>


        </p></div>
      </li>
    </ul>
  </div>
    </div>
        </div>
      );
  }
}
