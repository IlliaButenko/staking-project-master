import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/wallet";

class Activity extends Component {
    state = {
        data: {},
        walletData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    walletData: res.data.walletData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="wallet-connect-area">
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
                    <div className="row justify-content-center items">
                        {this.state.walletData.map((item, idx) => {
                            return (
                                <div key={`wd_${idx}`} className="col-12 col-md-6 col-lg-4 item">
                                    {/* Single Wallet */}
                                    <div className="card single-wallet">
                                        <a className="d-block text-center" href="/login">
                                            <img className="avatar-lg" src={item.img} alt="" />
                                            <h4 className="mb-0">{item.title}</h4>
                                            <p>{item.content}</p>
                                        </a>
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

export default Activity;