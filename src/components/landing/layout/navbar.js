import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import styled from 'styled-components';
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import Union from '../../../asserts/Union.png';
import Telegram from '../../../asserts/Telegram.png';
import Twitter from '../../../asserts/Twitter.png';
import Button from '../product/Button';
import Content from '../content/Content';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1100px) {
    .logo {
      left: 0px;
      top: 20px;
      position: absolute;
    }
    z-index: 9999;
  }
  @media screen and (max-width: 735px) {
    .logo {
      left: 0px;
      top: 13px;
      position: absolute;
    }
    & {
      width: 90% !important;
    }
  }
  img {
    cursor: pointer;
  }

  @media screen and (max-width: 735px) {
    flex-direction: column;
  }
`;
export const MenuContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0 !important;
  right: 0 !important;
  position: relative;
  align-items: center;
  width: 300px;
  font-size: 30px !important;
  .icon-light-style-com {
    font-size: 30px !important;
    color: white !important;
    position: absolute !important;

    @media screen and (min-width: 1100px) {
      display: none !important;
    }
    @media screen and (max-width: 1099px) {
      color: white !important;
      font-size: 30px !important;
      position: absolute !important;
      right: 20px !important;
      top: 20px !important;
    }
    @media screen and (max-width: 735px) {
      top: 20px !important;
    }
  }
  @media screen and (max-width: 1099px) {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    flex-direction: column;
    padding: 50px 30px;
    justify-content: flex-start;
    top: -30px;
    right: -50px;
    bottom: 0;
    height: 1000vh;
    z-index: 999;
    border-left: 1px solid #00ffff;
    * {
      margin: 10px 0;
    }
  }
`;
export const Item = styled.span`
  font-family: 'Poppins' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 21px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.75s;
  display: block;
  position: relative;
  text-decoration: none;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #4822cf;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    opacity: 1;
    transform: translate3d(-101%, 0, 0);
  }
  :hover::after,
  :focus::after {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const LinkDivDesktop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.3s;
  grid-gap: 20px;

  img {
    &:hover {
      transition: all 0.85s;
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 1100px) {
    margin-right: 100px !important;
  }
  @media screen and (max-width: 735px) {
    display: none;
  }
  @media screen and (max-width: 500px) {
    * {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const LinkDivMobile = styled.div`
  display: none;
  img {
    &:hover {
      transition: all 0.85s;
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 1100px) {
    margin-right: 100px !important;
  }
  @media screen and (max-width: 735px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 60px;
    margin-top: 120px;
    right: -50px;
  }
  @media screen and (max-width: 500px) {
    * {
      margin-right: 0;
    }
  }
`;
export const MobileItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-gap: 20px;
`;
export const StakeBtn = styled.div`
  border-radius: 50px;
  width: 100px;
  height: 50px;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  border: 2px solid #2a292f;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    background: linear-gradient(110.86deg, #57048a 9.46%, #4822cf 89.64%);
  }
`;
const Navbar = () => {
  const ethereum = window.ethereum;
  const [provider, setProvider] = useState('undefined');
  const [defautAccount, setDefaultAccount] = useState(null);
  const [addr, setAddr] = useState('Connect Wallet');
  const [isClicked, setClicked] = useState(false);
  const [showNavbar, setshowNavbar] = useState(true);
  const handleScreenChange = mediaQuery => {
    if (mediaQuery.matches) {
      setshowNavbar(true);
    } else {
      setshowNavbar(false);
    }
  };
  useEffect(() => {
    let window_width = window.matchMedia('(min-width:1100px)');
    window_width.addListener(handleScreenChange);
    handleScreenChange(window_width);
    const t_walletaddress = localStorage.getItem('walletAddress');
    if (t_walletaddress) setAddr(t_walletaddress.substr(0, 6) + '...' + t_walletaddress.substr(t_walletaddress.length - 4));
    return () => {
      window_width.removeListener(handleScreenChange);
    };
  }, []);
  const handleChange = () => {
    setshowNavbar(!showNavbar);
  };
  const getAddress = async () => {
    const handleEthereum = async () => {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        console.log('Ethereum successfully detected!');
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
          setAddr(accounts[0].substr(0, 6) + '...' + accounts[0].substr(accounts[0].length - 4));
          localStorage.setItem('walletAddress', accounts[0]);
          setClicked(true);
          setProvider(await detectEthereumProvider());
        } catch (error) {
          console.error(error);
        }
      } else {
        alert('Please install MetaMask!');
      }
    };
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener('ethereum#initialized', handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 3000); // 3 seconds
    }
  };

  const getMobAddress = async () => {
    const handleConnect = () => {
      if (window.ethereum) {
        try {
          window.ethereum.enable().then(res => {
            localStorage.setItem('walletAddress', window.ethereum.selectedAddress);
            setAddr(
              window.ethereum.selectedAddress.substr(0, 6) +
                '...' +
                window.ethereum.selectedAddress.substr(window.ethereum.selectedAddress.length - 4),
            );
            setClicked(true);
            // setProvider(await detectEthereumProvider());
          });
        } catch (e) {
          console.log(e);
        }
      } else if (window.web3) {
      } else {
        alert('You have to install MetaMask !');
      }
    };
    // const handleEthereum = async () => {
    //   try {
    //     const accounts = await window.ethereum.request({
    //       method: 'eth_requestAccounts',
    //     });
    //     setAddr(accounts[0].substr(0, 6) + '...' + accounts[0].substr(accounts[0].length - 4));
    //     localStorage.setItem('walletAddress', accounts[0]);
    //     setClicked(true);
    //     setProvider(await detectEthereumProvider());
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    if (window.ethereum) {
      handleConnect();
    } else {
      window.open('https://metamask.app.link/dapp/cryptoloot.trade');
    }
  };

  if (provider !== 'undefined') {
    ethereum.on('accountsChanged', function (accounts) {
      setAddr(accounts[0].substr(0, 6) + '...' + accounts[0].substr(accounts[0].length - 4));
      localStorage.setItem('walletAddress', accounts[0]);
    });
  }

  return (
    <Content>
      <NavbarContainer>
        <a href="/">
          <img className="logo" draggable="false" src={Union} alt="Union" width="90px" height="auto" />
        </a>
        {showNavbar ? (
          <>
            <MenuContent>
              <Item>
                <a href="/" style={{ color: 'white' }}>
                  Home
                </a>
              </Item>
              <Item>
                <a href="#roadmap" style={{ color: 'white' }}>
                  Roadmap
                </a>
              </Item>
              <Item>
                <a href="https://drive.google.com/file/d/1vgzK40eKr0mU4B8mBHsiK2hoEE8Xgg2W/view" target="_blank" style={{ color: 'white' }}>
                  Pitch Deck
                </a>
              </Item>
              <AiOutlineClose className="icon-light-style-com" onClick={() => setshowNavbar(!showNavbar)} />
              <LinkDivMobile>
                <MobileItem>
                  <a href="https://t.me/CryptoLoot_trade" target="_blank">
                    <img draggable="false" src={Telegram} alt="Telegram" width="50px" height="auto" />
                  </a>
                  <a href="https://twitter.com/CryptoLootTrade" target="_blank">
                    <img draggable="false" src={Twitter} alt="Twitter" width="50px" height="auto" />
                  </a>
                </MobileItem>
                <Button onClick={getMobAddress} content={addr} fSize={14} width={210} height={50} flag={1} />
              </LinkDivMobile>
            </MenuContent>
          </>
        ) : (
          <ImMenu className="responsive-bar-icon" onClick={() => setshowNavbar(!showNavbar)} />
        )}
        <LinkDivDesktop>
          <Link to="/stake">
            <StakeBtn>Stake</StakeBtn>
          </Link>
          <Button onClick={getMobAddress} content={addr} fSize={14} width={210} height={50} flag={1} />
        </LinkDivDesktop>
      </NavbarContainer>
    </Content>
  );
};

export default Navbar;
