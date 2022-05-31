import React, { Component } from 'react';
import Web3 from 'web3';

const initData = {
    pre_heading: "Login",
    heading: "Login to your Account",
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
const data1 = [
    {
        id: "1",
        seller: "@Richard",
        email: "richard@somemail.com",
        password: "123"
    },
    {
        id: "2",
        seller: "@JohnDeo",
        email: "richard@somemail.com",
        password: "222"
    },
    {
        id: "3",
        email: "richard@somemail.com",
        seller: "@MKHblots",
    },
    {
        id: "4",
        seller: "@RioArham",
    },
    {
        id: "5",
        seller: "@ArtNox",

    },
    {
        id: "6",
        seller: "@ArtNox",
    },
    {
        id: "7",
        seller: "@ArtNox",
    },
    {
        id: "8",
        seller: "@ArtNox",
    },
    {
        id: "9",
        seller: "@ArtNox",
    },
    {
        id: "10",
        seller: "@ArtNox",
    },
    {
        id: "11",
        seller: "@ArtNox",
    },
    {
        id: "12",
        seller: "@ArtNox",
    },
    {
        id: "12",
        seller: "@ArtNox",
        
    }
]

// Wallet connect code
// const useWeb3 = () => {
//     const [web3,setweb3] = useState(null);

//     useEffect(() => {
//         var instance;
//         if(window.ethereum) {
//             try{
//                 instance = new Web3(window.ethereum);
//             }catch(error){
//                 console.error(error);
//             };
//         }else if (window.web3) {
//             instance =  new Web3(window.web3);
//         }else{
//             const provider = new Web3.provider.HttpProvider('http://127.0.0.1:8545')
//             instance = new Web3(provider);
//         }setweb3(instance);
     
//     },[]);

//     return web3;

// }

// const StoreContext = createContext();
// const initialState = {
//     message: '',
//     address: null,
//     balance: 0
// };

// const reducer = (action, state) => {
//     switch(action.type){
//         case "NEW-ADDRESS":
//             return {
//                 ...state,
//                 address: action.newAddress,
//                 message: action.message
//             }
//         default:
//             throw new Error('Unknown type of action ${action.type');
//     }
// };


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newHref : '',
            initData: {},
            data: [],
            data1: [],
            username: '',
            password: '',
            account: ''
        };
        this.authenticate = this.authenticate.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

    }




    handleEmail(e){
        this.setState({username: e.target.value});
        console.log("email" + this.state.username);

    }
    handlePassword(e){
        this.setState({password: e.target.value});
        console.log("pass" + this.state.password);
    }

    componentDidMount(){
        this.setState({
            initData: initData,
            data: socialData,
            data1: data1
        })
    }
   
    authenticate(e){
        //e.preventDefault();
        var count = -1;

        for(var i = 0; i < this.state.data1.length; i++) {
            console.log(this.state.username + "State");
            if(this.state.data1[i].email==this.state.username){
                if(this.state.data1[i].password==this.state.password){
                    count = 1;
                } else {count = -1;}
                console.log(this.state.data1[i].email);
                i = this.state.data1.length;
            }
        }

        if(count == 1){
           
            
        this.setState({newHref : "/wallet-connect"});         
        }
        else {
            alert(count);

        }
    
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
                            <form className="item-form card no-hover" action={this.state.newHref}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="email" onChange = {this.handleEmail} className="form-control" name="email" placeholder="Enter your Email" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="password" onChange = {this.handlePassword} className="form-control" name="password" placeholder="Enter your Password" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" defaultChecked />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Remember Me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12" >
                                            <button className="btn w-100 mt-3 mt-sm-4" onClick={(e) => this.authenticate(e)} type="submit">Sign In</button>

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

export default Login;