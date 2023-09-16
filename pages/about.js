import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import TeamStyleTwo from "../components/Common/TeamStyleTwo";
import Quote from "../components/About/Quote";
import Footer from "../components/Layout/Footer";
import Services from "../components/About/Services";
import Head from "next/head";

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
        <title>Halen one stop shop approach has multiple services in one super app</title>
        </Head>
        <PageBanner
          pageTitle="About"
          homePageUrl="/"
          homePageText="Home"
          activePageText="About"
          bgImage="item-bg-1"
        />

        <Services />
        <div className="pb-100">
          <Quote />
        </div>
        <AboutContent />

        {/* <TeamStyleTwo /> */}

        <Footer />
      </>
    );
  }
}

export default About;
