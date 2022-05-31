import React from "react";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { isMobile } from "react-device-detect";

function Header() {
  const ethereum = window.ethereum;
  const [provider, setProvider] = useState("undefined");
  const [defautAccount, setDefaultAccount] = useState(null);
  const myStyle = {
    color: "white",
    marginLeft: "30px",
    marginBottom: "15px",
    fontSize: "20px",
  };
  const [addr, setAddr] = useState("Wallet Connect");
  const [isClicked, setClicked] = useState(false);

  const getAddress = async () => {
    const handleEthereum = async () => {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        console.log("Ethereum successfully detected!");
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAddr(
            accounts[0].substr(0, 6) +
              "..." +
              accounts[0].substr(accounts[0].length - 4)
          );
          setClicked(true);
          setProvider(await detectEthereumProvider());
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("Please install MetaMask!");
      }
    };
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 3000); // 3 seconds
    }
  };

  const getMobAddress = async () => {
    const handleEthereum = async () => {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddr(
          accounts[0].substr(0, 6) +
            "..." +
            accounts[0].substr(accounts[0].length - 4)
        );
        setClicked(true);
        setProvider(await detectEthereumProvider());
      } catch (error) {
        console.error(error);
      }
    };
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.open("https://metamask.app.link/dapp/cryptoloot.trade");
    }
  };

  if (provider !== "undefined") {
    ethereum.on("accountsChanged", function (accounts) {
      setAddr(
        accounts[0].substr(0, 6) +
          "..." +
          accounts[0].substr(accounts[0].length - 4)
      );
    });
  }

  return (
    <header id="header">
      {/* Navbar */}
      <nav
        data-aos="zoom-out"
        data-aos-delay={800}
        style={{ background: "#121117" }}
        className="navbar navbar-expand"
      >
        <div className="container header">
          {/* Navbar Brand*/}
          <a href="/" className="navbar-brand">
            <img
              className="navbar-brand-sticky"
              src="img/crypto.png"
              alt="sticky brand-logo"
            />
          </a>
          <div className="ml-auto" />
          {/* Navbar */}
          <ul className="navbar-nav items mx-auto">
            <li className="nav-item dropdown">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/auctions" className="nav-link">
                Marketplace
              </a>
            </li>
            <li className="nav-item">
              <a href="/explore-2" className="nav-link">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a href="/activity" className="nav-link">
                Activity
              </a>
            </li>
          </ul>
          {/* Navbar Icons */}
          <ul className="navbar-nav icons">
            <li className="nav-item">
              <a className="nav-link" data-toggle="modal" data-target="#search">
                <i className="fas fa-search" />
              </a>
            </li>
          </ul>
          {/* Navbar Toggler */}
          <ul className="navbar-nav toggle">
            <li className="nav-item">
              <a className="nav-link" data-toggle="modal" data-target="#menu">
                <i className="fas fa-bars toggle-icon m-0" />
              </a>
            </li>
          </ul>
          {/* Navbar Action Button */}

          {isClicked ? (
            <p style={myStyle}>{addr}</p>
          ) : (
            <ul className="navbar-nav action">
              <li className="nav-item ml-3">
                {!isMobile ? (
                  <button
                    onClick={getAddress}
                    className="btn ml-lg-auto btn-bordered-white"
                  >
                    <i className="icon-wallet mr-md-2" />
                    {addr}
                  </button>
                ) : (
                  <a
                    onClick={getMobAddress}
                    className="btn ml-lg-auto btn-bordered-white"
                  >
                    <i className="icon-wallet mr-md-2" />
                    {addr}
                  </a>
                )}
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
