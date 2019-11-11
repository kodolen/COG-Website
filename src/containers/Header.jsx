import React, { Component } from 'react';
import LogoHeader from '../assets/logo-header.png';
import InstagramIcon from '../assets/Instagram.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <div className="logo">
          <img src={LogoHeader} alt=""/>
        </div>
        <div className="Header__links">
          <span><a href="#">Game</a></span>
          <span><a href="#">About</a></span>
          <span><a href="#">Contact</a></span>
        </div>
        <div className="social">
          <ul>
            <li><a href=""><img src={InstagramIcon} alt=""/></a></li>
            <li><a href=""><img src={FacebookIcon} alt=""/></a></li>
            <li><a href=""><img src={TwitterIcon} alt=""/></a></li>
            <li><a href=""><img src={TwitterIcon} alt=""/></a></li>
          </ul>
        </div>
      </div>
    )
  };
}

export default Header;
