import React, { Component } from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

class Banner extends Component {
  render() {
    return (
      <div className="main-banner-area-three">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container mt-50">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <span>Digital Marketing</span>
                    <h1>Digital Agency and Marketing</h1>
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

                <div className="col-lg-6">
                  <div className="banner-image">
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-three/home-three-shape1.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInDown"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-three/home-three-shape2.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInUp"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-three/home-three-shape3.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="zoomIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-three/home-three-shape4.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInDown"
                      delay={50}
                      animateOnce={true}
                    >
                      <img
                        src="/images/home-three/home-three-shape5.png"
                        alt="image"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="zoomIn"
                      delay={50}
                      animateOnce={true}
                    >
                      <img src="/images/home-three/main-img3.png" alt="image" />
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
