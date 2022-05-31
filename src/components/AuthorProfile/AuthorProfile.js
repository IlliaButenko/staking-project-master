import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/author";

class AuthorProfile extends Component {
    state = {
        data: {},
        socialData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    socialData: res.data.socialData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="card no-hover text-center">
                <div className="image-over">
                    <img className="card-img-top" src={this.state.data.img} alt="" />
                    {/* Author */}
                    <div className="author">
                        <div className="author-thumb avatar-lg">
                            <img className="rounded-circle" src={this.state.data.authorImg} alt="" />
                        </div>
                    </div>
                </div>
                {/* Card Caption */}
                <div className="card-caption col-12 p-0">
                    {/* Card Body */}
                    <div className="card-body mt-4">
                        <h5 className="mb-3">{this.state.data.author}</h5>
                        <p className="my-3">{this.state.data.content}</p>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder={this.state.data.authorId} />
                            <div className="input-group-append">
                                <button><i className="icon-docs" /></button>
                            </div>
                        </div>
                        {/* Social Icons */}
                        <div className="social-icons d-flex justify-content-center my-3">
                            {this.state.socialData.map((item, idx) => {
                                return (
                                    <a key={`asd_${idx}`} className={item.link} href="#">
                                        <i className={item.icon} />
                                        <i className={item.icon} />
                                    </a>
                                );
                            })}
                        </div>
                        <a className="btn btn-bordered-white btn-smaller" href="#">{this.state.data.btnText}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorProfile;