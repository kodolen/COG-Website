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
              <Socialbar image={InstagramIcon} text="@CornerOfficeGames"></Socialbar>
              <Socialbar image={FacebookIcon} text="@CornerOfficeGames"></Socialbar>
              <Socialbar image={TwitterIcon} text="@CornerOfficeGames"></Socialbar>
              <Socialbar image={TwitterIcon} text="@CornerOfficeGames"></Socialbar>
            </div>
          </div>
          <div className="Footer__linklist col-xs-12">
            <span>About</span>
            <span>Team</span>
            <span>Games</span>
            <span>Contact</span>
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
