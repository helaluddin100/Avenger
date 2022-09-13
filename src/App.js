import React from "react";
import Home from "./component/home";
import Header from "./component/header";
import Team from "./component/Team";
import Footer from "./component/Footer";
import Artwork from "./component/Artwork";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mint from "./component/mint";
import Gallery from "./component/gallery";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className='body-wrapper'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/team' exact component={Team} />
            <Route path='/omniversel-archives' exact component={Artwork} />
            <Route path='/mint' exact component={Mint} />
            <Route path='/gallery' exact component={Gallery} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
