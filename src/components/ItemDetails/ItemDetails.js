import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {Helmet} from "react-helmet";






const initData = {
    itemImg: "/img/profile image 10.png",
    date: "2022-03-30",
    tab_1: "Bids",
    tab_2: "History",
    tab_3: "Details",
    ownerImg: "/img/profile image 10.png",
    itemOwner: "Themeland",
    created: "15 Jul 2021",
    title: "Walking On Air",
    content: "",
    price_1: "1.5 BNB",
    price_2: "$500.89",
    count: "1 of 5",
    size: "14000 x 14000 px",
    volume: "64.1",
    highest_bid: "2.9 BNB",
    bid_count: "1 of 5",
    btnText: "Buy Now"
}


const tabData_1 = [
    {
        id: "1",
        img: "/img/profile image 5.png",
        price: "14  BNB",
        time: "4 hours ago",
        author: "@arham"
    },
    {
        id: "2",
        img: "/img/profile image 4.png",
        price: "10  BNB",
        time: "8 hours ago",
        author: "@junaid"
    },
    {
        id: "3",
        img: "/img/profile image 3.png",
        price: "12  BNB",
        time: "3 hours ago",
        author: "@yasmin"
    }
]

const tabData_2 = [
    {
        id: "1",
        img: "/img/profile image 7.jpg",
        price: "32  BNB",
        time: "10 hours ago",
        author: "@hasan"
    },
    {
        id: "2",
        img: "/img/profile image 8.jpg",
        price: "24  BNB",
        time: "6 hours ago",
        author: "@artnox"
    },
    {
        id: "3",
        img: "/img/profile image 2.jpg",
        price: "29  BNB",
        time: "12 hours ago",
        author: "@meez"
    }
]

const sellerData = [
    {
        id: "1",
        img: "/img/profile image 11.jpg",
        seller: "@ArtNoxStudio",
        post: "Creator"
    },
    {
        id: "2",
        img: "/img/profile image 7.jpg",
        seller: "Virtual Worlds",
        post: "Collection"
    }
]

    
    function ItemDetails() {
        useEffect(() => {
            window.scrollTo(0, 0);
        })
    let data = useLocation();
        return (
            
            <section className="item-details-area">
                <Helmet>
          <meta charSet="utf-8" />
          <script src="/assets/js/vendor/countdown.min.js"></script>
        </Helmet>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="item-info">
                                <div className="item-thumb text-center">
                                    <img src={data.state.imgSend} alt="" />
                                    {/* <img src={this.state.initData.itemImg} alt="" /> */}
                                </div>
                                {/* <div className="card no-hover countdown-times my-4">
                                    <div className="countdown d-flex justify-content-center" data-date={initData.date} />
                                </div> */}
                                {/* Netstorm Tab */}
                                <ul className="netstorm-tab nav nav-tabs" id="nav-tab">
                                    <li>
                                        <a className="active" id="nav-home-tab" data-toggle="pill" href="#nav-home">
                                            <h5 className="m-0">{initData.tab_1}</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a id="nav-profile-tab" data-toggle="pill" href="#nav-profile">
                                            <h5 className="m-0">{initData.tab_2}</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a id="nav-contact-tab" data-toggle="pill" href="#nav-contact">
                                            <h5 className="m-0">{initData.tab_3}</h5>
                                        </a>
                                    </li>
                                </ul>
                                {/* Tab Content */}
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home">
                                        <ul className="list-unstyled">
                                            {/* Single Tab List */}
                                            {tabData_1.map((item, idx) => {
                                                return (
                                                    <li key={`tdo_${idx}`} className="single-tab-list d-flex align-items-center">
                                                        <img className="avatar-sm rounded-circle mr-3" src={item.img} alt="" />
                                                        <p className="m-0">Bid listed for <strong>{item.price}</strong> {item.time} <br />by <a href="/author">{item.author}</a></p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile">
                                        <ul className="list-unstyled">
                                            {/* Single Tab List */}
                                            {tabData_2.map((item, idx) => {
                                                return (
                                                    <li key={`tdt_${idx}`} className="single-tab-list d-flex align-items-center">
                                                        <img className="avatar-sm rounded-circle mr-3" src={item.img} alt="" />
                                                        <p className="m-0">Bid listed for <strong>{item.price}</strong> {item.time} <br />by <a href="/author">{item.author}</a></p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="nav-contact">
                                        {/* Single Tab List */}
                                        <div className="owner-meta d-flex align-items-center mt-3">
                                            <span>Owner</span>
                                            <a className="owner d-flex align-items-center ml-2" href="/author">
                                                <img className="avatar-sm rounded-circle" src={initData.ownerImg} alt="" />
                                                <h6 className="ml-2">{data.state.itemOwner}</h6>
                                            </a>
                                        </div>
                                        <p className="mt-2">Created : {initData.created}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            {/* Content */}
                            <div className="content mt-5 mt-lg-0">
                                <h3 className="m-0">{data.state.itemTitle}</h3>
                                <p>{initData.content}</p>
                                {/* Owner */}
                                <div className="owner d-flex align-items-center">
                                    <span>Owned By</span>
                                    <a className="owner-meta d-flex align-items-center ml-3" href="/author">
                                        <img className="avatar-sm rounded-circle" src={initData.ownerImg} alt="" />
                                        <h6 className="ml-2">{data.state.itemOwner}</h6>
                                    </a>
                                </div>
                                {/* Item Info List */}
                                <div className="item-info-list mt-4">
                                    <ul className="list-unstyled">
                                        <li className="price d-flex justify-content-between">
                                            <span>Current Price {initData.price_1}</span>
                                            <span>{data.state.itemPrice}</span>
                                            <span>{data.state.itemCount}</span>
                                        </li>
                                        {/* <li>
                                            <span>Size </span>
                                            <span>{initData.size}</span>
                                        </li>
                                        <li>
                                            <span>Volume Traded </span>
                                            <span>{initData.volume}</span>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="row items">
                                    {sellerData.map((item, idx) => {
                                        return (
                                            <div key={`sd_${idx}`} className="col-12 col-md-6 item px-lg-2">
                                                <div className="card no-hover">
                                                    <div className="single-seller d-flex align-items-center">
                                                        <a href="/author">
                                                            <img className="avatar-md rounded-circle" src={item.img} alt="" />
                                                        </a>
                                                        {/* Seller Info */}
                                                        <div className="seller-info ml-3">
                                                            <a className="seller mb-2" href="/author">{item.seller}</a>
                                                            <span>{item.post}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className="col-12 item px-lg-2">
                                        <div className="card no-hover">
                                            <h4 className="mt-0 mb-2">Highest Bid</h4>
                                            <div className="price d-flex justify-content-between align-items-center">
                                                <span>{initData.highest_bid}</span>
                                                <span>{initData.bid_count}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="d-block btn btn-bordered-white mt-4 " style={{color:'white', width: '200px', margin:'auto auto'}}>{initData.btnText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }


export default ItemDetails;
