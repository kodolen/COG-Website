import React, {Component} from 'react';
import Like from '../assets/like.svg';
import {Waypoint} from "react-waypoint";

class Feeds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        //this API call gets the latest 6 posts, this can be changed in Apify.com
        fetch('https://api.apify.com/v2/datasets/KtWr5w656nRzpjTh4/items')
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({
                posts: data
            });
            console.log(data);
        });
    }

    render() {

        let {posts} = this.state;

        return (
            <div className="Feeds" id="js-Feeds">
                <Waypoint bottomOffset="100px" onEnter={() => {
                    let currentElement = document.getElementById("js-Feeds");
                    currentElement.classList.add('show');
                }}
                />
                <div className="row">
                    <div className="inner row">
                        <h3>Our latest Instagram posts</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="feed-holder">
                        <div className="inner row">
                            {posts.map((post, i) => (
                                <div className="col-lg-2 col-md-3 col-xs-12" key={i}>
                                    <div className="image-holder">
                                        <a className="feed-image" href={post.url} target="_blank" rel="noopener noreferrer">
                                            <img src={post.imageUrl} alt="" className="img-gray"/>
                                            <div className="like">
                                                <img src={Like} alt=""/>
                                                <span>{post.likesCount}</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Feeds;
