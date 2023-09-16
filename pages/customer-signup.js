import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import Link from "next/link";
import {Submission, normalizeInput} from "../components/Shared/Submission";
import HubspotContactForm from "../components/Shared/HubspotContactForm";

class CustomerSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: "Customers",
      fname: "",
      lname: "",
      email: "",
      phoneNumber: "",
      consent: false
    };
  }

  updateFname = (e) => {
    this.setState({fname: e.target.value});
  };
  updateLname = (e) => {
    this.setState({lname: e.target.value});
  };
  updateEmail = (e) => {
    this.setState({email: e.target.value});
  };
  updatePhoneNumber  = (e) => {  
    this.setState(prevState=> ({ phoneNumber: normalizeInput(e.target.value, prevState.phoneNumber) }));
  };
  updateConsent = (e) => {
    this.setState({consent: e.target.checked});
  };

  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Customer Signup"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Customer Signup"
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
                    It's almost here, America’s first Super App! Why use several
                    apps when you could use 1 super app? Welcome to Halen, we
                    are a user-friendly, community based super app. Providing
                    convenient services including ride-share, food, grocery, and
                    retail delivery. As well as flight booking and vacation
                    rentals. Your world integrated.
                  </p>
                </div>
                <div className="contact-image" style={{ textAlign: "center" }}>
                  <img
                    src="/images/customer-driver-contact/customer_contact.png"
                    alt="image"
                    width="60%"
                  />
                </div>
              </div>
              <div className="signup-form">
                <HubspotContactForm    
                       region="na1"
                       portalId="24330100"
                       formId='f63729e2-52fb-4936-beab-348df4a03362'  
                />
                {/* <form onSubmit={(event) => {Submission(event, this.state)}}>
                  <div className="row align-items-center">
                    <div className="col-lg-12" style={{ height: "100%" }}>
                      <div className="contact-image">
                        <h1 id="grocery-partnership-jumbotron-title">
                          Customer Sign Up
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
                        <Link href="/customer-signin">
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

export default CustomerSignup;
