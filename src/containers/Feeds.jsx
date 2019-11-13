import React, {Component} from 'react';
import Glide from '@glidejs/glide'

class Feeds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        //this API call gets the latest 6 posts, this can be changed in Apify.com
        fetch('https://api.apify.com/v2/datasets/r7o3GgR6yPv9syRpc/items')
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({
                posts: data
            });
            console.log(data);
        });

        new Glide('.glide').mount();

        // // new Glide('.glide', {
        // //     type: 'carousel',
        // //     startAt: 0,
        // //     perView: 3
        // // })

        // new Glide('.glide', {
        //     type: 'carousel',
        //     startAt: 0,
        //     perView: 3
        // })
    }

    render() {

        let {posts} = this.state;

        return (
            <div className="Feeds">
                <div className="row">
                    <div className="inner row">
                        <div className="col-md-12">
                            <div className="glide">
                                <div data-glide-el="track" className="glide__track">
                                    <ul className="glide__slides">
                                        {posts.map((post, i) => (
                                            <li className="glide__slide" key={i}>
                                                <div className="feed" style={{ backgroundImage: 'url(' + post.imageUrl + ')' }}>

                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="glide__arrows" data-glide-el="controls">
                                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev
                                    </button>
                                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

}

export default Feeds;
