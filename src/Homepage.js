import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import carrotcake from './carrotcake.png'
import stuffed from './stuffed.png'
import baked from './baked.png'
import chilibowl from './chilibowl.png'
import lasagna from './lasagna.png'
import Slider from 'react-slick';

class Homepage extends Component {

  render() {
    var settings = {
  dots: true,
  arrows: true,
  draggable: true,
  swipeToSlide: true,
  speed: 1000,
  overflow: true,
  slidesToShow: 1
};

    return(
      <div className="page jumbotron">
        <div className="desktop-homepage hidden-xs">
        <Slider {...settings}>
        <div><img src={carrotcake} className="pictures"/></div>
        <div><img src={stuffed} className="pictures"/></div>
        <div><img src={chilibowl} className="pictures"/></div>
        <div><img src={baked} className="pictures"/></div>
        <div>
        <iframe className="video"
        src="https://www.youtube.com/embed/YSKflgXXhu0"
        frameborder="0"
        allow="autoplay; encrypted-media"
         allowfullscreen>
         </iframe>
        </div>
        <div><img src={lasagna} className="pictures"/></div>
      </Slider>
    </div>

          <div className="mobile-homepage visible-xs">
          <img src={carrotcake} className="main-announcement"/>
            <img src={stuffed} className="main-announcement"/>
            <iframe className="mobile-video" src="https://www.youtube.com/embed/YSKflgXXhu0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
          </iframe>
            <img src={chilibowl} className="bottomthree"/>
            <img src={baked} className="bottomthree"/>
            <img src={lasagna} className="bottomthree"/>
            </div>

      </div>
    );
  }
}
export default Homepage;
