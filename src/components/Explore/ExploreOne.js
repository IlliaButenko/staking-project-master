import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const initData = {
    pre_heading: "Exclusive Assets",
    heading: "Explore",
    btn_1: "View All",
    btn_2: "Load More"
}

const data = [
    {
        id: "1",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-193969.png",
        title: "Walking On Air",
        owner: "Richard",
        price: "1.5 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "2",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Chee-Champion-Cheater.png",
        title: "Domain Names",
        owner: "John Deo",
        price: "2.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "3",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-239618.png",
        title: "Trading Cards",
        owner: "Arham",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "4",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-578874.png",
        title: "Industrial Revolution",
        owner: "Yasmin",
        price: "1.8 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "5",
        img: "/img/Resources/CryptoKitties - NFTs/Earnie-482.png",
        title: "Utility",
        owner: "Junaid",
        price: "1.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "6",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Bubba-Phish.png",
        title: "Sports",
        owner: "ArtNox",
        price: "1.9 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "7",
        img: "/img/Resources/Axie Infinity - NFTs/Jade Snowboard-1276.png",
        title: "Cartoon Heroes",
        owner: "Junaid",
        price: "3.2 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "8",
        img: "/img/Resources/Axie Infinity - NFTs/MakerDao Gold-5.png",
        title: "Gaming Chair",
        owner: "Johnson",
        price: "0.69 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "9",
        img: "/img/Resources/CryptoKitties - NFTs/KittyPride-1006.png",
        title: "Photography",
        owner: "Sara",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "10",
        img: "/img/Resources/Axie Infinity - NFTs/Statue of Caladbolg.png",
        title: "Zed Run",
        owner: "SpaceMan",
        price: "3.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "11",
        img: "/img/Resources/CryptoKitties - NFTs/Pawrula-243.png",
        title: "Rare Tyres",
        owner: "Monas",
        price: "2.2 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "12",
        img: "/img/Resources/CryptoKitties - NFTs/SHeilaPurren-1149.png",
        title: "World of Women",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "13",
        img: "/img/Resources/CryptoKitties - NFTs/Vernor-76.png",
        title: "Curiosity",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "14",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Geno-Genie.png",
        title: "Walking On Air",
        owner: "Richard",
        price: "1.5 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "15",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Puff-Flapper-Dragonster.png",
        title: "Domain Names",
        owner: "John Deo",
        price: "2.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "16",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Punk-Pup.png",
        title: "Trading Cards",
        owner: "Arham",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "17",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Reggae-Marley.png",
        title: "Industrial Revolution",
        owner: "Yasmin",
        price: "1.8 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "18",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Roosty-Dood.png",
        title: "Utility",
        owner: "Junaid",
        price: "1.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "19",
        img: "/img/Resources/Sandbox - NFTs/Airplane-Statue.png",
        title: "Sports",
        owner: "ArtNox",
        price: "1.9 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "20",
        img: "/img/Resources/Axie Infinity - NFTs/Jade Snowboard-1276.png",
        title: "Cartoon Heroes",
        owner: "Junaid",
        price: "3.2 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "21",
        img: "/img/Resources/Axie Infinity - NFTs/MakerDao Gold-5.png",
        title: "Gaming Chair",
        owner: "Johnson",
        price: "0.69 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "22",
        img: "/img/Resources/CryptoKitties - NFTs/KittyPride-1006.png",
        title: "Photography",
        owner: "Sara",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "23",
        img: "/img/Resources/Axie Infinity - NFTs/Statue of Caladbolg.png",
        title: "Zed Run",
        owner: "SpaceMan",
        price: "3.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "24",
        img: "/img/Resources/CryptoKitties - NFTs/Pawrula-243.png",
        title: "Rare Tyres",
        owner: "Monas",
        price: "2.2 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    }
    
    
]


class ExploreOne extends Component {
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
            <section className="explore-area load-more p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                                {/* <div className="intro-btn">
                                    <a className="btn content-btn" href="/explore-3">{this.state.initData.btn_1}</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`exo_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
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
                                            }>
                                
                                                    <img className="card-img-top" src={item.img} alt="" />
                                            </Link>                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
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
                                            }>
                                
                                                    <h5 className="mb-0">{item.title}</h5>

                                            </Link>    
                                                <div className="seller d-flex align-items-center my-3">
                                                    <span>Owned By</span>
                                                    <a href="#">
                                                        <h6 className="ml-2 mb-0">{item.owner}</h6>
                                                    </a>
                                                </div>
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>{item.price}</span>
                                                    <span>{item.count}</span>
                                                </div>
                                                {/* <a className="btn btn-bordered-white btn-smaller mt-3" href="/login"><i className="icon-handbag mr-2" />{item.btnText}</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">{this.state.initData.btn_2}</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExploreOne;