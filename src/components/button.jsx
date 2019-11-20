import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <span className={this.props.class}>
            {this.props.text}
          </span>
        )
    }
}

export default Button;