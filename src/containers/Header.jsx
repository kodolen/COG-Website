import React, { Component } from 'react';
import LogoHeader from '../assets/logo-header.png';
import Logo from '../assets/logo.png';
import InstagramIcon from '../assets/Instagram.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';
import YoutubeIcon from '../assets/yt.svg';
import SteamIcon from "../assets/Steam.png";
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  constructor(props) {
    super(props);
    this.state = {mobile: false, menu: 'closed'};
  }

  componentDidMount() {
    const header = document.getElementById('js-header');

    if(window.innerWidth >= 992) {
      this.setState({mobile: false});
    } else {
      this.setState({mobile: true});
    }

    document.addEventListener("scroll", function(){
      if(window.pageYOffset > 0) {
        header.classList.add('Header--scrolled')
      } else if (window.pageYOffset === 0) {
        header.classList.remove('Header--scrolled')
      }
    })

    window.addEventListener("resize", function(){
      if(window.innerWidth >= 992) {
        this.setState({mobile: false});
        console.log(window.innerWidth);
      } else {
        this.setState({mobile: true});
        console.log(window.innerWidth);
      }
    }.bind(this))

    this.menuToggle = this.menuToggle.bind(this)
  }

  menuToggle(e) {
    if(this.state.menu === 'closed') {
      this.setState({menu: 'open'});
      document.getElementById('js-header').classList.add('Header--opened');
    } else {
      this.setState({menu: 'closed'});
      document.getElementById('js-header').classList.remove('Header--opened');
    }
  }

  render() {
    if(!this.state.mobile) {
      return (
        <div id="js-header" className="Header row">
          <div className="Header__logo">
            <img src={LogoHeader} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
          </div>
          <div className="Header__links">
            <span><Link activeClass="active" to="js-WorkingOn" spy={true} smooth={true} offset={-70} duration={500} className="anchor-link">Game</Link></span>
            <span><Link activeClass="active" to="js-OurTeam" spy={true} smooth={true} offset={-70} duration={500} className="anchor-link">About</Link></span>
            <span><Link activeClass="active" to="js-Feeds" spy={true} smooth={true} offset={-70} duration={500} className="anchor-link">Social</Link></span>
          </div>
          <div className="Header__social">
            <a className="socialimage" href="https://www.instagram.com/cornerofficegames/" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt=""/></a>
            <a className="socialimage" href="https://www.facebook.com/cornerofficegames/" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt=""/></a>
            <a className="socialimage" href="https://twitter.com/cofficegames" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt=""/></a>
            <a className="socialimage" href="https://www.youtube.com/channel/UCHZqOowdzuAJ3birP_yd1UA" target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} alt=""/></a>
            <a className="socialimage" href="https://store.steampowered.com/app/1203680/Guiding_Light/?curator_clanid=4777282&utm_source=SteamDB" target="_blank" rel="noopener noreferrer"><img src={SteamIcon} alt=""/></a>
          </div>
        </div>
      )
    } else {
      return(
        <div id="js-header" className="Header row">
          <div className="Header__logo">
            <img src={Logo} alt="" onClick={this.scrollToTop}/>
          </div>
          <div className="Header__hamburger" onClick={this.menuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="Header__menu">
            <div className="menu__inner">
              <span><Link activeClass="active" to="js-WorkingOn" spy={true} smooth={true} offset={-70} duration={500} className="anchor-link" onClick={this.menuToggle}>Game</Link></span>
              <span><Link activeClass="active" to="js-OurTeam" spy={true} smooth={true} offset={-70} duration={500} className="anchor-link" onClick={this.menuToggle}>About</Link></span>
              <span><Link activeClass="active" to="js-Feeds" spy={true} smooth={true} offset={-70} duration={500} className="anchor-link" onClick={this.menuToggle}>Social</Link></span>
            </div>
            <div className="Header__social Header__social--mobile">
            <a className="socialimage" href="https://www.instagram.com/cornerofficegames/" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt=""/></a>
            <a className="socialimage" href="https://www.facebook.com/cornerofficegames/" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt=""/></a>
            <a className="socialimage" href="https://twitter.com/cofficegames" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt=""/></a>
            <a className="socialimage" href="https://www.youtube.com/channel/UCHZqOowdzuAJ3birP_yd1UA" target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} alt=""/></a>
              <a className="socialimage" href="https://store.steampowered.com/app/1203680/Guiding_Light/?curator_clanid=4777282&utm_source=SteamDB" target="_blank" rel="noopener noreferrer"><img src={SteamIcon} alt=""/></a>
            </div>
          </div>
        </div>
      )
    }
  };
}

export default Header;
