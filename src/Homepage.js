import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import footballfield from './footballfield.jpg'
import Slider from 'react-slick'
import porkys from './porkys.jpeg'


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
        <center>
        <Slider className="pictures" {...settings}>
        <div className="pictures">
          <img src={porkys} />
          <div className="centered"></div>
        </div>
        <div className="pictures">
          <img src={footballfield} />
        </div>
        </Slider>
      </center>
      </div>
    );
  }
}
export default Homepage;
