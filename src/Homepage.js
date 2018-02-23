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
  adaptiveHeight: true,
  slidesToShow: 1
};
    return(
      <div className="page jumbotron">
        <div className="desktop-homepage hidden-xs">
        <Slider {...settings}>
        <div><a href="https://docs.google.com/forms/d/e/1FAIpQLSfTrNcOf6Iwhk6uKgVGV-Y8VFnTr8xXbai5hqiajqKUTSwG3g/viewform?usp=sf_link"><img src={krav} className="pictures"/></a></div>
        <div><img src={porkys} className="pictures"/></div>
        <div><img src={lasagna} className="pictures"/></div>
        <div><img src={car} className="pictures"/></div>
        <div><img src={dessert} className="pictures"/></div>
      </Slider>
    </div>

          <div className="mobile-homepage visible-xs">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTrNcOf6Iwhk6uKgVGV-Y8VFnTr8xXbai5hqiajqKUTSwG3g/viewform?usp=sf_link"><img src={krav} className="main-announcement"/></a>
            <img src={porkys} className="main-announcement"/>
            <img src={lasagna} className="bottomthree"/>
            <img src={car} className="bottomthree"/>
            <img src={dessert} className="bottomthree"/>
            </div>

      </div>
    );
  }
}
export default Homepage;
