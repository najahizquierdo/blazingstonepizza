import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import logo from './logo.png'
import facebook from './facebook.png'
import youtube from './youtube.png'
import instagram from './instagram.png'



class Sidebar extends Component {
  componentWillMount () {
       const script = document.createElement("script");
       script.src = "https://www.yelp.com/embed/widgets.js";
       script.async = true;

       document.body.appendChild(script);
   }
  render() {
    return(
       <div className="card-panel grey lighten-1">

           <center>
            <img src={logo} className="logo"/><p>



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
        <div className="addy">
        <h5> 3501 Monterey Rd </h5>
        <h6> Los Angeles, CA 90042 </h6>

        <h6 className="addy1"> (323) 276-3939 </h6>
      </div>
      </p>
  </center>

</div>


    );
  }
}
export default Sidebar;
