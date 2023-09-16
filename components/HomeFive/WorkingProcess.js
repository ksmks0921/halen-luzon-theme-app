import React, { Component } from "react";
import Image from "next/image";

class WorkingProcess extends Component {
  render() {
    return (
      <section className="process-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="process-content">
                <div className="image">
                  <img src="/images/home-five/rideshare.webp" alt="image" />
                </div>

                <div className="content">
                  <h4>Rideshare</h4>
                  <p>
                    Are you at least 21 years old; Have a newer model vehicle-8
                    years old or newer; Have a valid U.S. driver's license; Have
                    at least one year of driving and clean background check?
                    Sign up and Earn money!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-content">
                <div className="image">
                  <img src="/images/home-five/restaurant.png" alt="image" />
                </div>

                <div className="content">
                  <h4>Restaurants</h4>
                  <p>
                    Deliver food from local restaurants - Every completed
                    delivery puts money in your pockets plus 100 percent of the
                    tips that you make. No strings attached. Work for aslong or
                    as little as you want.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-content">
                <div className="image">
                  <img src="/images/home-five/grocery.webp" alt="image" />
                </div>

                <div className="content">
                  <h4>Grocery Delivery</h4>
                  <p>
                    Deliver groceries directly to customer’s house. No shopping,
                    just pick up, deliver, and get paid. STAY BUSY - Earn more
                    with quicker pickups and shorter wait times.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 ">
              <div className="process-content">
                <div className="image">
                  <img src="/images/home-five/retail.webp" alt="image" />
                </div>

                <div className="content">
                  <h4> Retail Delivery</h4>
                  <p>
                    Retail and personal package delivery services. Packages will
                    never exceed 50lbs – anything from retail stores to pharmacy
                    prescriptions.You have the option to sign up for all
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkingProcess;
