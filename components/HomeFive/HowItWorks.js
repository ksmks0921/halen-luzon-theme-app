import React, { Component } from "react";

class HowItWorks extends Component {
  render() {
    return (
      <section className="app-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="app-image">
                <img src="/images/appVector.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              {/* <div className="app-content">
                <h3>What Does the App offer?</h3>
                <div className="bar"></div>
                <p>Halen App has many great features</p>
              </div> */}

              <div className="app-inner-text">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>Ride Now or Later</h3>
                <p>
                  These two features enable you to book your ride immediately
                  with the nearest available driver or schedule a ride for
                  sometime in the future so it's one less thing on your plate to
                  worry about.
                </p>
              </div>

              <div className="app-inner-text">
                <div className="icon">
                  <i className="flaticon-cloud-computing"></i>
                </div>
                <h3>Manage Deliveries</h3>
                <p>
                  Quick deliveries with the tap of an app or web-based platform.
                  We provide experienced drivers on-demand and 24/7 customer
                  care managed by well-trained and dedicated employees.
                </p>
              </div>

              <div className="app-inner-text">
                <div className="icon">
                  <i className="flaticon-cellphone"></i>
                </div>
                <h3>Multiple Drop-Off</h3>
                <p>
                  Traveling with friends? Each of you lives in different
                  locations along the same route?This feature allows the user to
                  select multiple drop-off points on your app, thus making your
                  life easy.
                </p>
              </div>

              <div className="app-inner-text">
                <div className="icon">
                  <i className="flaticon-cellphone"></i>
                </div>
                <h3>Contact Protection</h3>
                <p>
                  We hide your contact info for your privacy. Whenever you call
                  and text a driver through the app, they will not see your
                  phone number, and you will not see theirs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HowItWorks;
