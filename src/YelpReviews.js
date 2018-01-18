import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import Yelp from 'yelp';

class YelpReviews extends Component {
  render() {
    return(
      <div>
        <div className="yelp-design">
        </div>
          <iframe data-review-id="e3D2Pskn5IaO0juEK88sSQ" className="yelp-review yelp"
          src="https://www.yelp.com/embed/review/e3D2Pskn5IaO0juEK88sSQ"
          scrolling="yes" ></iframe> _______________________________
          <iframe data-review-id="q_mKIvZyKs8XdmqMtMeiwA" className="yelp-review yelp"
          src="https://www.yelp.com/embed/review/q_mKIvZyKs8XdmqMtMeiwA"
          scrolling="yes" ></iframe> _______________________________
          <iframe data-review-id="bbuK0BCC7J3qI1ZqPrfnSQ" className="yelp-review yelp"
          src="https://www.yelp.com/embed/review/bbuK0BCC7J3qI1ZqPrfnSQ"
          scrolling="yes" ></iframe>


      </div>

    );
  }
}
export default YelpReviews;
