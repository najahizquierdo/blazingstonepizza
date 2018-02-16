import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import Collapsible from 'react-collapsible';
import $ from 'jquery'


export default class faq extends Component {
  render() {
      return(
        <div className="page">
          <h1> FAQ </h1>
        <div className="faq">
          <ul className="collapsible red accent-4" data-collapsible="accordion">
            <li>
              <div className="collapsible-header red accent-4">
                <h6> Do you have vegan pizza? </h6>
              </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  We do not carry vegan cheese, but all our dough is vegan.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
                <h6>Do you have vegetarian pizza?</h6>
              </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  Yes! Our vegetarian speciality pizzas are written in green text.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
                <h6> Do you have gluten free dough? </h6>
              </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  Yes, we have gluten free crusts available in 12” size. Our gluten-free dough is an all-natural combination of rice, potato and soy flours and starches. It is made in-house in small batches. While the dough is gluten-free, there is a lot of flour flying around in our facility, so people with Celiac’s disease may still be exposed to small traces of regular flour.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
                <h6> Do you have family specials? </h6>
              </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  No, all of our food is sold a la carte.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
                <h6> Can I order in advance? </h6>
              </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  Yes! We are closed on Mondays and Tuesdays, but you can still place orders to be picked up or delivered during our business hours. If we do not answer the phone, you can place orders online and receive email confirmation.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
                <h6> Problem with your call? </h6>
              </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  <h6>Why is my call not being answered?/Why am I on hold for so long?/Why is there a busy signal when I call? </h6>
                  We try our very best to answer every phone call, but during extremely busy times (usually 5-8pm), it sometimes becomes challenging  to answer every call. We have an online-ordering platform on our website which makes order-placing simple and quick.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
                <h6>  Why is my delivery taking so long? </h6>               </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  We want you to receive your food as close to dine-in quality as possible, and sometimes that means we have to delay the order a bit so that it’s not sitting idle in a delivery bag. We apologize for this, but please know that even if your delivery order is taking longer than expected, it is always coming out fresh from the oven and taken to you directly.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6>  How spicy is the Blazing Sauce?</h6>               </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  We’d say on a scale of 1-10, it sits at about a 7. For those of you who eat spicy food regularly, probably a 5.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6>  Do all your pizzas come with tomato sauce?</h6>               </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  No, the White Pizza comes with Garlic Oil as a base, the Chicken Chipotle with Chipotle Aioli, and the Artichoke-Spin with Pesto. But of course, feel free to customize to your liking! One guy swears by the Hawaiian pizza with Chipotle Aioli base.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6>  Does your pesto have any nuts or cheese?</h6>               </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  No, our pesto is made with fresh herbs and olive oil, but does not contain any nuts or cheese.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6>  What is your delivery area?</h6> </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  At the moment, we deliver only inside of the major freeways surrounding our shop. This means north of the 10, East of the 5, South of the 110, and west of Fremont Blvd. York and Figueroa is our cut-off for Highland Park delivery. Any 90032 and 90031 zip codes are available for delivery. Check out or delivery map section for more info. If you are ut of our delivery area and would like to place a large order (7+ pizzas), give us a call or send an email to orders@blazingstonepizza.com and we can most likely accomodate. While our delivery area is not very wide, we would like to make sure our customers get only the best quality pies in decent time, so we cannot go much further without risking a dip in quality.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6>  How long does a pizza take to make?</h6> </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                With no other orders present, it generally takes about 12 minutes to bake a pie.  With other orders present, the queue can make that time become 25-30 minutes.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6>  How are your wings made/served? </h6> </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  Our wings are all oven baked (no fryers), making them much healthier.. Cook time is usually between 15-20 minutes. We serve our wings with ranch and with the wing sauce on the side.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6> Can I do half-and-half pizzas?</h6> </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  Yes, you can do half-and-half toppings on all 12” and 18” pizzas free of charge! We do not make smaller fractions than this.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6> What is a Calzone?</h6> </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  A calzone is basically a pizza-empanada: a 12” pizza crust with all the toppings on one side, folded over, and sealed. All come with marinara, ricotta, mozarella, garlic oil, and parmesan cheese. They are served with ranch and marinara dipping sauces. We cannot do half-and-half calzones, as everything just melts together inside.
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6> Can I substitute ingredients on your specialty pizzas?</h6> </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  We do not make free substitutions on our specialty pizzas, but can accomodate any substitutions for the added price of each ingredient. Or you can always build your own!
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6> What discounts can you offer?</h6> </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  If you are interested in fundraising opportunities, we would love to work with you. Simply  put together a proposal and send to us at questions@blazingstonepizza.com. We will review and get back to you within the week!
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header red accent-4">
              <h6> What size pizzas do you have, and how many slices are in each?</h6> </div>
              <div className="collapsible-body red darken-4">
                <div class="container">
                  We offer 8” Personal size cut into 4 slices, a 12” (Medium) cut into 6 slices, and an 18” (XXL) cut into 8 slices. We can double-cut the 12” and 18” to make 12 and 16 slices.. We do not double-cut personal pizzas.
                </div>
              </div>
            </li>
          </ul>
       </div>
     </div>
      );
  }
}
