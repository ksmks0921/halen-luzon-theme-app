import React, { Component } from "react";
import Link from "next/link";

class Banner extends Component {
  render() {
    return (
      <div className="main-banner-area-six">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
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
                    <img src="/images/home-six/main-img6.jpg" alt="image" />
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
