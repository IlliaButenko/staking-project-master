import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/blog";

class Blog extends Component {
    state = {
        data: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data.blogData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="blog-area">
                <div className="container">
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`bd_${idx}`} className="col-12 col-md-4 item">
                                    {/* Single Blog */}
                                    <div className="card blog-card">
                                        {/* Blog Thumb */}
                                        <div className="blog-thumb">
                                            <a href="/blog-single"><img src={item.img} alt="" /></a>
                                        </div>
                                        {/* Blog Content */}
                                        <div className="blog-content">
                                            {/* Meta Info */}
                                            <ul className="meta-info d-flex justify-content-between list-unstyled mt-4">
                                                <li>By <a href="#">{item.author}</a></li>
                                                <li><a href="#">{item.date}</a></li>
                                            </ul>
                                            {/* Blog Title */}
                                            <a href="/blog-single">
                                                <h4>{item.title}</h4>
                                            </a>
                                            <p>{item.content}</p>
                                            {/* Blog Button */}
                                            <a className="btn content-btn" href="/blog-single">{item.btnText}</a>
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

export default Blog;