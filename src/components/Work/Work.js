import React, { Component } from 'react';
// import axios from 'axios';
// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/work";

const initData = {
    preHeading: "How It Works",
    heading: "Connect and sell your NFTs"
}

const workData = [
    {
      id: 1,
      icon: "icons icon-wallet text-effect",
      title: "Set up wallet",
      text: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support."
    },
    {
      id: 2,
      icon: "icons icon-grid text-effect",
      title: "Create your account",
      text: "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
    },
    {
      id: 3,
      icon: "icons icon-drawer text-effect",
      title: "Import your NFTs",
      text: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
    },
    {
      id: 4,
      icon: "icons icon-bag text-effect",
      title: "List & Start Earning",
      text: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!"
    }
  ]


class Work extends Component {
    state = {
        data: {},
        workData: []
    }

    componentDidMount(){
        this.setState({
            data: initData,
            workData: workData
        })

    }
    

    // componentDidMount(){
    //     axios.get(`${BASE_URL}`)
    //         .then(res => {
    //             this.setState({
    //                 data: res.data,
    //                 workData: res.data.workData
    //             })
    //             // console.log(this.state.data)
    //         })
    //     .catch(err => console.log(err))   
    // }
    render() {

        return (
            <section className="work-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    <span>{this.state.data.preHeading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.workData.map((item, idx) => {
                            return (
                                <div key={`wd_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    {/* Single Work */}
                                    <div className="single-work">
                                        <i className={item.icon} />
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
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

export default Work;