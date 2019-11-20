import React, {Component} from 'react';
import Button from '../components/button';
import logo from '../assets/logo.png';
import { Waypoint } from 'react-waypoint';

class HeadBanner extends Component {
    render() {
        return (
            <div className="HeadBanner">
                <div className="row">
                    <div className="inner row">
                        <div className="col-md-6 col-xs-12">
                            <div className="holder">
                                <h1>We are Corner Office Games</h1>
                                <p className="subtext">An 18-person team
                                from the Dutch Minor Game Design & Development at the University
                                of Applied Sciences in Rotterdam.</p>
                                <Button class="button primary" text="Read more"></Button>
                                {/*<Button class="button secondary" text="Check out"></Button>*/}
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="img-holder">
                                <img src={logo} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default HeadBanner;
