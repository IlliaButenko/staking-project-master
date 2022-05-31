import React, { Component } from 'react';
import axios from 'axios';

// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/collections";
const data = {
    preHeading: "Most Popular",
    heading: "Popular Collections",
    btnText: "Explore More"
}

const data1 = [
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


    const collectionData = [
      {
        id: 1,
        img: "/img/author_1.jpg",
        avatar: "/img/avatar_1.jpg",
        title: "s Worlds",
        content: "ERC-729"
      },
      {
        id: 2,
        img: "/img/author_2.jpg",
        avatar: "/img/avatar_2.jpg",
        title: "Digital Arts",
        content: "ERC-522"
      },
      {
        id: 3,
        img: "/img/author_3.jpg",
        avatar: "/img/avatar_3.jpg",
        title: "Sports",
        content: "ERC-495"
      },
      {
        id: 4,
        img: "/img/author_4.jpg",
        avatar: "/img/avatar_4.jpg",
        title: "Photography",
        content: "ERC-873"
      },
      {
        id: 5,
        img: "/img/author_5.jpg",
        avatar: "/img/avatar_5.jpg",
        title: "Trading Cards",
        content: "ERC-397"
      },
      {
        id: 6,
        img: "/img/author_6.jpg",
        avatar: "/img/avatar_6.jpg",
        title: "Walking On Air",
        content: "ERC-403"
      },
      {
        id: 7,
        img: "/img/author_7.jpg",
        avatar: "/img/avatar_7.jpg",
        title: "Domain Names",
        content: "ERC-687"
      },
      {
        id: 8,
        img: "/img/author_8.jpg",
        avatar: "/img/avatar_8.jpg",
        title: "Collectibles",
        content: "ERC-972"
      }
    ]

class Collections extends Component {
    state = {
        data: {},
        collectionData: []
    }
    componentDidMount(){
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //             collectionData: res.data.collectionData
        //         })
        //         // console.log(this.state.data)
        //     })
        // .catch(err => console.log(err))

        this.setState({
            data: data,
            collectionData: collectionData
        })
    }
    render() {
        return (
            <section className="popular-collections-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.data.preHeading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn text-left" href="/explore-2">{this.state.data.btnText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.collectionData.map((item, idx) => {
                            return (
                                <div key={`cd_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card no-hover text-center">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                            {/* Seller */}
                                            <a className="seller" href="/item-details">
                                                <div className="seller-thumb avatar-lg">
                                                    <img className="rounded-circle" src={item.avatar} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body mt-4">
                                                <a href="/item-details">
                                                    <h5 className="mb-2">{item.title}</h5>
                                                </a>
                                                <span>{item.content}</span>
                                            </div>
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

export default Collections;