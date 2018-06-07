import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import porkys from './porkys.png'
import car from './car.png'
import lasagna from './lasagna.png'
import deepdish from './deepdish.png'
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
        <div><img src={deepdish} className="pictures"/></div>
        <div><img src={porkys} className="pictures"/></div>
        <div>
        <iframe className="video"
        src="https://www.youtube.com/embed/YSKflgXXhu0"
        frameborder="0"
        allow="autoplay; encrypted-media"
         allowfullscreen>
         </iframe>
        </div>
        <div><img src={car} className="pictures"/></div>
      </Slider>
    </div>

          <div className="mobile-homepage visible-xs">
          <img src={deepdish} className="main-announcement"/>
            <img src={porkys} className="main-announcement"/>
            <iframe className="mobile-video" src="https://www.youtube.com/embed/YSKflgXXhu0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
          </iframe>
            <img src={lasagna} className="bottomthree"/>
            <img src={car} className="bottomthree"/>
            </div>

      </div>
    );
  }
}
export default Homepage;
