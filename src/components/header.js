
import React, { Component } from 'react';
import logo from '../assets/imgs/logo.jpg';

export default class Header extends Component {
  render () {
    return (
     <nav>
        <div className="header">
          <img className="logo" alt="logo" src={logo} />
          <ul className="nav">
            <li><a className="selected" href="/">Games</a></li>
            <li><a href="/">Membership</a></li>
            <li><a href="/">Download</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Support</a></li>
          </ul>
          <button className="lets-play">LET'S PLAY</button>
        </div>
      </nav>  
    );
  }
}
 