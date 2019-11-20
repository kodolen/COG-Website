import React, { Component } from 'react';
import Socialbar from '../components/socialbar';
import InstagramIcon from '../assets/Instagram.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';
import YoutubeIcon from '../assets/yt.svg';
import {Waypoint} from "react-waypoint";

class Footer extends Component {
  render() {
    return (
      <div className="Footer row">
        <Waypoint bottomOffset="200px" onEnter={() => {
          let currentElement = document.getElementById("js-Footer");
          currentElement.classList.add('show');
        }}
        />
        <div className="Footer__inner row" id="js-Footer">
          <div className="Footer__COG col-xs-12 col-md-5">
            <h3>Corner Office Games</h3>
            <p className="footer-text"> An 18-person team from the Dutch Minor Game Design & Development at the University of Applied Sciences in Rotterdam. </p>
          </div>
          <div className="Footer__get-in-touch col-xs-12 col-md-6 off-md-1">
            <h3>Get in touch</h3>
            <div className="socialwrapper">
              <Socialbar image={InstagramIcon} text="@CornerOfficeGames" url="https://www.instagram.com/cornerofficegames/"></Socialbar>
              <Socialbar image={FacebookIcon} text="@CornerOfficeGames" url="https://www.facebook.com/cornerofficegames/"></Socialbar>
              <Socialbar image={TwitterIcon} text="@COfficeGames" url="https://twitter.com/COfficeGames"></Socialbar>
              <Socialbar image={YoutubeIcon} text="@CornerOfficeGames" url="https://www.youtube.com/channel/UCHZqOowdzuAJ3birP_yd1UA"></Socialbar>
            </div>
          </div>
          <div className="Footer__linklist col-xs-12">
            <span className="footer-links"><a className="anchor-link">About</a></span>
            <span><a href="#" className="anchor-link">Team</a></span>
            <span><a className="anchor-link">Games</a></span>
            <span><a className="anchor-link">Contact</a></span>
          </div>
          <div className="Footer__bottomtext col-xs-12">
            <span>2019 Corner Office Games</span>
          </div>
        </div>
      </div>
    )
  };
}

export default Footer;
