import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import AuthorProfile from '../components/Author/Author';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class Author extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Author Profile" subpage="Pages" page="Author" />
                <AuthorProfile />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Author;