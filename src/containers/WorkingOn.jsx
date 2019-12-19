import React, {Component} from 'react';
import GuidingLightTeaser from '../assets/video/GLTeaser.mp4';
import {Waypoint} from "react-waypoint";
import Button from "../components/button";

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
                                <h2>Guiding Light</h2>
                                <p className="subtext">
                                    Guiding Light is a cooperative game in which you and a friend work for the
                                    Intergalactic Crash Unit. It’s your job to rescue stranded aliens from all kinds of
                                    sticky situations.</p>
                                <video controls>
                                    <source src={GuidingLightTeaser} type="video/mp4"/>
                                </video>
                                <br/>
                                <span className="subtitle">Check out the steam page for more information and wishlist the game now!</span><br/><br/>
                                <a className="steam-link" href="https://store.steampowered.com/app/1203680/Guiding_Light/?curator_clanid=4777282&utm_source=SteamDB" target="_blank"><Button class="button primary" text="Check out"></Button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    };
    }

    export default WorkingOn;
