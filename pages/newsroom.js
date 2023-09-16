import React, { Component, useState } from "react";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import NewsroomContent from "../components/Newsroom/NewsroomContent";
import { useRouter } from "next/router";
import Head from "next/head";

const Newsroom = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id: ", id);
  return (
    <>
      <Navbar />
      <Head>
        <title>
          Halen career - Take pride in the way you present yourself and your work
        </title>
      </Head>
      <PageBanner
        pageTitle="Newsroom"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Newsroom"
        bgImage="item-bg-2"
      />
      <NewsroomContent index={id} />
     
      

      <Footer />
    </>
  );
};

export default Newsroom;
