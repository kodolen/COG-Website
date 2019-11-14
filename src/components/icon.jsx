import React, {Component} from 'react';

class Icon extends Component {
    render() {
        return (
            <div className="icon">
                <img src={this.props.icon} alt=""/>
                <h3>{this.props.title}</h3>
                <p className="icon-text">{this.props.text}</p>
            </div>
        )
    }
}

export default Icon;