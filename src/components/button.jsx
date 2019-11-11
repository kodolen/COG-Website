import React, { Component } from 'react';
class Button extends Component {
  render() {
    return (
        <a href="#" className={this.props.class}>
          <span>
            {this.props.text}
          </span>
        </a>
    )
  }
}
export default Button;