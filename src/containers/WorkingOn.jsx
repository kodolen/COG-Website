import React, {Component} from 'react';
import InstagramIcon from "../assets/Instagram.svg";
import FacebookIcon from "../assets/Facebook.svg";
import TwitterIcon from "../assets/Twitter.svg";
import YoutubeIcon from '../assets/yt.svg';
import {Waypoint} from "react-waypoint";

class WorkingOn extends Component {
    render() {
        return (
            <div className="WorkingOn" id="js-WorkingOn">
                <Waypoint bottomOffset="200px" onEnter={() => {
                    let currentElement = document.getElementById("js-WorkingOn");
                    currentElement.classList.add('show');
                }}
                />
                <div className="row">
                    <div className="inner row">
                        <div className="col-md-6 off-md-3 col-xs-12">
                            <div className="holder">
                                <h2>We are currently developing our game</h2>
                                <p className="subtext">We are Corner Office Games and we make games We are Corner Office
                                    Games and we make games </p>
                                <span className="subtitle">Stay tuned via:</span>
                                <div className="icon-holder">
                                    <ul>
                                        <li><a href="https://www.instagram.com/cornerofficegames/" target="_blank"><img src={InstagramIcon} alt=""/></a></li>
                                        <li><a href="https://www.facebook.com/cornerofficegames/" target="_blank"><img src={FacebookIcon} alt=""/></a></li>
                                        <li><a href="https://twitter.com/cofficegames" target="_blank"><img src={TwitterIcon} alt=""/></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCHZqOowdzuAJ3birP_yd1UA" target="_blank"><img src={YoutubeIcon} alt=""/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default WorkingOn;
