import React from 'react';

const ModalMenu = () => {
    return (
        <div id="menu" className="modal fade p-0">
            <div className="modal-dialog dialog-animated">
                <div className="modal-content h-100">
                    <div className="modal-header" data-dismiss="modal">
                        Menu <i className="far fa-times-circle icon-close" />
                    </div>
                    <div className="menu modal-body">
                        <div className="row w-100">
                            {/* <div className="items p-0 col-12 text-center" /> */}
                            <ul className="navbar-nav items mx-auto">
                                <li className="nav-item dropdown">
                                    <a href="/" className="nav-link" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href='/auctions' className="nav-link">Marketplace</a>
                                </li>
                                <li className="nav-item">
                                    <a  href='/explore-2' className="nav-link">Explore</a>
                                </li>
                                <li className="nav-item">
                                    <a href='/activity' className="nav-link">Activity</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalMenu;