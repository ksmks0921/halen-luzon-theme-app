import React, { Component } from "react";

class WorkingProcess extends Component {
  render() {
    return (
      <div className="overview-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="overview-content">
                <div className="icon">
                  <i className="flaticon-edit"></i>
                </div>
                <h3>Sketch</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-content">
                <div className="icon">
                  <i className="flaticon-thinking"></i>
                </div>
                <h3>Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-content">
                <div className="icon">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>Testing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-content">
                <div className="icon">
                  <i className="flaticon-software"></i>
                </div>
                <h3>Develop</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkingProcess;
