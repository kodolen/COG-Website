import React, { Component } from 'react';

class Socialbar extends Component {
  render() {
    return (
      <div className="socialbar">
        <img src={this.props.image} alt=""/>
          <span className="socialbar__text">{
            //eslint-disable-next-line
            }<a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.text}</a>
          </span>
      </div>
    )
  }
}
export default Socialbar;