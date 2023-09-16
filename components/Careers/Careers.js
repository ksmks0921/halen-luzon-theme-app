import React, { Component } from "react";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

class ProjectsStyleTwo extends Component {
  state = {
    engineeringModal: false,
    businessDevModal: false,
    productDevModal: false,
    financeModal: false,
    humanResourcesModal: false,
    legalModal: false,

    content: [
      {
        subject: "Engineering",
        jobTitle: "API Developer",
        subDescription: "Arlington, VA, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Engineering",
        jobTitle: "Security Engineer",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Engineering",
        jobTitle: "Senior Node JS Developer",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Business Development",
        jobTitle: "Business Development Manager",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Business Development",
        jobTitle: "Chief of Staff",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Business Development",
        jobTitle: "Office Manager",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Business Development",
        jobTitle: "Sales Manager",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Business Development",
        jobTitle: "Customer Service Representative",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Business Development",
        jobTitle: "Event Director",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Product Development",
        jobTitle: "Product Manager",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Finance",
        jobTitle: "Chief Financial Officer",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Finance",
        jobTitle: "Financial Analyst",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Human Resources",
        jobTitle: "Chief Human Resources Officer",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },

      {
        subject: "Legal",
        jobTitle: "Corporate Paralegal",
        subDescription: "Remote, Full time",
        date: "October 24, 2020",
      },
    ],
  };

