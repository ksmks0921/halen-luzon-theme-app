import React, { Component } from "react";
import Link from "next/link";

class AboutContent extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <section className="about-section bor-tb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="about-image">
                <img src="/images/about/about.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-tab">
                <h2>Halen's Employee-Centric Culture</h2>
                <div className="bar"></div>
                <p>
                  What is an “employee-centric” culture? Well, it’s an
                  intentionally cultivated environment where ideas, creativity,
                  and communication are encouraged throughout an organization.
                  Suggestions, observations and concerns are not just taken
                  seriously, they are encouraged to be expressed and shared.
                  “Centric employees” have a personal stake in the business they
                  are in and it manifests in pride in what they do.
                  <br />
                  <br />
                  Centric companies don’t just focus on their bottom lines, but
                  on the their employees and their overall happiness within the
                  work community. When that focus is felt by the employees, it
                  increases your growth potential exponentially. That makes it a
                  no-brainer for Halen to strive for. Because the simple fact is
                  that by looking after our employees, they can then focus their
                  attention on our clients and look after them and what's in
                  their best interest.
                  <br />
                  <br />
                  An employee-centric culture allows you to give more to your
                  employees without significant costs to the company.
                  Structuring your organization around the well-being of your
                  employees can actually save you money down the line. Some of
                  the positive byproducts of such an environment include an
                  increase in productivity. A feeling of respect and
                  consideration makes an employee more invested in his duties,
                  which brings about a higher productivity level. Attracting
                  higher quality talent is also more likely because let's face
                  it, good news travels fast. And a company that supports its
                  employees in a meaningful way will always compete with one
                  that is only concerned with their profit margins. Because
                  there is value in being valued.
                </p>

                {/* <div className="tab about-list-tab">
                  //{/* Tabs Nav 
                  <ul className="tabs">
                    <li
                      className="current"
                      onClick={(e) => this.openTabSection(e, "tab1")}
                    >
                      <span>Our History</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab2")}>
                      <span>Our Mission</span>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab3")}>
                      <span>Friendly Support</span>
                    </li>
                  </ul>

                  {/* Tab content 
                  <div className="tab_content">
                    {/* Tabs item 
                    <div id="tab1" className="tabs_item">
                      <div className="text">
                        <h3>
                          How to generate your Creative Idea With IT Business
                        </h3>
                      </div>

                      <ul className="list">
                        <li>
                          <i className="flaticon-tick"></i>
                          The Philosophy of Business Analytics
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Fast Track Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Lies & Damn Lies About Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          The Ultimate Deal on Business
                        </li>
                      </ul>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan facilisis.
                      </p>

                      <Link href="/about">
                        <a className="default-btn">Discover More</a>
                      </Link>
                    </div>

                    {/* Tabs item 
                    <div id="tab2" className="tabs_item">
                      <div className="text">
                        <h3>
                          How to generate your Creative Idea With IT Business
                        </h3>
                      </div>

                      <ul className="list">
                        <li>
                          <i className="flaticon-tick"></i>
                          The Philosopy of Business Analytics
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Fast Track Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Lies & Damn Lies About Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          The Ultimate Deal on Business
                        </li>
                      </ul>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan facilisis.
                      </p>

                      <Link href="/about">
                        <a className="default-btn">Discover More</a>
                      </Link>
                    </div>

                    {/* Tabs item
                    <div id="tab3" className="tabs_item">
                      <div className="text">
                        <h3>
                          How to generate your Creative Idea With IT Business
                        </h3>
                      </div>

                      <ul className="list">
                        <li>
                          <i className="flaticon-tick"></i>
                          The Philosopy of Business Analytics
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Fast Track Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          Lies & Damn Lies About Your Business
                        </li>
                        <li>
                          <i className="flaticon-tick"></i>
                          The Ultimate Deal on Business
                        </li>
                      </ul>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan facilisis.
                      </p>

                      <Link href="/about">
                        <a className="default-btn">Discover More</a>
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;
