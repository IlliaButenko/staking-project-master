import React, { Component,useState } from 'react';
import { Link } from 'react-router-dom';



const initData = {
    pre_heading: "Explore",
    heading: "Browse by Game",
    content: "",
    filter_1: "All",
    filter_2: "Axie Infinity",
    filter_3: "CryptoKitties",
    filter_4: "Sandbox",
    filter_5: "MOBOX",
    btnText: "Load More"
}

const dataAxie = [
    {
        id: "1",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-193969.png",
        group: '["axie"]',
        title: "Axie-193969",
        owner: "Richard",
        price: "1.5  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "2",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-239618.png",
        group: '["axie"]',
        title: "Axie-239618",
        owner: "Arham",
        price: "2.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "3",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-578874.png",
        group: '["axie"]',
        title: "Axie-578874",
        owner: "Yasmin",
        price: "1.8  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "4",
        img: "/img/Resources/Axie Infinity - NFTs/Jade Snowboard-1276.png",
        group: '["axie"]',
        title: "J.Snowboard",
        owner: "Junaid",
        price: "3.2  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "5",
        img: "/img/Resources/Axie Infinity - NFTs/MakerDao Gold-5.png",
        group: '["axie"]',
        title: "MakerDao Gold",
        owner: "Johnson",
        price: "0.69  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "6",
        img: "/img/Resources/Axie Infinity - NFTs/Statue of Caladbolg.png",
        group: '["axie"]',
        title: "Caladbolg",
        owner: "SpaceMan",
        price: "3.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    }

]


const dataKitties = [
    {
        id: "1",
        img: "/img/Resources/CryptoKitties - NFTs/KittyPride-1006.png",
        group: '["cryptoKitties"]',
        title: "Kitty Pride",
        owner: "Sara",
        price: "2.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "2",
        img: "/img/Resources/CryptoKitties - NFTs/SheilaPurren-1149.png",
        group: '["cryptoKitties"]',
        title: "Sheila Purren",
        owner: "Victor",
        price: "4.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "3",
        img: "/img/Resources/CryptoKitties - NFTs/Vernor-76.png",
        group: '["cryptoKitties"]',
        title: "Vernor-76",
        owner: "Victor",
        price: "4.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "4",
        img: "/img/Resources/CryptoKitties - NFTs/Pawrula-243.png",
        group: '["cryptoKitties"]',
        title: "Pawrula-243",
        owner: "Monas",
        price: "2.2  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "5",
        img: "/img/Resources/CryptoKitties - NFTs/Earnie-482.png",
        group: '["cryptoKitties"]',
        title: "Earnie-482",
        owner: "Junaid",
        price: "1.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    }
    

]

const dataMobox = [
    {
        id: "1",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Chee-Champion-Cheater.png",
        group: '["mobox"]',
        title: "Champion Cheater",
        owner: "John Deo",
        price: "2.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "2",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Bubba-Phish.png",
        group: '["mobox"]',
        title: "Bubba Phish",
        owner: "ArtNox",
        price: "1.9  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "3",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Geno-Genie.png",
        group: '["mobox"]',
        title: "Geno Genie",
        owner: "Richard",
        price: "1.5  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "4",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Puff-Flapper-Dragonster.png",
        group: '["mobox"]',
        title: "Puff Flapper",
        owner: "John Deo",
        price: "2.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "5",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Punk-Pup.png",
        group: '["mobox"]',
        title: "Punk Pup",
        owner: "Arham",
        price: "2.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "6",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Reggae-Marley.png",
        group: '["mobox"]',
        title: "Reggae Marley",
        owner: "Yasmin",
        price: "1.8  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "7",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Roosty-Dood.png",
        group: '["mobox"]',
        title: "Roosty Dood",
        owner: "Junaid",
        price: "1.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    }
]

const dataSandbox = [
    {
        id: "1",
        img: "/img/Resources/Sandbox - NFTs/Airplane-Statue.png",
        group: '["sandbox"]',
        title: "Airplane Statue",
        owner: "ArtNox",
        price: "1.9  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "2",
        img: "/img/Resources/Sandbox - NFTs/Ancient-Magic-Statue.png",
        group: '["sandbox"]',
        title: "Ancient Magic",
        owner: "Junaid",
        price: "3.2  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "3",
        img: "/img/Resources/Sandbox - NFTs/Fashon-Mogul-Man.png",
        group: '["sandbox"]',
        title: "Fashon Mogul",
        owner: "Johnson",
        price: "0.69  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "4",
        img: "/img/Resources/Sandbox - NFTs/Monitor-Sidekick.png",
        group: '["sandbox"]',
        title: "Monitor Sidekick",
        owner: "Sara",
        price: "2.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "5",
        img: "/img/Resources/Sandbox - NFTs/Summer-Dj-Set.png",        
        group: '["sandbox"]',
        title: "Summer Dj",
        owner: "SpaceMan",
        price: "3.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    }, {
        id: "6",
        img: "/img/Resources/Sandbox - NFTs/Robot-Incubator.png",        
        group: '["sandbox"]',
        title: "Robot Incubator",
        owner: "SpaceMan",
        price: "3.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    }
]

const data = [
    {
        id: "1",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-193969.png",
        group: '["axie"]',
        title: "Axie-193969",
        owner: "Richard",
        price: "1.5  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "2",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Chee-Champion-Cheater.png",
        group: '["mobox"]',
        title: "Champion Cheater",
        owner: "John Deo",
        price: "2.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "3",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-239618.png",
        group: '["axie"]',
        title: "Axie-239618",
        owner: "Arham",
        price: "2.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "4",
        img: "/img/Resources/Axie Infinity - NFTs/Axie-578874.png",
        group: '["axie"]',
        title: "Axie-578874",
        owner: "Yasmin",
        price: "1.8  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "5",
        img: "/img/Resources/CryptoKitties - NFTs/Earnie-482.png",
        group: '["cryptoKitties"]',
        title: "Earnie-482",
        owner: "Junaid",
        price: "1.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "6",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Bubba-Phish.png",
        group: '["mobox"]',
        title: "Bubba Phish",
        owner: "ArtNox",
        price: "1.9  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "7",
        img: "/img/Resources/Axie Infinity - NFTs/Jade Snowboard-1276.png",
        group: '["axie"]',
        title: "J.Snowboard",
        owner: "Junaid",
        price: "3.2  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "8",
        img: "/img/Resources/Axie Infinity - NFTs/MakerDao Gold-5.png",
        group: '["axie"]',
        title: "MakerDao Gold",
        owner: "Johnson",
        price: "0.69  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "9",
        img: "/img/Resources/CryptoKitties - NFTs/KittyPride-1006.png",
        group: '["cryptoKitties"]',
        title: "Kitty Pride",
        owner: "Sara",
        price: "2.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "10",
        img: "/img/Resources/Axie Infinity - NFTs/Statue of Caladbolg.png",
        group: '["axie"]',
        title: "Caladbolg",
        owner: "SpaceMan",
        price: "3.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "11",
        img: "/img/Resources/CryptoKitties - NFTs/Pawrula-243.png",
        group: '["cryptoKitties"]',
        title: "Pawrula-243",
        owner: "Monas",
        price: "2.2  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "12",
        img: "/img/Resources/CryptoKitties - NFTs/SheilaPurren-1149.png",
        group: '["cryptoKitties"]',
        title: "Sheila Purren",
        owner: "Victor",
        price: "4.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "13",
        img: "/img/Resources/CryptoKitties - NFTs/Vernor-76.png",
        group: '["cryptoKitties"]',
        title: "Vernor-76",
        owner: "Victor",
        price: "4.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "14",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Geno-Genie.png",
        group: '["mobox"]',
        title: "Geno Genie",
        owner: "Richard",
        price: "1.5  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "15",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Puff-Flapper-Dragonster.png",
        group: '["mobox"]',
        title: "Puff Flapper",
        owner: "John Deo",
        price: "2.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "16",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Punk-Pup.png",
        group: '["mobox"]',
        title: "Punk Pup",
        owner: "Arham",
        price: "2.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "17",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Reggae-Marley.png",
        group: '["mobox"]',
        title: "Reggae Marley",
        owner: "Yasmin",
        price: "1.8  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "18",
        img: "/img/Resources/MOBOX - NFTs/NFTs/Roosty-Dood.png",
        group: '["mobox"]',
        title: "Roosty Dood",
        owner: "Junaid",
        price: "1.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "19",
        img: "/img/Resources/Sandbox - NFTs/Airplane-Statue.png",
        group: '["sandbox"]',
        title: "Airplane Statue",
        owner: "ArtNox",
        price: "1.9  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "20",
        img: "/img/Resources/Sandbox - NFTs/Ancient-Magic-Statue.png",
        group: '["sandbox"]',
        title: "Ancient Magic",
        owner: "Junaid",
        price: "3.2  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "21",
        img: "/img/Resources/Sandbox - NFTs/Fashon-Mogul-Man.png",
        group: '["sandbox"]',
        title: "Fashon Mogul",
        owner: "Johnson",
        price: "0.69  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "22",
        img: "/img/Resources/Sandbox - NFTs/Monitor-Sidekick.png",
        group: '["sandbox"]',
        title: "Monitor Sidekick",
        owner: "Sara",
        price: "2.3  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "23",
        img: "/img/Resources/Sandbox - NFTs/Summer-Dj-Set.png",        
        group: '["sandbox"]',
        title: "Summer Dj",
        owner: "SpaceMan",
        price: "3.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "24",
        img: "/img/Resources/Sandbox - NFTs/Robot-Incubator.png",        
        group: '["sandbox"]',
        title: "Robot Incubator",
        owner: "SpaceMan",
        price: "3.7  BNB",
        count: "1 of 1",
        btnText: "Place a Bid"
    }
    
    
    
    
]





function ExploreThere(){
    
    // state = {
    //     initData: {},
    //     data: []
    // }
    const [displayData, setData] = useState(data);

    const [isClicked1, setClicked1] = useState(false);
    const [isClicked2, setClicked2] = useState(false);
    const [isClicked3, setClicked3] = useState(false);
    const [isClicked4, setClicked4] = useState(false);
    const [isClicked5, setClicked5] = useState(false);


    const changeAll = () => {
        setData(data); 
        setClicked1(true);  
        setClicked2(false); 
        setClicked3(false); 
        setClicked4(false); 
        setClicked5(false); 

    }

    const changeAxieData = () => {
        setData(dataAxie);
        setClicked1(false);  
        setClicked2(true); 
        setClicked3(false); 
        setClicked4(false); 
        setClicked5(false); 
    }

    const changeKittiesData = () => {
        setData(dataKitties);
        setClicked1(false);  
        setClicked2(false); 
        setClicked3(true); 
        setClicked4(false); 
        setClicked5(false);  
    }

    const changeMoboxData = () => {
        setData(dataMobox);
        setClicked1(false);  
        setClicked2(false); 
        setClicked3(false); 
        setClicked4(false); 
        setClicked5(true); 
    }

    const changeSandboxData = () => {
        setData(dataSandbox);
        setClicked1(false);  
        setClicked2(false); 
        setClicked3(false); 
        setClicked4(true); 
        setClicked5(false); 
    }


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
    const slice = displayData.slice(0, noOfElement);
        return (
            <section className="explore-area">
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center mb-4">
                                <span>{ initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{ initData.heading}</h3>
                                <p>{ initData.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            {/* Explore Menu */}
                            <div className="explore-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-4" data-toggle="buttons">
                                <label className=" active  d-table text-uppercase p-2">
                                    <button className={isClicked1 ? "btn-style1": "btn-style"} onClick={changeAll}>{initData.filter_1}</button>

                                    {/* <input type="radio"  defaultValue= "all" defaultChecked className="explore-btn" />
                                    <span>{initData.filter_1}</span> */}
                                </label>
                                <label className=" d-table text-uppercase p-2">
                                    <button className={isClicked2 ? "btn-style1": "btn-style"} onClick={changeAxieData}>{initData.filter_2}</button>
                                    {/* <input type="radio" onClick={changeData} defaultValue= "axie" className="explore-btn" />
                                    <span>{initData.filter_2}</span> */}
                                </label>
                                <label className=" d-table text-uppercase p-2">
                                <button className={isClicked3 ? "btn-style1": "btn-style"} onClick={changeKittiesData}>{initData.filter_3}</button>
                                    {/* <input type="radio" defaultValue="cryptoKitties" className="explore-btn" />
                                    <span>{initData.filter_3}</span> */}
                                </label>
                                <label className=" d-table text-uppercase p-2">
                                    <button className={isClicked4 ? "btn-style1": "btn-style"} onClick={changeSandboxData}>{initData.filter_4}</button>                                   
                                    {/* <input type="radio" defaultValue="sandbox" className="explore-btn" />
                                    <span>{initData.filter_4}</span> */}
                                </label>
                                <label className=" d-table text-uppercase p-2">
                                    <button className={isClicked5 ? "btn-style1": "btn-style"} onClick={changeMoboxData}>{initData.filter_5}</button>
                                    {/* 
                                    <input type="radio" defaultValue="mobox" className="explore-btn" />
                                    <span>{initData.filter_5}</span> */}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row items explore-items ">
                        {slice.map((item, idx) => {

                            return (
                                <div key={`edth_${idx}`} className="col-12 col-sm-6 col-lg-3 explore-item item" data-groups={item.group}>
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
                                            </Link> 
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0 ">
                                            {/* Card Body */}
                                            <div className="card-body">
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
                                                }>
                                                    <h5 className="mb-0">{item.title}</h5>
                                                </Link>    


                                                <div className="seller d-flex align-items-center my-3">
                                                    <span>Owned By</span>
                                                    <a >
                                                        <h6 className="ml-2 mb-0">{item.owner}</h6>
                                                    </a>
                                                </div>
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>{item.price}</span>
                                                    <span>{item.count}</span>
                                                </div>
                                                {/* <a className="btn btn-bordered-white btn-smaller mt-3" href="/wallet-connect"><i className="icon-handbag mr-2" />{item.btnText}</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
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
// }

export default ExploreThere;