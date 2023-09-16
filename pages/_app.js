import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/flaticon.css";
import "../styles/boxicons.min.css";
import "../styles/fontawesome.min.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../styles/style.css";
import "../styles/responsive.css";

import App from "next/app";
import Head from "next/head";
import Script from "next/script";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";
import Amplify, { API } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Halen is a community based super-app that helps you to explore the world of your dreams."
          />
        </Head>

        <Component {...pageProps} />

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </>
    );
  }
}
