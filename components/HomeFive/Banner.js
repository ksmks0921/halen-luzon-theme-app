import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class Banner extends Component {
  render() {
    return (
      <div className="main-banner-area-five">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1>
                      Comfort and Convenience In <br /> Your Moving World
                    </h1>
                    <p>
                      Halen is a user friendly, community based super app.
                      Providing convenient services including ride-share, food,
                      grocery, and retail delivery. As well as flight booking
                      and vacation rentals. Your world integrated.
                    </p>

                    <div className="banner-btn">
                      <Link href="/about">
                        <a className="default-btn">Learn More About Us</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="banner-image">
                    <img
                      layout="fill"
                      src="/images/home-five/main-img-new.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-shape">
          <img
            src="/images/home-five/home-five-shape-green.png"
            alt="image"
            className="w-100"
          />
        </div>
      </div>
    );
  }
}

export default Banner;
