import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/sidebar";

class Sidebar extends Component {
    state = {
        data: {},
        widgetData_1: [],
        widgetData_2: [],
        widgetData_3: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    widgetData_1: res.data.widgetData_1,
                    widgetData_2: res.data.widgetData_2,
                    widgetData_3: res.data.widgetData_3
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <aside className="col-12 col-lg-4 pl-lg-5 p-0 float-right sidebar">
                <div className="row">
                    <div className="col-12 align-self-center text-left">
                        {/* Widget [categories] */}
                        <div className="item widget-categories">
                            <h4 className="title">{this.state.data.widgetTitle_1}</h4>
                            <ul className="list-group list-group-flush">
                                {this.state.widgetData_1.map((item, idx) => {
                                    return (
                                        <li key={`wdo_${idx}`} className="list-group-item d-flex justify-content-between align-items-center">
                                            <a href="#">{item.title}</a>
                                            <span className="badge circle">{item.content}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* Widget [tags] */}
                        <div className="item widget-tags">
                            <h4 className="title">{this.state.data.widgetTitle_2}</h4>
                            {this.state.widgetData_2.map((item, idx) => {
                                return (
                                    <a key={`wdt_${idx}`} href="" className="badge tag">{item.title}</a>
                                );
                            })}
                        </div>
                        {/* Widget [share-this] */}
                        <div className="item widget-share-this">
                            <h4 className="title">{this.state.data.widgetTitle_3}</h4>
                            <ul className="navbar-nav social share-list">
                                {this.state.widgetData_3.map((item, idx) => {
                                    return (
                                        <li key={`wdth_${idx}`} className="nav-item">
                                            <a href="#" className="nav-link"><i className={item.icon} /></a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Sidebar;