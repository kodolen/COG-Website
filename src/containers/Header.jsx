import React, { Component } from 'react';
import LogoHeader from '../assets/logo-header.png';
import Logo from '../assets/logo.png';
import InstagramIcon from '../assets/Instagram.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';

class Header extends Component {
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
      } else if (window.pageYOffset == 0) {
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
    if(this.state.menu == 'closed') {
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
            <img src={LogoHeader} alt=""/>
          </div>
          <div className="Header__links">
            <span><a className="anchor-link" href="#">Game</a></span>
            <span><a className="anchor-link" href="#">About</a></span>
            <span><a className="anchor-link" href="#">Contact</a></span>
          </div>
          <div className="Header__social">
            <a className="socialimage"><img src={InstagramIcon} alt=""/></a>
            <a className="socialimage"><img src={FacebookIcon} alt=""/></a>
            <a className="socialimage"><img src={TwitterIcon} alt=""/></a>
            <a className="socialimage"><img src={TwitterIcon} alt=""/></a>
          </div>
        </div>
      )
    } else {
      return(
        <div id="js-header" className="Header row">
          <div className="Header__logo">
            <img src={Logo} alt=""/>
          </div>
          <div className="Header__hamburger" onClick={this.menuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="Header__menu">
            <div className="menu__inner">
              <span><a className="anchor-link" href="#">Game</a></span>
              <span><a className="anchor-link" href="#">About</a></span>
              <span><a className="anchor-link" href="#">Contact</a></span>
            </div>
            <div className="Header__social Header__social--mobile">
              <a className="socialimage"><img src={InstagramIcon} alt=""/></a>
              <a className="socialimage"><img src={FacebookIcon} alt=""/></a>
              <a className="socialimage"><img src={TwitterIcon} alt=""/></a>
              <a className="socialimage"><img src={TwitterIcon} alt=""/></a>
            </div>
          </div>
        </div>
      )
    }
   
  };
}

export default Header;
