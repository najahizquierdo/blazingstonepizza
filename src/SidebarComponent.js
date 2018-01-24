import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import logo from './logo.png'
import socialmedia from './social-media.png'
import YelpReviews from './YelpReviews.js'
class Sidebar extends Component {
  render() {
    return(
<div className="col s10 m4 l3">
       <div className="card-panel grey">
         <div className="pictures">
           <center>
            <img src={logo} className="icons"/><p>
            <img src={socialmedia} className="icons" usemap="#image-map" />

          <map name="image-map">
              <area href="https://www.youtube.com/user/hugoizquierdo" coords="12,13,85,66" shape="rect" />
              <area href="https://www.facebook.com/blazingstonepizza/" coords="110,8,159,71" shape="rect" />
              <area href="https://www.instagram.com/blazingstonepizza/" coords="175,7,244,70" shape="rect" />
          </map>
          </p>


          <p> 3501 Monterey Rd </p>
          <p> Los Angeles, CA 90042 </p>
          (323)309-6527
            </center>

            <p>
            <YelpReviews />
          </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
