import React, {Component} from 'react';
import {Waypoint} from "react-waypoint";

class OurTeam extends Component {
    render() {
        return (
            <div className="OurTeam" id="js-OurTeam">
                <Waypoint bottomOffset="200px" onEnter={() => {
                    let currentElement = document.getElementById("js-OurTeam");
                    currentElement.classList.add('show');
                }}
                />
                <div className="row">
                    <div className="inner row">
                        <div className="col-md-6 off-md-3 col-xs-12">
                            <h2>Introducing our team</h2>
                            <p className="subtext">
                                We from Corner Office Games started life as an 18-person team
                                from the Dutch Minor Game Design & Development at the University
                                of Applied Sciences in Rotterdam. We are a perfect mix of
                                designers, developers and artists working to the fullest to
                                achieve a wonderful game within 14 weeks of time.
                            </p>

                        </div>
                    </div>

                    <div className="inner row">
                        <div className="col-md-10 off-md-1 col-xs-12">
                            <div className="video-holder">
                                <iframe width="300" height="315" src="https://www.youtube.com/embed/sS4WdR5tmBU"
                                        frameBorder="0"
                                        title="vlog"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    };
}

export default OurTeam;
