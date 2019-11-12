import React, { Component } from 'react';

class Feeds extends Component {
  componentDidMount() {
    
    fetch('https://api.apify.com/v2/datasets/MNGp3TA6yZuNKRij8/items')
        .then(results => {
          return results.json();
        }).then(data => {

    });
  }

  render() {
    return (
      <div className="Feeds">

      </div>
    )
  };
}

export default Feeds;
