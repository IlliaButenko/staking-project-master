import React, { Component } from "react";
import axios from "axios";

// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

const data = {
  img: "/img/crypto.png",
  content:
    "The NFT Marketplace for all DeFi In-Game NFT assets like: items, rewards and characters.",
  widget_1: "Discover",
  // widget_2: "Community",
  widget_3: "Community",
};

const socialData = [
  {
    id: 1,
    link: "twitter",
    icon: "fab fa-twitter",
    goto: "https://twitter.com/CryptoLootTrade",
  },
  {
    id: 2,
    link: "telegram",
    icon: "fab fa-telegram",
    goto: "https://t.me/CryptoLoot_trade",
  },
  {
    id: 3,
    link: "google-plus",
    icon: "fab fa-google-plus-g",
  },
  // {
  //   id: 4,
  //   link: "vine",
  //   icon: "fab fa-vine"
  // }
];
const widgetData_1 = [
  {
    id: 1,
    text: "Token",
    goto: "https://bscscan.com/token/0x0d195f7c2fe988ba307e777fd5f2dfb5767bcde8",
    bool: true,
  },
  {
    id: 2,
    text: "Explore",
    goto: "/explore-2",
    bool: false,
  },
  {
    id: 3,
    text: "White Paper",
    goto: "https://drive.google.com/file/d/1N6hsi0FnzPKxbARJkNxVZy7laSRJ5pJy/view?usp=sharing",
    bool: true,
  },
  {
    id: 4,
    text: "Terms of Service",
    goto: "https://drive.google.com/file/d/1SAeEacUUpjfna8ZO3E2LnBz0tBV6wr-e/view?usp=sharing",
    bool: true,
  },
  //   {
  //     id: 5,
  //     text: "Privacy & Terms"
  //   }
];
const widgetData_2 = [
  {
    id: 1,
    text: "Help Center",
  },
  {
    id: 2,
    text: "Partners",
  },
  {
    id: 3,
    text: "Suggestions",
  },
  {
    id: 4,
    text: "Blog",
  },
  {
    id: 5,
    text: "Newsletter",
  },
];

class Footer extends Component {
  state = {
    data: {},
    socialData: [],
    widgetData_1: [],
    widgetData_2: [],
  };
  componentDidMount() {
    // axios.get(`${BASE_URL}`)
    //     .then(res => {
    //         this.setState({
    //             data: res.data,
    //             widgetData_1: res.data.widgetData_1,
    //             socialData: res.data.socialData,
    //             widgetData_2: res.data.widgetData_2,

    //         })
    //          console.log(this.state.data)
    //     })
    // .catch(err => console.log(err))
    this.setState({
      data: data,
      widgetData_1: widgetData_1,
      socialData: socialData,
      widgetData_2: widgetData_2,
    });
  }
  render() {
    return (
      <footer className="footer-area">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3 res-margin">
                {/* Footer Items */}
                <div className="footer-items">
                  {/* Logo */}
                  <a className="navbar-brand" href="/">
                    <img src={this.state.data.img} alt="" />
                  </a>
                  <p>{this.state.data.content}</p>
                  {/* Social Icons */}
                  {/* <div className="social-icons d-flex">
                                        {this.state.socialData.map((item, idx) => {
                                            return (
                                                <a key={`sd_${idx}`} className={item.link} href="#">
                                                    <i className={item.icon} />
                                                    <i className={item.icon} />
                                                </a>
                                            );
                                        })}
                                    </div> */}
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 res-margin">
                {/* Footer Items */}
                <div className="footer-items">
                  {/* Footer Title */}
                  <h4 className="footer-title">{this.state.data.widget_1}</h4>
                  <ul>
                    {this.state.widgetData_1.map((item, idx) => {
                      const isExplore = item.goto;
                      return (
                        <li key={`wdo_${idx}`}>
                          <a
                            href={item.goto}
                            target={item.bool ? "_blank" : ""}
                          >
                            {item.text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 res-margin">
                {/* Footer Items */}
                <div className="footer-items footer-hide">
                  {/* Footer Title */}
                  <h4 className="footer-title">{this.state.data.widget_2}</h4>
                  <ul>
                    {this.state.widgetData_2.map((item, idx) => {
                      return (
                        <li key={`wdo_${idx}`}>
                          <a>{item.text}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                {/* Footer Items */}
                <div className="footer-items">
                  {/* Footer Title */}
                  <h4 className="footer-title footer-center">
                    {this.state.data.widget_3}
                  </h4>
                  {/* Subscribe Form */}
                  {/* <div className="subscribe-form d-flex align-items-center">
                                        <input type="email" className="form-control" placeholder="info@yourmail.com" />
                                        <button type="submit" className="btn"><i className="icon-paper-plane" /></button>
                                    </div> */}
                  {/* Social Icons */}
                  <div className="social-icons d-flex">
                    {this.state.socialData.map((item, idx) => {
                      return (
                        <a
                          key={`sd_${idx}`}
                          className={item.link}
                          target="_blank"
                          href={item.goto}
                        >
                          <i className={item.icon} />
                          <i className={item.icon} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Copyright Area */}
                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                  {/* Copyright Left */}
                  <div className="copyright-left">
                    ©2021 CryptoLoot, All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
