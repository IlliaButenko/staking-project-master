import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Auctions from '../components/Auctions/AuctionsOne';
import TopSeller from '../components/TopSeller/TopSellerOne';
import Explore from '../components/Explore/ExploreFive';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class ThemeOne extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Hero />
        <Auctions />
        <TopSeller />
        <Explore />
        <Work />
        <Footer />
        <ModalSearch />
        <ModalMenu />
        <Scrollup />
      </div>
    );
  }
}

export default ThemeOne;
