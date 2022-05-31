import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/authors";

class Authors extends Component {
    state = {
        data: {},
        authorData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    authorData: res.data.authorData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="popular-collections-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.data.preHeading}</span>
                                <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                <p>{this.state.data.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.authorData.map((item, idx) => {
                            return (
                                <div key={`ad_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card no-hover text-center">
                                        <div className="image-over">
                                            <a href="/author">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                            {/* Seller */}
                                            <a className="seller" href="/author">
                                                <div className="seller-thumb avatar-lg">
                                                    <img className="rounded-circle" src={item.avatar} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body mt-4">
                                                <a href="/author">
                                                    <h5>{item.author}</h5>
                                                </a>
                                                <a className="btn btn-bordered-white btn-smaller" href="#">{item.btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Authors;