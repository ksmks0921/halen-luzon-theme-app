import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layout/Footer";
import { Submission } from "../components/Shared/Submission";

class Franchise extends Component {
  state = {
    fields: {},
    errors: {},
    selectedOption1: "tier1",
    selectedOption2: "tier1",
    selectedOption3: "tier1",
    loadMore: false,
  };
  handleChange = (e) => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  };
  handleOptionChange1 = (changeEvent) => {
    this.setState({
      selectedOption1: changeEvent.target.value,
    });
  };
  handleOptionChange2 = (changeEvent) => {
    this.setState({
      selectedOption2: changeEvent.target.value,
    });
  };
  handleOptionChange3 = (changeEvent) => {
    this.setState({
      selectedOption3: changeEvent.target.value,
    });
  };

  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Become a Franchise"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Franchise"
          bgImage="item-bg-1"
        />

        <div className="pb-100">
          <section className="contact-section">
            <div className="container">
              <div id="signup-errors">
              </div> 
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="contact-text">
                    <h1>Franchise Inquiry Form</h1>
                    <p>
                      We are looking for a few select franchisee to be the
                      pillar of the community. If you enjoy helping your
                      community - please start by filling out the franchise
                      inquiry form
                    </p>
                  </div>
                  <div
                    className="contact-image"
                    style={{ textAlign: "center" }}
                  >
                    <img
                      src="/images/home-five/community_1.png"
                      alt="image"
                      width="100%"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="contact-form">
                    <form onSubmit={Submission}>
                      <div className="row">
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label
                              htmlFor="fullNameInput"
                              id="fullNameLabel"
                              data-at="fullNameLabel"
                              aria-hidden="true"
                            >
                              First Name*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="fullNameInput"
                              id="fname"
                              name="fname"
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label
                              htmlFor="fullNameInput"
                              id="fullNameLabel"
                              data-at="fullNameLabel"
                              aria-hidden="true"
                            >
                              Last Name*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="fullNameInput"
                              id="lname"
                              name="lname"
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="email" id="email" data-at="email">
                              Email*
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              data-at="email"
                              id="email"
                              name="emailid"
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label
                              htmlFor="phoneNumber"
                              id="phoneNumber"
                              data-at="phoneNumber"
                            >
                              Phone*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="phoneNumber"
                              id="tel"
                              name="mobileno"
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label
                              htmlFor="address"
                              id="address"
                              data-at="address"
                            >
                              Home Address*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="address"
                              id="address"
                              name="address"
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="city" id="city" data-at="city">
                              City*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="city"
                              id="city"
                              name="city"
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="state" id="state" data-at="state">
                              State*
                            </label>
                            <select
                              className="form-control"
                              data-at="state"
                              id="state"
                              name="state"
                            >
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
                          <div className="form-group col-md-6">
                            <div style={{ color: "red" }}>
                              {this.state.errors.country}
                            </div>
                            <label
                              htmlFor="country"
                              id="country"
                              data-at="country"
                            >
                              Country*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="country"
                              id="country"
                              name="country"
                              onChange={this.handleChange}
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label
                              htmlFor="invest"
                              id="invest"
                              data-at="invest"
                            >
                              How much liquid capital do you have to invest?*
                            </label>
                            <br />
                            <label style={{ paddingRight: "25px" }}>
                              <input
                                type="radio"
                                value="tier1"
                                checked={this.state.selectedOption1 === "tier1"}
                                onChange={this.handleOptionChange1}
                              />{" "}
                              Under $75,000
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="tier2"
                                checked={this.state.selectedOption1 === "tier2"}
                                onChange={this.handleOptionChange1}
                              />{" "}
                              $75,000 – $100,000
                            </label>
                            <br />
                            <label style={{ paddingRight: "25px" }}>
                              <input
                                type="radio"
                                value="tier3"
                                checked={this.state.selectedOption1 === "tier3"}
                                onChange={this.handleOptionChange1}
                              />{" "}
                              $100,00 – $200,000
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="tier4"
                                checked={this.state.selectedOption1 === "tier4"}
                                onChange={this.handleOptionChange1}
                              />{" "}
                              $200,000 – $300,000
                            </label>
                            <br />
                            <label style={{ paddingRight: "25px" }}>
                              <input
                                type="radio"
                                value="tier5"
                                checked={this.state.selectedOption1 === "tier5"}
                                onChange={this.handleOptionChange1}
                              />{" "}
                              $300,00 – $500,000
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="tier6"
                                checked={this.state.selectedOption1 === "tier6"}
                                onChange={this.handleOptionChange1}
                              />{" "}
                              over $500,000
                            </label>
                            <br />
                          </div>

                          <div className="form-group col-md-6">
                            <label
                              htmlFor="invest"
                              id="invest"
                              data-at="invest"
                            >
                              Investment time frame:
                            </label>
                            <br />
                            <label style={{ paddingRight: "25px" }}>
                              <input
                                type="radio"
                                value="tier1"
                                checked={this.state.selectedOption2 === "tier1"}
                                onChange={this.handleOptionChange2}
                              />{" "}
                              Immediately
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="tier2"
                                checked={this.state.selectedOption2 === "tier2"}
                                onChange={this.handleOptionChange2}
                              />{" "}
                              1-3 months
                            </label>
                            <br />
                            <label style={{ paddingRight: "25px" }}>
                              <input
                                type="radio"
                                value="tier3"
                                checked={this.state.selectedOption2 === "tier3"}
                                onChange={this.handleOptionChange2}
                              />{" "}
                              4-6 months
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="tier4"
                                checked={this.state.selectedOption2 === "tier4"}
                                onChange={this.handleOptionChange2}
                              />{" "}
                              6-12 months
                            </label>
                            <br />
                            <label style={{ paddingRight: "25px" }}>
                              <input
                                type="radio"
                                value="tier5"
                                checked={this.state.selectedOption2 === "tier5"}
                                onChange={this.handleOptionChange2}
                              />{" "}
                              Other
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="form-group">
                            <p>
                              What are the preferred areas, if you were awarded
                              a franchise:
                            </p>
                            <div style={{ color: "red" }}>
                              {this.state.errors.country}
                            </div>
                            <label
                              htmlFor="country"
                              id="country"
                              data-at="country"
                            >
                              First County Choice:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="country"
                              id="country"
                              name="country"
                              onChange={this.handleChange}
                            />
                            <div style={{ color: "red" }}>
                              {this.state.errors.country}
                            </div>
                            <label
                              htmlFor="country"
                              id="country"
                              data-at="country"
                            >
                              Second County Choice:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="country"
                              id="country"
                              name="country"
                              onChange={this.handleChange}
                            />
                            <br />
                            <div style={{ color: "red" }}>
                              {this.state.errors.country}
                            </div>
                            <label
                              htmlFor="country"
                              id="country"
                              data-at="country"
                            >
                              Other:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="country"
                              id="country"
                              name="country"
                              onChange={this.handleChange}
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <label
                              htmlFor="invest"
                              id="invest"
                              data-at="invest"
                            >
                              Do you currently own another franchise?
                            </label>
                            <br />
                            <label style={{ paddingRight: "25px" }}>
                              <input
                                type="radio"
                                value="tier1"
                                checked={this.state.selectedOption3 === "tier1"}
                                onChange={this.handleOptionChange3}
                              />{" "}
                              Yes
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="tier2"
                                checked={this.state.selectedOption3 === "tier2"}
                                onChange={this.handleOptionChange3}
                              />{" "}
                              No
                            </label>
                          </div>

                          <div className="form-group">
                            <div style={{ color: "red" }}>
                              {this.state.errors.country}
                            </div>
                            <label
                              htmlFor="country"
                              id="country"
                              data-at="country"
                            >
                              If “Yes”, which one:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="country"
                              id="country"
                              name="country"
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <div style={{ color: "red" }}>
                              {this.state.errors.country}
                            </div>
                            <label
                              htmlFor="country"
                              id="country"
                              data-at="country"
                            >
                              Notes:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              data-at="country"
                              id="country"
                              name="country"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div name="submitFail">&nbsp;</div>

                      <div className="send-btn">
                        <button type="submit" className="default-btn">
                          Send Information
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </>
    );
  }
}

export default Franchise;
