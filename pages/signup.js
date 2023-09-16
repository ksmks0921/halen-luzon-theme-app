import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import Link from "next/link";

class Signup extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Signup"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Signup"
          bgImage="item-bg-1"
        />

        <div className="signup-section ptb-100">
          <div className="container">
            <div className="signup-form">
              <h3>Create your Account</h3>

              <form>
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="send-btn">
                      <div className="send-btn">
                        <button type="submit" className="btn default-btn">
                          Signup
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-7">
                    <span>
                      Already a registered user?{" "}
                      <Link href="/signin">
                        <a>Signin!</a>
                      </Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Signup;
