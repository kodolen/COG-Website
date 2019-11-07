import React, { Component } from 'react';

class Socialbar extends Component {
  render() {
    return (
      <div className="socialbar col-md-6">
        <img src={this.props.image} alt=""/>
        <p className="socialbar__text">{this.props.text}</p>
      </div>
    )
  }
}
export default Socialbar;