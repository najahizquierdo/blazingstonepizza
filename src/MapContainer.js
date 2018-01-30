import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { GoogleMap, Marker } from "react-google-maps"

export default class MapContainer extends Component {

  render() {
    return (
    <div>
      <iframe className="map"
      src="//www.google.com/maps/embed/v1/place?q=blazing%20stone%20pizza
      &zoom=19
      &attribution_source=Google+Maps+Embed+API
        &attribution_web_url=https://developers.google.com/maps/documentation/embed/
      &key=AIzaSyD1e8ZHYj3pBLOt3n4nyuEfp21AMBwEb4g" allowfullscreen>
        </iframe>
    </div>
      );
  }
}
