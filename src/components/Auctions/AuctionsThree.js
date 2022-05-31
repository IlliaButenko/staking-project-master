import React, { Component } from 'react';

const initData = {
    pre_heading: "MARKETPLACE",
    heading: "Live Auctions",
    btnText: "View All"
}

const data = [
    {
        id: "1",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-193969.png",
        date: "2021-12-09",
        title: "Virtual Worlds",
        seller_thumb: "/img/profile image 1.jpg",
        seller: "@Richard",
        price: "1.5 BNB",
        count: "1 of 1"
    },
    {
        id: "2",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-239618.png",
        date: "2021-10-05",
        title: "Collectibles",
        seller_thumb: "/img/profile image 2.jpg",
        seller: "@JohnDeo",
        price: "2.7 BNB",
        count: "1 of 1"
    },
    {
        id: "3",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-578874.png",
        date: "2022-09-15",
        title: "Arts",
        seller_thumb: "/img/profile image 3.png",
        seller: "@MKHblots",
        price: "2.3 BNB",
        count: "1 of 1"
    },
    {
        id: "4",
        img: "/img/Resources/Axie Infinity - NFTs/Jade Snowboard-1276.png",
        date: "2021-12-29",
        title: "Robotic Arts",
        seller_thumb: "/img/profile image 4.png",
        seller: "@RioArham",
        price: "1.8 BNB",
        count: "1 of 1"
    },
    {
        id: "5",
        img: "/img/Resources/Axie Infinity - NFTs/MakerDao Gold-5.png",
        date: "2022-01-24",
        title: "Magazine Fall",
        seller_thumb: "/img/profile image 5.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "6",
        img: "/img/Resources/Axie Infinity - NFTs/Statue of Caladbolg.png",
        date: "2022-03-30",
        title: "Inspiration",
        seller_thumb: "/img/profile image 6.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "7",
        img: "/img/Resources/CryptoKitties - NFTs/Earnie-482.png",
        date: "2022-01-24",
        title: "Design Illusions",
        seller_thumb: "/img/profile image 7.jpg",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "8",
        img: "/img/Resources/CryptoKitties - NFTs/KittyPride-1006.png",
        date: "2022-03-30",
        title: "Design Illusions",
        seller_thumb: "/img/profile image 8.jpg",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "9",
        img: "/img/Resources/CryptoKitties - NFTs/Pawrula-243.png",
        date: "2022-03-30",
        title: "Design Illusions",
        seller_thumb: "/img/profile image 9.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "10",
        img: "/img/Resources/CryptoKitties - NFTs/SheilaPurren-1149.png",
        date: "2022-03-30",
        title: "Infinity",
        seller_thumb: "/img/profile image 10.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "11",
        img: "/img/Resources/CryptoKitties - NFTs/Vernor-76.png",
        date: "2022-01-24",
        title: "Sports",
        seller_thumb: "/img/profile image 11.jpg",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "12",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Bubba-Phish.png",
        date: "2022-03-30",
        title: "Characteristics",
        seller_thumb: "/img/profile image 12.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
   
]


class AuctionsThree extends Component {
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
            <section className="live-auctions-area pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="/auctions">{this.state.initData.btnText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="auctions-slides">
                        <div className="swiper-container slider-mid items">
                            <div className="swiper-wrapper">
                                {/* Single Slide */}
                                {this.state.data.map((item, idx) => {
                                    return (
                                        <div key={`auc_${idx}`} className="swiper-slide item">
                                            <div className="card">
                                                <div className="image-over">
                                                    <a href="/item-details">
                                                        <img className="card-img-top" src={item.img} alt="" />
                                                    </a>
                                                </div>
                                                {/* Card Caption */}
                                                <div className="card-caption col-12 p-0">
                                                    {/* Card Body */}
                                                    <div className="card-body">
                                                        <div className="countdown-times mb-3">
                                                            <div className="countdown d-flex justify-content-center" data-date={item.date} />
                                                        </div>
                                                        <a href="/item-details">
                                                            <h5 className="mb-0">{item.title}</h5>
                                                        </a>
                                                        <a className="seller d-flex align-items-center my-3" href="/item-details">
                                                            <img className="avatar-sm rounded-circle" src={item.seller_thumb} alt="" />
                                                            <span className="ml-2">{item.seller}</span>
                                                        </a>
                                                        <div className="card-bottom d-flex justify-content-between">
                                                            <span>{item.price}</span>
                                                            <span>{item.count}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AuctionsThree;