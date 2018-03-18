import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { GoogleMap, Marker } from "react-google-maps"

export default class OrderOnline extends Component {

  render() {
    return (
    <div className="order">
      <h2 className="side-title"> ORDER ONLINE </h2>
      <div className="text-order grey lighten-1">
         <h5> On Friday and Saturday Evenings:<p>
        Delivery time may range from 1 to 1.5 hours </p>
        pickup times can be between 25-35 minutes.
      <p><p>
        Please make sure to choose the correct pickup or delivery option.
      </p></p>
    </h5>

        <p>
      <center>
        <a href="/menuorder" class="waves-effect deep-orange darken-4 button btn">DELIVERY</a>
        &nbsp;
        <a href="/menuorder" class="waves-effect deep-orange darken-4 button btn">PICKUP</a>
      </center>
    </p>
  </div>
    </div>
      );
  }
}
