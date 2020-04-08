import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

class MasterLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Footer />
      </div>
    );
  }
}

export default MasterLayout;
