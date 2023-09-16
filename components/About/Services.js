import React, { Component } from "react";
import Link from "next/link";

class Services extends Component {
  render() {
    return (
      <section className="services-section pb-70" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="section-title">
            <h2>One Stop Shop</h2>
            <p style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}>
              Halen’s one-stop-shop approach has all of these services in one
              company, one app, accessible on one screen. You choose, we move
            </p>
            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-two bg-00a69f">
                <div className="icon">
                  <i className="flaticon-it"></i>
                </div>
                <h3>Rideshare</h3>
                <p>
                  The glue that holds it all together, ride-share. After all, we
                  have to get to you in order to get you to where you want to
                  be.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-two bg-f3ba46">
                <div className="icon">
                  <i className="flaticon-setting"></i>
                </div>
                <h3>Grocery Delivery</h3>
                <p>
                  Filling up your fridge with the family goodies without having
                  to wait in the checkout line will quickly become your
                  favorite.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-two bg-072b4d">
                <div className="icon">
                  <i className="flaticon-promotion"></i>
                </div>
                <h3>Food Delivery</h3>
                <p>
                  The next service to go mobile and door to door. Having a
                  ready-made meal magically appear with a smile is always a good
                  thing
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-two bg-072b4d">
                <div className="icon">
                  <i className="flaticon-optimize"></i>
                </div>
                <h3>Retail Delivery</h3>
                <p>
                  Not having to make battle plans to get your dry cleaning,
                  medication, and that gorgeous new pair of shoes can be a
                  lifesaver
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-two bg-00a69f">
                <div className="icon">
                  <i className="flaticon-cloud-computing"></i>
                </div>
                <h3>Vacation Rental</h3>
                <p>
                  Fun, sun, and nothing to get done, that’s the perfect getaway.
                  Reserve a fabulous vacation rental here, completely
                  worry-free.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-two bg-f3ba46">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>Flight Booking</h3>
                <p>
                  If you need to get here, there, or anywhere, right now, you
                  can book a flight quicker than you can say, “roundtrip to
                  Hawaii”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
