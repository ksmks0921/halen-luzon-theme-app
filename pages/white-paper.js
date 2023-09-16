import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import TeamStyleTwo from "../components/Common/TeamStyleTwo";
import Quote from "../components/About/Quote";
import Footer from "../components/Layout/Footer";
import Services from "../components/About/Services";
import Head from "next/head";

class WhitePaper extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
        <title>Halen White Paper</title>
        </Head>
        <PageBanner
          pageTitle="White Paper"
          homePageUrl="/"
          homePageText="Home"
          activePageText="White Paper"
          bgImage="item-bg-1"
        />
         <section className="services-section pb-70" style={{ marginTop: "50px" }}>
            <div className="container">
                <div className="section-title">
                   <h2>Halen Technologies Whitepaper</h2>
                </div>
                <iframe src="/docs/halen_white_paper.pdf" width="100%" height="1120px"></iframe>
            </div>
         </section>
        <Footer />
      </>
    );
  }
}

export default WhitePaper;
