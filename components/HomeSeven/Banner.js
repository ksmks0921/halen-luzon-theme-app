import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";

class Banner extends Component {
  render() {
    return (
      <div className="main-banner-area-seven">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid mt-50">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <span>Digital Marketing</span>
                    <h1>Digital Service With Excellent Quality</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      incididunt ut laboredolore magna aliqua elsed tempomet,
                      consectetur adipiscing.
                    </p>

                    <div className="banner-btn">
                      <Link href="/contact">
                        <a className="default-btn">Get Started</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 pr-0">
                  <div className="banner-image">
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape1.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape2.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInLeft"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape3.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="zoomIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape4.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="bounceIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape5.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInDown"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape6.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="zoomIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape7.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape8.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="rotateIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape9.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape10.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="zoomIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-seven/home-se-shape11.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="zoomIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img src="/images/home-seven/main-img7.png" alt="image" />
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
