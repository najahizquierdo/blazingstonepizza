import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import footballfield from './football.png'
import Slider from 'react-slick'
import porkys from './porkys.png'
import dessert from './dessert.png'
import car from './car.png'

class Homepage extends Component {

  render() {
    var settings = {
  dots: true,
  arrows: true,
  draggable: true,
  swipeToSlide: true,
  speed: 500,
  adaptiveHeight: true,
  slidesToShow: 1,
  style: {
    height: "40%"

  }
};
    return(
      <div className="page jumbotron">
          <div><img src={porkys} className="main-announcement"/></div>

            <img src={footballfield} className="bottomthree" />
            <img src={dessert} className="bottomthree"/>
            <img src={car} className="bottomthree"/>


      </div>
    );
  }
}
export default Homepage;
