import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper";
import { isMobile } from "react-device-detect";

// // import 'swiper/swipper.scss';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.scss';

// // SwiperCore.use(Navigation,Pagination,Scrollbar,A11y);

const initData = {
  pre_heading: "Explore",
  heading: "Browse by Game",
  btnText: "View All",
};

const data = [
  {
    id: "1",
    img: "/img/Resources/CryptoKitties - NFTs/Earnie-482.png",
    title: "Earnie-482",
    seller_thumb: "/img/profile image 7.jpg",
    seller: "@ArtNox",
    price: "1.7 BNB",
    count: "1 of 1",
  },
  {
    id: "2",
    img: "/img/Resources/MOBOX - NFTs/NFTs/Chee-Champion-Cheater.png",
    title: "Champ Cheater",
    seller_thumb: "/img/profile image 2.jpg",
    seller: "@JohnDeo",
    price: "2.7 BNB",
    count: "1 of 1",
  },
  {
    id: "3",
    img: "/img/Resources/Axie Infinity - NFTs/Axie-578874.png",
    title: "Axie-578874",
    seller_thumb: "/img/profile image 3.png",
    seller: "@MKHblots",
    price: "2.3 BNB",
    count: "1 of 1",
  },
  {
    id: "4",
    img: "/img/Resources/Sandbox - NFTs/Monitor-Sidekick.png",
    title: "Mon Sidekick",
    seller_thumb: "/img/profile image 4.png",
    seller: "@RioArham",
    price: "1.8 BNB",
    count: "1 of 1",
  },
];

function ExploreFive() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [btnStyle, setBtnClass] = useState("btn1 ");
  const [loadBtn, setBtnId] = useState("load-btn");
  const nextSlides = () => {
    if (data.length > endIndex) {
      setStartIndex(endIndex);
      setEndIndex(endIndex + 1);
    }
  };
  const prevSlides = () => {
    if (0 < startIndex) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };
  const slice = data.slice(startIndex, endIndex);
  useEffect(() => {
    if (isMobile) {
      setEndIndex(1);
    } else {
      setEndIndex(4);
    }
  }, []);
  return (
    <section className="live-auctions-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-end m-0">
              <div className="intro-content">
                <span>{initData.pre_heading}</span>
                <h3 className="mt-3 mb-0">{initData.heading}</h3>
              </div>
              <div className="intro-btn">
                <a className="btn content-btn" href="/explore-2">
                  {initData.btnText}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row items my-margin">
          {slice.map((item, idx) => {
            return (
              <div
                key={`auct_${idx}`}
                className="col-12 col-sm-6 col-lg-3 item"
              >
                <div className="card ">
                  <div className="image-over">
                    {/* <a href="/item-details">
                                                            
                                                        </a> */}
                    <Link
                      to={{
                        pathname: "/item-details",
                        state: {
                          imgSend: item.img,
                          itemTitle: item.title,
                          itemOwner: item.owner,
                          itemPrice: item.price,
                          itemCount: item.count,
                        },
                      }}
                    >
                      <img className="card-img-top" src={item.img} alt="" />
                    </Link>
                  </div>
                  {/* Card Caption */}
                  <div className="card-caption col-12 p-0">
                    {/* Card Body */}
                    <div className="card-body">
                      {/* <a href="/item-details">
                                                                <h5 className="mb-0">{item.title}</h5>
                                                            </a> */}
                      <Link
                        to={{
                          pathname: "/item-details",
                          state: {
                            imgSend: item.img,
                            itemTitle: item.title,
                            itemOwner: item.owner,
                            itemPrice: item.price,
                            itemCount: item.count,
                          },
                        }}
                      >
                        <h5 className="mb-0" style={{ fontSize: "15px" }}>
                          {item.title}
                        </h5>
                      </Link>
                      <a className="seller d-flex align-items-center my-3">
                        <img
                          className="avatar-sm rounded-circle"
                          src={item.seller_thumb}
                          alt=""
                        />
                        <span className="ml-1" style={{ fontSize: "12px" }}>
                          {item.seller}
                        </span>
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
        {isMobile ? (
          <div className="row btMargin">
            <div className={"col-12 text-center"}>
              <a id={loadBtn} className=" " onClick={prevSlides}>
                <img
                  src="/img/a1.png"
                  style={{ marginRight: "25px", marginTop: "50px" }}
                  alt=""
                />
              </a>
              <a className="" onClick={nextSlides}>
                <img
                  src="/img/a2.png"
                  style={{ marginLeft: "25px", marginTop: "50px" }}
                  alt=""
                />
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default ExploreFive;
