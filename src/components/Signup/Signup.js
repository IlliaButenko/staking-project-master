import React, { Component } from 'react';

const initData = {
    pre_heading: "Signup",
    heading: "Create an Account",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
}

const socialData = [
    {
        id: "1",
        link: "facebook",
        icon: "fab fa-facebook-f"
    },
    {
        id: "2",
        link: "twitter",
        icon: "fab fa-twitter"
    },
    {
        id: "3",
        link: "google-plus",
        icon: "fab fa-google-plus-g"
    }
]

class Signup extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: socialData
        })
    }
    render() {
        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                <p>{this.state.initData.content}</p>
                            </div>
                            {/* Item Form */}
                            <form className="item-form card no-hover">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="name" placeholder="Enter your Name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" name="email" placeholder="Enter your Email" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="password" className="form-control" name="password" placeholder="Enter your Password" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                                <label className="form-check-label" htmlFor="inlineRadio1">I agree to <a href="#">Privacy Policy</a></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4" type="submit">Sign Up</button>
                                    </div>
                                    <div className="col-12">
                                        <span className="d-block text-center mt-4">Already have an account? <a href="/login">Login</a></span>
                                    </div>
                                    <div className="col-12">
                                        <hr />
                                        <div className="other-option">
                                            <span className="d-block text-center mb-4">Or</span>
                                            {/* Social Icons */}
                                            <div className="social-icons d-flex justify-content-center">
                                                {this.state.data.map((item, idx) => {
                                                    return (
                                                        <a key={`lsd_${idx}`} className={item.link} href="#">
                                                            <i className={item.icon} />
                                                            <i className={item.icon} />
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signup;