import React, { Component } from 'react';
import axios from 'axios';

// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/activity";

const initData = {
    preHeading: "DEFI",
    heading: "Activity",
    tabTitle_1: "All",
    tabTitle_2: "Recent",
    tabTitle_3: "Purchase",
    widgetTitle: "Filters"
}

const tabData_1 = [
    {
        id: 1,
        img: "/img/Resources/Axie Infinity - NFTs/Axie-193969.png",
        title: "Axie-193969",
        price: "14  BNB",
        time: "4 hours ago",
        seller: "@arham"
      },
      {
        id: 2,
        img: "/img/Resources/Axie Infinity - NFTs/Axie-578874.png",
        title: "Axie-578874",
        price: "10  BNB",
        time: "8 hours ago",
        seller: "@junaid"
      },
      {
        id: 3,
        img: "/img/Resources/CryptoKitties - NFTs/Pawrula-243.png",
        title: "Pawrula-243",
        price: "12  BNB",
        time: "3 hours ago",
        seller: "@yasmin"
      },
      {
        id: 4,
        img: "/img/Resources/CryptoKitties - NFTs/KittyPride-1006.png",
        title: "Kitty Pride",
        price: "22  BNB",
        time: "9 hours ago",
        seller: "@john"
      },
      {
        id: 5,
        img: "/img/Resources/Sandbox - NFTs/Airplane-Statue.png",
        title: "Airplane Statue",
        price: "42  BNB",
        time: "7 hours ago",
        seller: "@william"
      },
      {
        id: 6,
        img: "/img/Resources/Axie Infinity - NFTs/Statue of Caladbolg.png",
        title: "Caladbolg",
        price: "36  BNB",
        time: "10 hours ago",
        seller: "@sara"
      }
    ],
    tabData_2 = [
      {
        id: 1,
        img: "/img/Resources/Axie Infinity - NFTs/Axie-193969.png",
        title: "Axie-193969",
        price: "14  BNB",
        time: "4 hours ago",
        seller: "@arham"
      },
      {
        id: 2,
        img: "/img/Resources/Axie Infinity - NFTs/Axie-578874.png",
        title: "Axie-578874",
        price: "10  BNB",
        time: "8 hours ago",
        seller: "@junaid"
      },
      {
        id: 3,
        img: "/img/Resources/CryptoKitties - NFTs/Pawrula-243.png",
        title: "Pawrula-243",
        price: "12  BNB",
        time: "3 hours ago",
        seller: "@yasmin"
      },
      {
        id: 4,
        img: "/img/Resources/CryptoKitties - NFTs/KittyPride-1006.png",
        title: "Kitty Pride",
        price: "22  BNB",
        time: "9 hours ago",
        seller: "@john"
      }
    ],
    tabData_3 = [
      {
        id: 1,
        img: "/img/auction_1.jpg",
        title: "Design Illusions",
        price: "10  BNB",
        time: "8 hours ago",
        seller: "@junaid"
      },
      {
        id: 2,
        img: "/img/auction_2.jpg",
        title: "Digital Arts",
        price: "12  BNB",
        time: "3 hours ago",
        seller: "@yasmin"
      },
      {
        id: 3,
        img: "/img/auction_3.jpg",
        title: "Photography",
        price: "22  BNB",
        time: "9 hours ago",
        seller: "@john"
      },
      {
        id: 4,
        img: "/img/auction_4.jpg",
        title: "Virtual Worlds",
        price: "69  BNB",
        time: "12 hours ago",
        seller: "@junaid"
      }
    ],
    filterData = [
      {
        id: 1,
        title: "Listing"
      },
      {
        id: 2,
        title: "Sales"
      },
      {
        id: 3,
        title: "Bids"
      },
      {
        id: 4,
        title: "Axie Infinity"
      },
      {
        id: 5,
        title: "CryptoKitties"
      },
      {
        id: 6,
        title: "Sandbox"
      },
      {
        id: 7,
        title: "MOBOX"
      },
      {
        id: 8,
        title: "Items"
      },
      {
        id: 9,
        title: "Collectibles"
      }
]
  




