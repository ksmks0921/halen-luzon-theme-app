import React, { Component } from "react";
import NavbarStyleTwo from "../components/Layout/NavbarStyleTwo";
import Banner from "../components/HomeFive/Banner";
import Features from "../components/HomeFive/Features";
import HowItWorks from "../components/HomeFive/HowItWorks";
import Footer from "../components/Layout/Footer";
import WorkingProcess from "../components/HomeFive/WorkingProcess";
import Popup from "../components/HomeFive/Popup";
import Head from "next/head";
class Index5 extends Component {
  render() {
    return (
      <>
        <Head>
          <title>
            Halen - One stop shop approach has multiple services in one super
            app
          </title>
          {/* <script src="https://www.google.com/recaptcha/api.js?render=6LeFobwkAAAAAATzirWsA_A9gH_b8aArLCvaiIso"></script> */}
          {/* <script src="https://www.google.com/recaptcha/api.js?render=6LdiNc8kAAAAAPjQjPSclY7IdHHmwcs5DVoqr684"></script> */}
        </Head>
        <NavbarStyleTwo />
        <Banner />
        <Features />
        <HowItWorks />
        <WorkingProcess />
        <Footer />
        <Popup />
      </>
    );
  }
}

export default Index5;
