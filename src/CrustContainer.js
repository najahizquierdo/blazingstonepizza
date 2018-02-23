import React, { Component } from 'react';
import button from './crust.png'
export default class CrustContainer extends Component {
  constructor(){
    super();
    this.state = {
      display_class: 'hide'
    }
  }

  hide(){
    let display_class;
    this.state.display_class === 'player' ? display_class = 'hide' : display_class = 'player';
    console.log(display_class)
    this.setState({display_class})
  }

  render() {
    return (
      <div className="page_container">
        <div id="player" style={{marginBottom: '1%', marginLeft: '1%'}} className={this.state.display_class}>
          <iframe
            src="https://www.youtube.com/embed/NWZcdeAjyw4?rel=0&amp;showinfo=0"
            frameborder="0"
            className="menu"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
        </div>
        <img onClick={this.hide.bind(this)} style={{position: 'fixed', margintop: '15%', marginBottom: '1%', marginLeft: '23%'}} src={button}/>
      </div>
    );
  }
}
