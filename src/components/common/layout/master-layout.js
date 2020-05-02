import React, { Component, Suspense, lazy } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../../master/home/home"));
const About = lazy(() => import("../../master/about/about"));
const Technology = lazy(() => import("../../master/technologies/technologies"));
const Contact = lazy(() => import("../../master/contact/contact"));

class MasterLayout extends Component {
  render() {
    return (
      <div>
        <Header />
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/technologies" component={Technology} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </Suspense>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default MasterLayout;
