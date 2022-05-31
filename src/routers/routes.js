import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// importing all the themes
import Landing from '../components/landing';
import ThemeOne from '../pages/theme-one';
// import ExploreOne from "../pages/explore-one";
import ExploreTwo from '../pages/explore-two';
// import ExploreThree from "../pages/explore-three";
// import ExploreFour from "../pages/explore-four";
import Auctions from '../pages/auctions';
import ItemDetails from '../pages/item-details';
import Activity from '../pages/activity';
import Blog from '../pages/blog';
import BlogSingle from '../pages/blog-single';
import HelpCenter from '../pages/help-center';
import Authors from '../pages/authors';
import Author from '../pages/author';
import WalletConnect from '../pages/wallet-connect';
import Create from '../pages/create';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Contact from '../pages/contact';
import Stake from '../pages/stake';

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/ttt" component={ThemeOne} />
            <Route exact path="/stake" component={Stake} />
            <Route exact path="/explore-2" component={ExploreTwo} />
            <Route exact path="/auctions" component={Auctions} />
            <Route exact path="/item-details" component={ItemDetails} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog-single" component={BlogSingle} />
            <Route exact path="/help-center" component={HelpCenter} />
            <Route exact path="/authors" component={Authors} />
            <Route exact path="/author" component={Author} />
            <Route exact path="/wallet-connect" component={WalletConnect} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Routes;
