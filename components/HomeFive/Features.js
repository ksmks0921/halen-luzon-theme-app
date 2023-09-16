import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <div className="more-features-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="more-features-content">
                <div className="icon">
                  <i className="flaticon-report"></i>
                </div>
                <h3>Dependable</h3>
                <p>
                  Whether you are running an errand across town or need to go
                  from meeting to meeting, enjoy your ride while you travel
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="more-features-content bg-f0fffc">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>Local Favorites</h3>
                <p>
                  Get your comfort food from your favorite restaurant without
                  leaving home. Order via the Halen app, or order from our
                  website.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="more-features-content bg-fceee2">
                <div className="icon">
                  <i className="flaticon-software"></i>
                </div>
                <h3>Same Day Delivery</h3>
                <p>
                  From fresh produce to essential hygiene products, find
                  everything you usually buy and get suggestions on amazing new
                  items too.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="more-features-content bg-fde2ee">
                <div className="icon">
                  <i className="flaticon-project-management"></i>
                </div>
                <h3>Travel Itinerary</h3>
                <p>
                  If you need to get here, there, or anywhere, right now, you
                  can book a flight, hotel, cabins, or beach house in a minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
