import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import logo from './logo.png'
import facebook from './facebook.png'
import youtube from './youtube.png'
import instagram from './instagram.png'

import socialmedia from './social-media.png'
import YelpReviews from './YelpReviews.js'
class Sidebar extends Component {
  render() {
    return(
       <div className="card-panel grey lighten-1">
           <center>
            <img src={logo} className="logo"/><p>


          <p> 3501 Monterey Rd </p>
          <p> Los Angeles, CA 90042 </p>
          (323)309-6527

          <p>
        <a href="https://www.facebook.com/blazingstonepizza/">
          <img src={facebook} className="icons"/>
        </a>
        <a href="https://www.instagram.com/blazingstonepizza/">
          <img src={instagram} className="icons"/>
        </a>
        <a href="https://www.youtube.com/user/hugoizquierdo/videos?sort=dd&shelf_id=0&view=0">
          <img src={youtube} className="icons"/>
        </a>
        </p>
</p>
</center>

            <p>
            <YelpReviews />
          </p>
          </div>
    );
  }
}
export default Sidebar;
