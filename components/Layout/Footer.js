import React, { Component } from "react";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-section pt-100 pb-70">
          <div className="container">
            <div className="subscribe-area">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="subscribe-content">
                    <h2>Join Our Newsletter</h2>
                    <p>
                      Sign up here to get the latest news, updates,
                      notifications and special deals
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <form className="newsletter-form">
                    <input
                      type="email"
                      className="input-newsletter"
                      placeholder="Enter your email"
                      name="email"
                      required
                    />
                    <button type="submit">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4 col-lg-2 col-sm-4">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <Link href="/">
                      <a className="navbar-brand">
                        <img
                          src="/images/logo.svg"
                          alt="logo"
                          style={{
                            backgroundSize: "contain",
                            overflow: "hidden",
                            width: "4rem",
                            maxWidth: "100px",
                            textAlign: "center",
                            marginLeft: "2%",
                          }}
                        />
                      </a>
                    </Link>
                  </div>

                  <ul className="footer-social">
                    <li>
                      <Link href="https://www.facebook.com/halensocial/">
                        <a target="_blank">
                          <i className="flaticon-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/halensocial">
                        <a target="_blank">
                          <i className="flaticon-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.pinterest.com/halentech/">
                        <a target="_blank">
                          <i className="flaticon-pinterest"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/halensocial/">
                        <a target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/channel/UCNFJrgXsyPRDJfC3wSJUJKA">
                        <a target="_blank">
                          <i className="bi bi-youtube"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/halensocial/mycompany/">
                        <a target="_blank">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-4 col-lg-2">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Company</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/about">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers">
                        <a>Careers</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={{ pathname: "/newsroom", query: { id: 3 } }}>
                        <a>Newsroom</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-4 col-lg-2">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Partnerships</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/restaurant-partnership">
                        <a>Partner as a Restaurant</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/grocery-partnership">
                        <a>Partner as a Grocery</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/retail-partnership">
                        <a>Partner as a Retailer </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/franchise">
                        <a>Become a Franchisee</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-4 col-lg-2">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>App</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="https://apps.apple.com/us/developer/halen-technologies/id1590666070">
                        <a target="_blank" rel="noopener noreferrer">
                          Download iOS App
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://play.google.com/store/apps/dev?id=6561914302691928104&hl=en_US&gl=US">
                        <a target="_blank" rel="noopener noreferrer">
                          Download Android App
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-4 col-lg-2">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Account</h3>
                  </div>
                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/">
                        <a>Account Sign in</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Create A New Account</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Forgot Password</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-4 col-lg-2">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Support</h3>
                  </div>
                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/">
                        <a>App Help</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact Support</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="col-4 col-lg-2">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Contact</h3>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-phone-call"></i>
                    <h3>Phone</h3>
                    <span>+123(456)123</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-envelope"></i>
                    <h3>Email</h3>
                    <span>media@halentech.com</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-pin"></i>
                    <h3>Address</h3>
                    <span>32 st Kilda Road, Melbourne VIC, 3004 Australia</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </footer>

        {/* Copyright area */}
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <p>
                    Copyright &copy;{currentYear}. All Rights Reserved by{" "}
                    <Link href="https://gethalen.com/">
                      <a target="_blank">Halen</a>
                    </Link>
                  </p>
                </div>

                <div className="col-lg-6 col-md-6">
                  <ul>
                    <li>
                      <Link href="/terms-conditions">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
