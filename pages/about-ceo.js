import React, { Component } from "react";
import Aboutceo from "../components/AboutCEO/AboutCEO";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

class AboutCEO extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="pt-100 pb-100">
          <Aboutceo />
        </div>

        <Footer />
      </>
    );
  }
}

export default AboutCEO;
