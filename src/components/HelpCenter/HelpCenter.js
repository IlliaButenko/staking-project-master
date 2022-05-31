import React, { Component } from 'react';

const initData = {
    pre_heading: "Help Center",
    heading: "How can we help you?",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
}

const data = [
    {
        id: "1",
        icon: "icon icon-plane text-effect",
        title: "Getting Started",
        content: "Learn how to create an account, set up your wallet, and what you can do on NetStorm"
    },
    {
        id: "2",
        icon: "icon icon-note text-effect",
        title: "Creating",
        content: "Learn how to create your very first NFT and how to create your NFT collections so you can begin selling and sharing"
    },
    {
        id: "3",
        icon: "icon icon-handbag text-effect",
        title: "Buying",
        content: "Learn how to purchase your first NFT and understand gas fees and what's gas free on NetStorm"
    },
    {
        id: "4",
        icon: "icon icon-chart text-effect",
        title: "Selling",
        content: "Learn how list your NFTs for sale and understand the different ways to list your NFTs"
    },
    {
        id: "5",
        icon: "icon icon-link text-effect",
        title: "Partners",
        content: "Learn how you can partner with us to showcase your NFT drops"
    },
    {
        id: "6",
        icon: "icon icon-flag text-effect",
        title: "Developers",
        content: "Learn how you can develop with NetStorm &amp; sell them on Marketplace"
    }
]

class HelpCenter extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="help-center-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                <p>{this.state.initData.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`hd_${idx}`} className="col-12 col-md-6 col-lg-4 item">
                                    {/* Help Card */}
                                    <div className="card help-card">
                                        <a className="d-block text-center" href="#">
                                            <i className={item.icon} />
                                            <h4>{item.title}</h4>
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

export default HelpCenter;