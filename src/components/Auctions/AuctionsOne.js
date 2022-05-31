import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { isMobile } from "react-device-detect";
import Timer from '../Timer/timer';



const initData = {
    pre_heading: "MARKETPLACE",
    heading: "Live Auctions",
    btnText1: "Next",
    btnText: "Prev",
    viewALL: "View All"
}

const data = [
    {
        id: "1",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-193969.png",
        date: "2021-10-21",
        title: "Axie-193969",
        seller_thumb: "/img/profile image 1.jpg",
        seller: "@Richard",
        price: "1.5 BNB",
        count: "1 of 1",
        hours: 10,
        minutes: 15,
        seconds: 30
    },
    {
        id: "2",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-239618.png",
        date: "2021-10-23",
        title: "Axie-239618",
        seller_thumb: "/img/profile image 2.jpg",
        seller: "@JohnDeo",
        price: "2.7 BNB",
        count: "1 of 1",
        hours: 12,
        minutes: 23,
        seconds: 34
    },
    {
        id: "3",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-578874.png",
        date: "2021-10-22",
        title: "Axie-578874",
        seller_thumb: "/img/profile image 3.png",
        seller: "@MKHblots",
        price: "2.3 BNB",
        count: "1 of 1",
        hours: 11,
        minutes: 9,
        seconds: 23
    },
    {
        id: "4",
        img: "/img/Resources/Axie Infinity - NFTs/Jade Snowboard-1276.png",
        date: "2021-10-27",
        title: "J.Snowboard",
        seller_thumb: "/img/profile image 4.png",
        seller: "@RioArham",
        price: "1.8 BNB",
        count: "1 of 1",
        hours: 5,
        minutes: 20,
        seconds: 30
    },
    {
        id: "5",
        img: "/img/Resources/Axie Infinity - NFTs/MakerDao Gold-5.png",
        date: "2021-10-22",
        title: "MakerDao Gold",
        seller_thumb: "/img/profile image 5.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1",
        hours: 8,
        minutes: 18,
        seconds: 9
    },
    {
        id: "6",
        img: "/img/Resources/Axie Infinity - NFTs/Statue of Caladbolg.png",
        date: "2021-10-21",
        title: "Caladbolg",
        seller_thumb: "/img/profile image 6.png",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1",
        hours: 2,
        minutes: 34,
        seconds: 55
    },
    {
        id: "7",
        img: "/img/Resources/CryptoKitties - NFTs/Earnie-482.png",
        date: "2021-10-23",
        title: "Earnie-482",
        seller_thumb: "/img/profile image 7.jpg",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1",
        hours: 7,
        minutes: 6,
        seconds: 54
    },
    {
        id: "8",
        img: "/img/Resources/CryptoKitties - NFTs/KittyPride-1006.png",
        date: "2021-10-24",
        title: "Kitty Pride",
        seller_thumb: "/img/profile image 8.jpg",
        seller: "@ArtNox",
        price: "1.7 BNB",
        count: "1 of 1",
        hours: 9,
        minutes: 33,
        seconds: 44
    }
    
  
]


function AuctionsTwo () {

    const [btnStyle, setBtnClass] = useState("btn1 ");
    const [loadBtn, setBtnId] = useState("load-btn");
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);

    const nextSlides = () => {
        
        if(isMobile){
            if(data.length > endIndex){
                setStartIndex(endIndex );
                setEndIndex(endIndex + 1);
            }
        }
        else {
            if(data.length > endIndex){
                setStartIndex(endIndex );
                setEndIndex(endIndex + 6);
            }
        }
        
    }
    const prevSlides = () => {
        
        if(isMobile) {
            if(0 < startIndex){
                setStartIndex(startIndex-1);
                setEndIndex(endIndex-1);
            }
        }else {
            if(0 < startIndex){
                setStartIndex(startIndex-6);
                setEndIndex(endIndex-6);
            }
        }
    }
    const slice = data.slice(startIndex, endIndex);
    useEffect(() => {
        if(isMobile) {
            setEndIndex(1);
        }
        else{
            setEndIndex(6);
        }
      }, [])
        return (
            <section className="live-auctions-area load-more">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}

                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0" >{ initData.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="/auctions">{ initData.viewALL}</a>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                    {slice.map((item, idx) => {
                            return (
                                <div key={`auct_${idx}`} className="col-12 col-sm-6 col-lg-2 item">
                                    <div className="card ">
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
                                                <div className="countdown-times mb-3">
                                                    <div><Timer cdHrs ={item.hours} /></div>

                                                </div>
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
                                            }><h5 className="mb-0" style={{fontSize:'15px'}}>{item.title}</h5></Link>
                                                <a className="seller d-flex align-items-center my-3">
                                                    <img className="avatar-sm rounded-circle" src={item.seller_thumb} alt="" />
                                                    <span className="ml-1" style={{fontSize:'12px'}}>{item.seller}</span>
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
                            <a id={loadBtn} 
                                className=""
                                onClick={prevSlides}
                                >
                                   <img src="/img/a1.png" style={{marginRight:'25px', marginTop:'50px'}} alt="" />
                            </a>
                            <a id={loadBtn} 
                                className=""
                                onClick={nextSlides}
                                >
                                   <img src="/img/a2.png" style={{marginLeft:'25px',marginTop:'50px'}} alt="" />
                            </a>
                           
                        </div>
                    </div>
                </div>
            </section>
        );
    }


export default AuctionsTwo;