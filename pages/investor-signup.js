import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import Link from "next/link";
import {Submission, normalizeInput} from "../components/Shared/Submission";
import HubspotContactForm from "../components/Shared/HubspotContactForm";

class InvestorSignup extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     table: "Investors",
  //     fname: "",
  //     lname: "",
  //     email: "",
  //     phoneNumber: "",
  //     amount: "",
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

  // // updatePhoneNumber = (e) => {
  // //   this.setState({phoneNumber: e.target.value});
  // //   // this.setState(prevState=> ({ phoneNumber: normalizeInput(e.target.value, prevState.phone) }));
  // // };
  // updateAmount = (e) => {
  //   const value = e.target.value;
  //   // Remove the "$" symbol from the input value
  //   const sanitizedValue = value.replace(/\$/g, "");
  //   // Update the state with the sanitized value    
  //   this.setState({amount: sanitizedValue});

  // };
  // updateConsent = (e) => {
  //   this.setState({consent: e.target.checked});
  // };

  // handleKeyPress = (event) => {
  //   const keyCode = event.keyCode || event.which;
  //   // Prevent deletion of "$" symbol on backspace key press
  //   if (keyCode === 8 && !this.amount) {
  //     event.preventDefault();
  //   }
  // };

  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Investor Signup"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Investor Signup"
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
                    It's almost here, America's first Super App! Why use several
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
                       formId='b763e663-e208-4aeb-87b6-fb9a9fd5fc1a'  
                />
                {/* <form onSubmit={(event) => {Submission(event, this.state)}}>
                  <div className="row align-items-center">
                    <div className="col-lg-12" style={{ height: "100%" }}>
                      <div className="contact-image">
                        <h1 id="grocery-partnership-jumbotron-title">
                          Investor Sign Up
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
                          placeholder="(000)000-0000"
                          value={this.state.phoneNumber}
                          onChange={this.updatePhoneNumber}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Amount Investing*"
                          value={"$" + this.state.amount}
                          onChange={this.updateAmount}
                          onKeyUp={this.handleKeyPress}
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
                            <span style={{ "textAlign" : "left"}}>
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

                    {/* <div className="col-7">
                      <span>
                        Already a registered user?{" "}
                        <Link href="/customer-signin">
                          <a>Signin!</a>
                        </Link>
                      </span>
                    </div> */}

                  {/* </div>
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

export default InvestorSignup;
