import React, { Component } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  items: 1,
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 1000,
  margin: 0,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right'></i>"],
};

class Quote extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <section className="clients-section">
        <div className="container">
          {/* <div className="section-title">
            <h2>What Our Clients Says</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
            <div className="bar"></div>
          </div> */}

          <div className="clients-slider owl-theme">
            <div className="clients-item">
              <div className="icon">
                <i className="flaticon-left-quotes-sign"></i>
              </div>
              <h3
                style={{
                  marginTop: "20px",
                  lineHeight: "2",
                }}
              >
                Recognizing that our employees, franchisee and affiliate drivers
                are the backbone of our business is the key to our industry's
                evolution.
              </h3>

              <div className="clients-content">
                <h3>Edward Mbeche</h3>
                <span>Founder & CEO</span>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <Link href="/about-ceo">
                  <a className="default-btn">Read the CEO's Letter</a>
                </Link>
              </div>
            </div>
          </div>
          {/* {this.state.display ? (
            <OwlCarousel
              className="clients-slider owl-carousel owl-theme"
              {...options}
            >
              <div className="clients-item">
                <div className="icon">
                  <i className="flaticon-left-quotes-sign"></i>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley
                </p>

                <div className="clients-content">
                  <h3>Moris Jacker</h3>
                  <span>Web Developer</span>
                </div>
              </div>

              <div className="clients-item">
                <div className="icon">
                  <i className="flaticon-left-quotes-sign"></i>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley
                </p>

                <div className="clients-content">
                  <h3>Alex Maxwel</h3>
                  <span>Agent Management</span>
                </div>
              </div>

              <div className="clients-item">
                <div className="icon">
                  <i className="flaticon-left-quotes-sign"></i>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley
                </p>

                <div className="clients-content">
                  <h3>Edmond Halley</h3>
                  <span>Web Designer</span>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )} */}
        </div>
      </section>
    );
  }
}

export default Quote;
