import React, {Component} from 'react';
import Icon from '../components/icon';
import Sort from '../assets/sort.svg';
import Color from '../assets/color.svg';
import Computer from '../assets/computer.svg';

class OurTeam extends Component {
    render() {
        return (
            <div className="OurTeam">
                <div className="row">
                    <div className="inner row">
                        <div className="col-md-6 off-md-3 col-xs-12">
                            <h2>We are a group of people blah blah erg mooi</h2>
                            <p>We are a group of people blah blah erg mooi en goed dat zeker weten We are a group of
                                people blah blah erg mooi en goed dat zeker wetenWe are a group of people blah blah erg
                                mooi en goed dat zeker weten</p>

                        </div>
                    </div>

                    <div className="inner row">
                        <div className="col-md-10 off-md-1 col-xs-12">
                            <div className="icons-holder">
                                <Icon icon={Sort} title="Developers"
                                      text=" oke nog een mooite tekst hooroke nog een mooite tekst hoor"></Icon>
                                <Icon icon={Color} title="Artists"
                                      text=" oke nog een mooite tekst hooroke nog een mooite tekst hoor"></Icon>
                                <Icon icon={Computer} title="Designers"
                                      text=" oke nog een mooite tekst hooroke nog een mooite tekst hoor"></Icon>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    };
}

export default OurTeam;
