import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import porkys from './porkys.png'
import krav from './krav.png'
import dessert from './dessert.png'
import car from './car.png'
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
      <h2> MARCH 21, 2018 </h2>
      <h4> area power outage, we will be closed for the remainder of the day! </h4>
        <Slider {...settings}>
        <div><img src={porkys} className="pictures"/></div>
        <div><img src={lasagna} className="pictures"/></div>
        <div><img src={car} className="pictures"/></div>
        <div><img src={dessert} className="pictures"/></div>
      </Slider>
    </div>

          <div className="mobile-homepage visible-xs">
      <h2> MARCH 21, 2018 </h2>
      <h4> area power outage, we will be closed for the remainder of the day </h4>
            <img src={porkys} className="main-announcement"/>
            <iframe className="mobile-video" src="https://www.youtube.com/embed/NWZcdeAjyw4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
          </iframe>
            <img src={lasagna} className="bottomthree"/>
            <img src={car} className="bottomthree"/>
            <img src={dessert} className="bottomthree"/>
            </div>

      </div>
    );
  }
}
export default Homepage;
