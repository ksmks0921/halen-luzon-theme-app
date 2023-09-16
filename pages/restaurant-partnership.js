import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../utils/baseUrl";
import {Submission} from "../components/Shared/Submission";


const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const RestaurantPartnership = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <section className="contact-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
            >
              <div className="contact-image">
                <h1>
                  Increase your sales with
                  <br />
                  curb side pick-up & delivery
                </h1>
                <p>
                  Right now curbside pick-ups & deliveries are the life lines
                  for many restaurants and will be a welcomed revenue booster
                  moving forward. But with “normal” beginning to trend toward
                  mobile delivery, it will soon become a vital and common part
                  of day to day business.
                </p>
              </div>
              <div className="contact-image" style={{ textAlign: "center" }}>
                <img
                  src="/images/home-five/restaurant.webp"
                  alt="image"
                  width="90%"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form">
                <div className="contact-text">
                  <h2>Start your 30-day trial</h2>
                </div>

                <form onSubmit={() => {handleSubmit;Submission}}>
                  <div className="form-group">
                    <label>Restaurant Name</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Restaurant Name"
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Restaurant Address</label>
                    <input
                      type="text"
                      name="text"
                      placeholder="Restaurant Address"
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone Number"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div name="submitFail">&nbsp;</div>

                  <div className="send-btn">
                    <button type="submit" className="default-btn">
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RestaurantPartnership;
