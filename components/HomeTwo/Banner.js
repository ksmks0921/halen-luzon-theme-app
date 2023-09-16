import React, { Component } from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

class Banner extends Component {
  render() {
    return (
      <div className="main-banner-area-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid mt-50">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1>Be Unique With Luzon IT Startup</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      incididunt ut laboredolore magna aliqua elsed tempomet,
                      consectetur adipiscing.
                    </p>

                    <div className="banner-btn">
                      <Link href="/contact">
                        <a className="default-btn">Get Started</a>
                      </Link>

                      <Link href="/contact">
                        <a className="optional-btn">Contact Us</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="banner-image">
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-two/home-two-shape1.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInDown"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-two/home-two-shape2.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-two/home-two-shape3.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="zoomIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-two/home-two-shape4.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInDown"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-two/home-two-shape5.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="zoomIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img src="/images/home-two/main-img-2.png" alt="image" />
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
