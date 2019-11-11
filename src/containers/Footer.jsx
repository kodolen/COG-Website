import React, { Component } from 'react';
import Socialbar from '../components/socialbar';
import InstagramIcon from '../assets/Instagram.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer row">
        <div className="Footer__inner row">
          <div className="Footer__COG col-xs-12 col-md-5">
            <h2>Corner Office Games</h2>
            <p>We are Corner Office Games and we make games We are Corner Office Games and we </p>
          </div>
          <div className="Footer__get-in-touch col-xs-12 col-md-6 off-md-1">
            <h2>Get in touch</h2>
            <div className="socialwrapper">
              <Socialbar image={InstagramIcon} text="@CornerOfficeGames" url="https://www.instagram.com/cornerofficegames/"></Socialbar>
              <Socialbar image={FacebookIcon} text="@CornerOfficeGames" url="https://www.facebook.com/cornerofficegames/"></Socialbar>
              <Socialbar image={TwitterIcon} text="@CornerOfficeGames" url="https://twitter.com/COfficeGames"></Socialbar>
              <Socialbar image={TwitterIcon} text="@CornerOfficeGames" url="https://www.youtube.com/channel/UCHZqOowdzuAJ3birP_yd1UA"></Socialbar>
            </div>
          </div>
          <div className="Footer__linklist col-xs-12">
            <span><a className="anchor-link">About</a></span>
            <span><a className="anchor-link">Team</a></span>
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
