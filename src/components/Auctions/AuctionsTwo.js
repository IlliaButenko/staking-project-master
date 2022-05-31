import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';


const initData = {
    pre_heading: "MARKETPLACE",
    heading: "Live Auctions",
    content: "",
    btnText: "Load More"
}

const data = [
    {
        id: "1",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-193969.png",
        date: "2021-12-09",
        title: "Axie-193969",
        seller_thumb: "/img/profile image 1.jpg",
        seller: "@Richard",
        price: "1.5 BNB",
        count: "1 of 1"
    },
    {
        id: "2",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-239618.png",
        date: "2022-10-05",
        title: "Axie-239618",
        seller_thumb: "/img/profile image 2.jpg",
        seller: "@JohnDeo",
        price: "2.7 BNB",
        count: "1 of 1"
    },
    {
        id: "3",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-578874.png",
        date: "2022-09-15",
        title: "Axie-578874",
        seller_thumb: "/img/profile image 3.png",
        seller: "@MKHblots",
        price: "2.3 BNB",
        count: "1 of 1"
    },
    {
        id: "4",
        img: "/img/Resources/Axie Infinity - NFTs/Jade Snowboard-1276.png",
        date: "2021-12-29",
        title: "J.Snowboard",
        seller_thumb: "/img/profile image 4.png",
        seller: "@RioArham",
        price: "1.8 BNB",
        count: "1 of 1"
    },
    {
        id: "5",
        img: "/img/Resources/Axie Infinity - NFTs/MakerDao Gold-5.png",
        date: "2022-01-24",
        title: "MakerDao Gold",
        seller_thumb: "/img/profile image 5.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "6",
        img: "/img/Resources/Axie Infinity - NFTs/Statue of Caladbolg.png",
        date: "2022-03-30",
        title: "Caladbolg",
        seller_thumb: "/img/profile image 6.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "7",
        img: "/img/Resources/CryptoKitties - NFTs/Earnie-482.png",
        date: "2022-01-24",
        title: "Earnie-482",
        seller_thumb: "/img/profile image 7.jpg",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "8",
        img: "/img/Resources/CryptoKitties - NFTs/KittyPride-1006.png",
        date: "2022-03-30",
        title: "Kitty Pride",
        seller_thumb: "/img/profile image 8.jpg",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "9",
        img: "/img/Resources/CryptoKitties - NFTs/Pawrula-243.png",
        date: "2022-03-30",
        title: "Pawrula-243",
        seller_thumb: "/img/profile image 9.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "10",
        img: "/img/Resources/CryptoKitties - NFTs/SheilaPurren-1149.png",
        date: "2022-03-30",
        title: "SheilaPurren-1149",
        seller_thumb: "/img/profile image 10.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "11",
        img: "/img/Resources/CryptoKitties - NFTs/Vernor-76.png",
        date: "2022-01-24",
        title: "Vernor-76",
        seller_thumb: "/img/profile image 11.jpg",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "12",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Bubba-Phish.png",
        date: "2022-03-30",
        title: "Bubba-Phish",
        seller_thumb: "/img/profile image 12.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    },
    {
        id: "13",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Bubba-Phish.png",
        date: "2022-03-30",
        title: "Bubba-Phish",
        seller_thumb: "/img/profile image 12.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1"
    }

   
]


function AuctionsTwo () {
    const fadeOut = "fade-out btn btn-bordered-white mt-5";  
    const hideBtn = "hide-button";
    const [btnStyle, setBtnClass] = useState("btn btn-bordered-white mt-5");
    const [loadBtn, setBtnId] = useState("load-btn");
    const [noOfElement, setElements] = useState(12);
    const loadMore = () => {
        setElements(noOfElement + 4);
        if(slice.length === data.length){
            setBtnId(fadeOut);
            setBtnClass(fadeOut);
            setTimeout(function() {
                setBtnClass(hideBtn);
            }
            , 500);
        }
    }
    const slice = data.slice(0, noOfElement);
        return (
            <section className="live-auctions-area load-more">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{initData.heading}</h3>
                                {/* <h3 className="mt-3 mb-0">{this.handleLoadMore}</h3> */}

                                <p>{initData.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                    {slice.map((item, idx) => {
                            return (
                                <div key={`auct_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            {/* <a href="/item-details">
                                                
                                            </a> */}
                                            <Link to={
                                                {
                                                    pathname:'/item-details',
                                                    state: {
                                                        imgSend: item.img,
                                                        itemTitle: item.title, 
                                                        itemOwner: item.owner, 
                                                        itemPrice: item.price, 
                                                        itemCount: item.count 
                                                    }
                                                }
                                            }><img className="card-img-top" src={item.img} alt="" /></Link>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                {/* <div className="countdown-times mb-3">
                                                    <div className="countdown d-flex justify-content-center" data-date={item.date} />
                                                </div> */}
                                                {/* <a href="/item-details">
                                                    <h5 className="mb-0">{item.title}</h5>
                                                </a> */}
                                                <Link to={
                                                {
                                                    pathname:'/item-details',
                                                    state: {
                                                        imgSend: item.img,
                                                        itemTitle: item.title, 
                                                        itemOwner: item.owner, 
                                                        itemPrice: item.price, 
                                                        itemCount: item.count 
                                                    }
                                                }
                                            }><h5 className="mb-0">{item.title}</h5></Link>
                                                <a className="seller d-flex align-items-center my-3">
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
                    <div className="row">
                        <div className={"col-12 text-center"}>
                            <button id={loadBtn} 
                                className={btnStyle}
                                onClick={loadMore}>
                                {initData.btnText}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }


export default AuctionsTwo;