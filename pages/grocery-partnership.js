import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../utils/baseUrl";
import { Submission } from "../components/Shared/Submission";

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

const RetailPartnership = () => {
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
                <h1 id="grocery-partnership-jumbotron-title">
                  Let Us Take That Off Your Plate
                </h1>
                <p id="grocery-partnership-jumbotron-description">
                  With the growing need for home delivery services, essential
                  store workers have to be allocated to fill this need. Or, you
                  can let us take care of that for you with our essential
                  delivery drivers. Keep your employees right where you need
                  them while we serve your favorite customers their favorite
                  items from their favorite store.
                </p>
              </div>
              <div className="contact-image" style={{ textAlign: "center" }}>
                <img
                  src="/images/home-five/grocery.webp"
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

                <form  onSubmit={() => {handleSubmit;Submission}}>
                  <div className="form-group">
                    <label>Grocery Store Name</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Grocery Store Name"
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
                    <label>Grocery Store Address</label>
                    <input
                      type="text"
                      name="text"
                      placeholder="Grocery Store Address"
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

export default RetailPartnership;
