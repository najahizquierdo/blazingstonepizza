import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { GoogleMap, Marker } from "react-google-maps"

export default class MapContainer extends Component {

  render() {
    return (
    <div>
    <iframe className="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.3376202882914!2d-118.18994068465129!3d34.08649042337155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c434051499e7%3A0x822ed8177f90e045!2sBlazing+Stone+Pizza!5e0!3m2!1sen!2sus!4v1517109735835"
    allowfullscreen></iframe>
    </div>
      );
  }
}
