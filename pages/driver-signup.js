import React, { Component} from "react";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import Link from "next/link";
import { Submission, normalizeInput } from "../components/Shared/Submission";
import HubspotContactForm from "../components/Shared/HubspotContactForm";

class DriverSignup extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     table: "Drivers",
  //     fname: "",
  //     lname: "",
  //     email: "",
  //     phoneNumber: "",
  //     city: "",
  //     county: "",
  //     state: "",
  //     consent: false
  //   };
  // }

  // updateFname = (e) => {
  //   this.setState({fname: e.target.value});
  // };
  // updateLname = (e) => {
  //   this.setState({lname: e.target.value});
  // };
  // updateEmail = (e) => {
  //   this.setState({email: e.target.value});
  // };
  // updatePhoneNumber  = (e) => {  
  //   this.setState(prevState=> ({ phoneNumber: normalizeInput(e.target.value, prevState.phoneNumber) }));
  // };
  // updateCity = (e) => {
  //   this.setState({city: e.target.value});
  // };
  // updateCounty = (e) => {
  //   this.setState({county: e.target.value});
  // };
  // updateState = (e) => {
  //   this.setState({state: e.target.value});
  // };
  // updateConsent = (e) => {
  //   this.setState({consent: e.target.checked});
  // };

  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Driver Signup"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Driver Signup"
          bgImage="item-bg-1"
        />
        <div className="signup-section ptb-100">
          <div className="container">
            <div id="signup-errors">
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="contact-image">
                  <h1>Join our waitlist!</h1>
                  <p>
                  It's almost here, America's first Super App! Halen is the only mobile delivery app in the U.S. that gives you the option to do ride-share, grocery delivery, retail delivery, food delivery, or all four at the same time. That means less downtime so you can earn more money. Don't miss out! Sign up now for your $2,500 bonus!
                  </p>
                </div>
                <div
                  className="contact-image"
                  style={{ textAlign: "center", paddingTop: "20px" }}
                >
                  <img
                    src="/images/customer-driver-contact/driver_contact.png"
                    alt="image"
                    width="80%"
                  />
                </div>
              </div>
              <div className="signup-form">
                {/* <h4>Create Your Driver Account</h4> */}
                <HubspotContactForm    
                       region="na1"
                       portalId="24330100"
                       formId='1b0f633c-762d-4478-9b65-6e981df367a5'  
                />
                {/* <form onSubmit={(event) => {Submission(event, this.state)}}>
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="contact-image">
                        <h1 id="grocery-partnership-jumbotron-title">
                          Driver Sign Up
                        </h1>
                        <br />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name*"
                          value={this.state.fname}
                          onChange={this.updateFname}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name*"
                          value={this.state.lname}
                          onChange={this.updateLname}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address*"
                          value={this.state.email}
                          onChange={this.updateEmail}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number*"
                          value={this.state.phoneNumber}
                          placeholder="(000)000-0000"
                          onChange={this.updatePhoneNumber}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City*"
                          value={this.state.city}
                          onChange={this.updateCity}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="County*"
                          value={this.state.county}
                          onChange={this.updateCounty}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          style={{ appearance: "initial !important" }}
                          onChange={this.updateState}
                        >
                          <option value="" disabled selected>
                            Select a State*
                          </option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District Of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <div>
                          <label style={{ padding: "10px" }}>
                            <input
                              type="checkbox"
                              value={this.state.consent}
                              onChange={this.updateConsent}/>  
                            &nbsp;&nbsp;By checking this box, you consent to receive communications from Halen. You may opt out at any time.
                          </label>
                        </div>
                        <div>
                          <label style={{ padding: "10px" }}>
                            <span style={{ "text-align" : "left"}}>
                              For additional information on how Halen uses your information, click here to view our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>.
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-5">
                      <div className="send-btn">
                        <div className="send-btn">
                          <button type="submit" className="btn default-btn">
                            Send Information
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-7">
                      <span>
                        Already a registered user?{" "}
                        <Link href="/driver-signin">
                          <a>Signin!</a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default DriverSignup;