class Activity extends Component {
    state = {
        data: {},
        tabData_1: [],
        tabData_2: [],
        tabData_3: [],
        filterData: []
    }
    componentDidMount(){
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //             tabData_1: res.data.tabData_1,
        //             tabData_2: res.data.tabData_2,
        //             tabData_3: res.data.tabData_3,
        //             filterData: res.data.filterData 
        //         })
        //         // console.log(this.state.data)
        //     })
        // .catch(err => console.log(err))
        
            this.setState({
                data: initData,
                tabData_1: tabData_1,
                tabData_2: tabData_2,
                tabData_3: tabData_3,
                filterData: filterData 
            })
    }
    render() {
        return (
            <section className="activity-area load-more">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        <div className="col-12 col-md-6 col-lg-8">
                            {/* Netstorm Tab */}
                            <ul className="netstorm-tab nav nav-tabs" id="nav-tab">
                                <li>
                                    <a className="active" id="nav-home-tab" data-toggle="pill" href="#nav-home">
                                        <h5 className="m-0">{this.state.data.tabTitle_1}</h5>
                                    </a>
                                </li>
                                <li>
                                    <a id="nav-profile-tab" data-toggle="pill" href="#nav-profile">
                                        <h5 className="m-0">{this.state.data.tabTitle_2}</h5>
                                    </a>
                                </li>
                                {/* <li>
                                    <a id="nav-contact-tab" data-toggle="pill" href="#nav-contact">
                                        <h5 className="m-0">{this.state.data.tabTitle_3}</h5>
                                    </a>
                                </li> */}
                            </ul>
                            {/* Tab Content */}
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home">
                                    <ul className="list-unstyled">
                                        {/* Single Tab List */}
                                        {this.state.tabData_1.map((item, idx) => {
                                            return (
                                                <li key={`ato_${idx}`} className="single-tab-list d-flex align-items-center">
                                                        <img className="avatar-lg" src={item.img} alt="" />
                                                    {/* Activity Content */}
                                                    <div className="activity-content ml-4">
                                                            <h5 className="mt-0 mb-2">{item.title}</h5>
                                                        <p className="m-0">Bid listed for <strong>{item.price}</strong> {item.time} <br />by <>{item.seller}</></p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="nav-profile">
                                    <ul className="list-unstyled">
                                        {/* Single Tab List */}
                                        {this.state.tabData_2.map((item, idx) => {
                                            return (
                                                <li key={`att_${idx}`} className="single-tab-list d-flex align-items-center">
                                                        <img className="avatar-lg" src={item.img} alt="" />
                                                    {/* Activity Content */}
                                                    <div className="activity-content ml-4">
                                                            <h5 className="mt-0 mb-2">{item.title}</h5>
                                                        <p className="m-0">Bid listed for <strong>{item.price}</strong> {item.time} <br />by <>{item.seller}</></p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="nav-contact">
                                    <ul className="list-unstyled">
                                        {/* Single Tab List */}
                                        {this.state.tabData_3.map((item, idx) => {
                                            return (
                                                <li key={`atth_${idx}`} className="single-tab-list d-flex align-items-center">
                                                        <img className="avatar-lg" src={item.img} alt="" />
                                                    {/* Activity Content */}
                                                    <div className="activity-content ml-4">
                                                            <h5 className="mt-0 mb-2">{item.title}</h5>
                                                        <p className="m-0">Bid listed for <strong>{item.price}</strong> {item.time} <br />by <>{item.seller}</></p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            {/* Activity Content */}
                            <div className="activity-content mt-5 mt-lg-0">
                                {/* Single Widget */}
                                <div className="single-widget">
                                    {/* Search Widget */}
                                    {/* <div className="widget-content search-widget">
                                        <form action="#">
                                            <input type="text" placeholder="Enter your keywords" />
                                        </form>
                                    </div> */}
                                </div>
                                {/* Single Widget */}
                                <div className="single-widget">
                                    {/* Filter Widget */}
                                    <div className="widget filter-widget">
                                        <h4 className="title">{this.state.data.widgetTitle}</h4>
                                        {/* Filter Widget Content */}
                                        <div className="widget-content">
                                            {/* Tags Widget Items */}
                                            <div className="widget-content filter-widget-items mt-3">
                                                {this.state.filterData.map((item, idx) => {
                                                    return (
                                                        <a key={`fd_${idx}`} href="#" className="badge tag">{item.title}</a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Activity;