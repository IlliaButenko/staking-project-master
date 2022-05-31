import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Wallet from '../components/Wallet/Wallet';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import { useState } from 'react';

function WalletConnect() {
  const ethereum = window.ethereum;
  const [addr, setAddr] = useState('');

  const getAddress = async () => {
    console.log('clicked');

    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAddr(accounts[0]);
      localStorage.setItem('walletAddress', accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  if (ethereum) {
    getAddress();

    ethereum.on('accountsChanged', function (accounts) {
      setAddr(accounts[0]);
      localStorage.setItem('walletAddress', accounts[0]);
    });
  }

  return (
    <div className="main">
      <Header />
      <Breadcrumb title={addr ? addr : 'Wallet Connect'} subpage="Pages" page="Wallet Connect" />
      <Wallet />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
}

export default WalletConnect;

// class WalletConnect extends Component {
//     state = {
//         add: {},
//         ethereum: {}
//         };
//     render() {
//         return (
//             <div className="main">
//                 <Header />
//                 <Breadcrumb title={this.state.add} subpage="Pages" page="Wallet Connect" />
//                 <Wallet />
//                 <Footer />
//                 <ModalSearch />
//                 <ModalMenu />
//                 <Scrollup />
//             </div>
//         );
//     }
// }

// export default WalletConnect;
