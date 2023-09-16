import React, { Component } from "react";
import Career from "../components/Careers/Careers";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import Head from "next/head";

class Careers extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <title>
            Halen career - Take pride in the way you present yourself and your
            work
          </title>
        </Head>
        <PageBanner
          pageTitle="Careers"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Careers"
          bgImage="item-bg-1"
        />

        <Career />
        {/* <div className="pb-100">
          <Quote />
        </div>
        <AboutContent /> */}

        {/* <TeamStyleTwo /> */}

        <Footer />
      </>
    );
  }
}

export default Careers;
