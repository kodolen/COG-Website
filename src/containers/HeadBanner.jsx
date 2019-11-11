import React, {Component} from 'react';
import Button from '../components/button';
import logo from '../assets/logo.png';

class HeadBanner extends Component {
    render() {
        return (
            <div className="HeadBanner">
                <div className="row">
                    <div className="inner row">
                        <div className="col-md-6 col-sm-12">
                            <div className="holder">
                                <h1>We are Corner Office Games</h1>
                                <p className="subtext">We are Corner Office Games and we make games We are Corner Office
                                    Games and we make
                                    games </p>
                                <Button class="button primary" text="Read more"></Button>
                                {/*<Button class="button secondary" text="Check out"></Button>*/}
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
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
