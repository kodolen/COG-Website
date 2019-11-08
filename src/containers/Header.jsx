import React, { Component } from 'react';
import LogoHeader from '../assets/logo-header.png';
import InstagramIcon from '../assets/Instagram.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="nav">
          <div className="logo">
            <img src={LogoHeader} alt=""/>
          </div>
          <div className="nav-links">
            <ul>
              <li><a href="">Game</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
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
      </div>
    )
  };
}

export default Header;