  render() {
    this.state.content.map((item) => {
      console.log(item.subject);
    });
    return (
      <section className="protfolio-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>
              Find The <span>Perfect</span> Opportunity For You
            </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p> */}
            <div className="bar"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <a>
                    <img src="/images/portfolio/portfolio1.png" alt="image" />
                  </a>
                </div>

                <div className="content">
                  <a>
                    <h3>Engineering</h3>
                    <p>
                      Halen is looking for software engineers that will
                      contribute to making a scalable platform for the users. We
                      are looking for engineers that are willing to take on
                      difficult challenges and set out to solve them with
                      excellence.
                    </p>

                    <button
                      onClick={() =>
                        this.setState({
                          engineeringModal: !this.state.engineeringModal,
                        })
                      }
                    >
                      <span style={{ float: "right" }}>
                        Find Jobs <i className="bi bi-chevron-right"></i>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <a>
                    <img src="/images/portfolio/portfolio2.png" alt="image" />
                  </a>
                </div>

                <div className="content">
                  <a>
                    <h3>Business Development</h3>
                    <p>
                      We here at Halen are looking for a candidate who will have
                      strong communication, project management, and analytical
                      skills. They should be able to execute ideas and stratgies
                      that will help the company grow.
                    </p>

                    <button
                      onClick={() =>
                        this.setState({
                          businessDevModal: !this.state.businessDevModal,
                        })
                      }
                    >
                      <span>
                        Find Jobs <i className="bi bi-chevron-right"></i>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <a>
                    <img src="/images/portfolio/portfolio3.png" alt="image" />
                  </a>
                </div>

                <div className="content">
                  <a>
                    <h3>Product Development</h3>
                    <p>
                      Halen invites people who have technical and management
                      skills that will allow us to find and overcome the hardest
                      of challenges. You will be responsible for providing and
                      implementing quality solutions.
                    </p>
                    <button
                      onClick={() =>
                        this.setState({
                          productDevModal: !this.state.productDevModal,
                        })
                      }
                    >
                      <span>
                        Find Jobs <i className="bi bi-chevron-right"></i>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <a>
                    <img src="/images/portfolio/portfolio4.png" alt="image" />
                  </a>
                </div>

                <div className="content">
                  <a>
                    <h3>Finance</h3>
                    <p>
                      At Halen, you will contribute to analyzing statistical
                      data, identifying trends, formulating conclusions and
                      preparing complete and accurate financial statements that
                      will benefit the company as a whole.
                    </p>

                    <button
                      onClick={() =>
                        this.setState({
                          financeModal: !this.state.financeModal,
                        })
                      }
                    >
                      <span style={{ float: "right" }}>
                        Find Jobs <i className="bi bi-chevron-right"></i>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <a>
                    <img src="/images/portfolio/portfolio5.png" alt="image" />
                  </a>
                </div>

                <div className="content">
                  <a>
                    <h3>Human Resources</h3>
                    <p>
                      At Halen, you will be responsible for contributing to
                      development, performance, and engagement of the employees
                      in the company by promoting transparency and improvement
                      in the morals of the company
                    </p>

                    <button
                      onClick={() =>
                        this.setState({
                          humanResourcesModal: !this.state.humanResourcesModal,
                        })
                      }
                    >
                      <span style={{ float: "right" }}>
                        Find Jobs <i className="bi bi-chevron-right"></i>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-protfolio">
                <div className="image">
                  <a>
                    <img src="/images/portfolio/portfolio6.png" alt="image" />
                  </a>
                </div>

                <div className="content">
                  <a>
                    <h3>Legal</h3>
                    <p>
                      At Halen, you will be responsible for ensuring Halen's
                      compliance with laws and regulations especially in the
                      areas of privacy, corporate governance and general federal
                      and state policies.
                    </p>
                    <br />
                    <button
                      onClick={() =>
                        this.setState({ legalModal: !this.state.legalModal })
                      }
                    >
                      <span style={{ float: "right" }}>
                        Find Jobs <i className="bi bi-chevron-right"></i>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Pagination */}
            {/* <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <Link href="#">
                  <a className="prev page-numbers">
                    <i className="flaticon-left"></i>
                  </a>
                </Link>

                <Link href="#">
                  <a className="page-numbers">1</a>
                </Link>

                <span className="page-numbers current" aria-current="page">
                  2
                </span>

                <Link href="#">
                  <a className="page-numbers">3</a>
                </Link>

                <Link href="#">
                  <a className="page-numbers">4</a>
                </Link>

                <Link href="#">
                  <a className="next page-numbers">
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="job-cards">
            {this.state.engineeringModal && (
              <div
                className="backdrop"
                onClick={() => this.setState({ engineeringModal: false })}
              >
                <div className="card card-career-expertise">
                  <div className="card-body">
                    <center>
                      <h3>Engineering</h3>
                      <span>3 Available Opportunities</span>
                    </center>
                    <br />
                    <hr />
                    {this.state.content.map((item) => {
                      if (item.subject === "Engineering") {
                        return (
                          <div>
                            <h4>{item.jobTitle}</h4>
                            <div className="row">
                              <div className="col-lg-7 col-md-6">
                                <p className="job-sub-description">
                                  {item.subDescription}
                                  <br /> {item.date}
                                </p>
                              </div>
                              <div
                                className="col-lg-5 col-md-6 align-self-end"
                                style={{
                                  fontWeight: "600",
                                  textAlign: "right",
                                }}
                              >
                                <Link
                                  href="/job_descriptions/api_developer_jd"
                                  className="btn btn-job btn-block"
                                >
                                  Learn More
                                </Link>
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            )}
            {this.state.businessDevModal && (
              <div
                className="backdrop"
                onClick={() => this.setState({ businessDevModal: false })}
              >
                <div className="card card-career-expertise">
                  <div className="card-body">
                    <center>
                      <h3>Business Development</h3>
                      <span>6 Available Opportunities</span>
                    </center>
                    <br />
                    <hr />
                    {this.state.content.map((item) => {
                      if (item.subject === "Business Development") {
                        return (
                          <div>
                            <h4>{item.jobTitle}</h4>
                            <div className="row">
                              <div className="col-lg-7 col-md-6">
                                <p className="job-sub-description">
                                  {item.subDescription}
                                  <br /> {item.date}
                                </p>
                              </div>
                              <div
                                className="col-lg-5 col-md-6 align-self-end"
                                style={{
                                  fontWeight: "600",
                                  textAlign: "right",
                                }}
                              >
                                <Link
                                  href="/job_descriptions/api_developer_jd"
                                  className="btn btn-job btn-block"
                                >
                                  Learn More
                                </Link>
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            )}
            {this.state.productDevModal && (
              <div
                className="backdrop"
                onClick={() => this.setState({ productDevModal: false })}
              >
                <div className="card card-career-expertise">
                  <div className="card-body">
                    <center>
                      <h3>Product Development</h3>
                      <span>1 Available Opportunity</span>
                    </center>
                    <br />
                    <hr />
                    {this.state.content.map((item) => {
                      if (item.subject === "Product Development") {
                        return (
                          <div>
                            <h4>{item.jobTitle}</h4>
                            <div className="row">
                              <div className="col-lg-7 col-md-6">
                                <p className="job-sub-description">
                                  {item.subDescription}
                                  <br /> {item.date}
                                </p>
                              </div>
                              <div
                                className="col-lg-5 col-md-6 align-self-end"
                                style={{
                                  fontWeight: "600",
                                  textAlign: "right",
                                }}
                              >
                                <Link
                                  href="/job_descriptions/api_developer_jd"
                                  className="btn btn-job btn-block"
                                >
                                  Learn More
                                </Link>
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            )}
            {this.state.financeModal && (
              <div
                className="backdrop"
                onClick={() => this.setState({ financeModal: false })}
              >
                <div className="card card-career-expertise">
                  <div className="card-body">
                    <center>
                      <h3>Finance</h3>
                      <span>2 Available Opportunities</span>
                    </center>
                    <br />
                    <hr />
                    {this.state.content.map((item) => {
                      if (item.subject === "Finance") {
                        return (
                          <div>
                            <h4>{item.jobTitle}</h4>
                            <div className="row">
                              <div className="col-lg-7 col-md-6">
                                <p className="job-sub-description">
                                  {item.subDescription}
                                  <br /> {item.date}
                                </p>
                              </div>
                              <div
                                className="col-lg-5 col-md-6 align-self-end"
                                style={{
                                  fontWeight: "600",
                                  textAlign: "right",
                                }}
                              >
                                <Link
                                  href="/job_descriptions/api_developer_jd"
                                  className="btn btn-job btn-block"
                                >
                                  Learn More
                                </Link>
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            )}
            {this.state.humanResourcesModal && (
              <div
                className="backdrop"
                onClick={() => this.setState({ humanResourcesModal: false })}
              >
                <div className="card card-career-expertise">
                  <div className="card-body">
                    <center>
                      <h3>Human Resources</h3>
                      <span>1 Available Opportunity</span>
                    </center>
                    <br />
                    <hr />
                    {this.state.content.map((item) => {
                      if (item.subject === "Human Resources") {
                        return (
                          <div>
                            <h4>{item.jobTitle}</h4>
                            <div className="row">
                              <div className="col-lg-7 col-md-6">
                                <p className="job-sub-description">
                                  {item.subDescription}
                                  <br /> {item.date}
                                </p>
                              </div>
                              <div
                                className="col-lg-5 col-md-6 align-self-end"
                                style={{
                                  fontWeight: "600",
                                  textAlign: "right",
                                }}
                              >
                                <Link
                                  href="/job_descriptions/api_developer_jd"
                                  className="btn btn-job btn-block"
                                >
                                  Learn More
                                </Link>
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            )}
            {this.state.legalModal && (
              <div
                className="backdrop"
                onClick={() => this.setState({ legalModal: false })}
              >
                <div className="card card-career-expertise">
                  <div className="card-body">
                    <center>
                      <h3>Legal</h3>
                      <span>1 Available Opportunity</span>
                    </center>
                    <br />
                    <hr />
                    {this.state.content.map((item) => {
                      if (item.subject === "Legal") {
                        return (
                          <div>
                            <h4>{item.jobTitle}</h4>
                            <div className="row">
                              <div className="col-lg-7 col-md-6">
                                <p className="job-sub-description">
                                  {item.subDescription}
                                  <br /> {item.date}
                                </p>
                              </div>
                              <div
                                className="col-lg-5 col-md-6 align-self-end"
                                style={{
                                  fontWeight: "600",
                                  textAlign: "right",
                                }}
                              >
                                <Link
                                  href="/job_descriptions/api_developer_jd"
                                  className="btn btn-job btn-block"
                                >
                                  Learn More
                                </Link>
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            )}
            <br />
            <br />
            <br />
          </div>{" "}
          {/* End Job-Cards*/}
        </div>
      </section>
    );
  }
}

export default ProjectsStyleTwo;
