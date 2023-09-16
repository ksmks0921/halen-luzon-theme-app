import React, { Component } from "react";

class aboutCEO extends Component {
  render() {
    return (
      <section className="about-section ">
        <div className="container-fluid">
          <div
            className="row justify-content-md-center"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <div className="col-lg-6">
              <h2
                style={{
                  textAlign: "center",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                A message from the CEO
              </h2>
              <div className="bar"></div>

              <div>
                <div
                  className="about-ceo-image"
                  style={{ textAlign: "center" }}
                >
                  <img
                    alt="Chief Executive Officer"
                    src="/images/aboutCeo/ceo_image_new.webp"
                  />
                </div>
              </div>
              <div>
                <p
                  style={{
                    paddingTop: "20px",
                    color: "black",
                    textAlign: "justify",
                  }}
                >
                  October 17, 2022{" "}
                </p>
                <p style={{ color: "black" }}>Dear Friends,</p>
                <p style={{ color: "black", textAlign: "justify" }}>
                  Welcome to Halen. We're a user-friendly “Super-App” anchored by a franchise business model.
A stand-alone platform, built from the ground up and not connected to existing competitors. 
The application empowers our clients 
to combine all their rideshare, vacation rental, flight booking, grocery, 
restaurant, and retail mobile delivery services into one app. Coming summer 2023,
                  we'll offer essential everyday services to over 360 million
                  people across the United States, and will also target foreign
                  markets such as Canada by 2026. It's our mission to drive our
                  communities forward via economic empowerment for everyone.{" "}
                  <br />
                  <br />
                  As an immigrant from Tanzania who proudly made the United
                  States my home, I see this great nation as a land of
                  opportunity, where each of us can support each other for a
                  happier, healthier and sustainable future. My story in
                  business ownership began many years ago in the transportation
                  and hospitality sector as a limousine driver, and later owner
                  of one of the largest livery services in the nation. As with
                  anything in life, my life has had its ups and downs, however,
                  meeting people from all walks of life, seeing this great
                  country up close and personal, and giving someone a helping
                  hand when in need, even if it was only in the form of four
                  wheels, humbled me and taught me how important - and how easy
                  it is - to help each other.
                  <br />
                  <br />
                  Halen was designed for us to help each other. It incorporates
                  all of my life experiences, values and lessons, and pays
                  success forward to future generations who dare to dream. Halen
                  has chosen the franchise model for community servicing as this
                  model will better serve our diverse communities and
                  backgrounds. Local franchise operators can more easily
                  identify the unique needs of each region and client base,
                  communicate and serve their needs, and foster both personal
                  and business growth.
                  <br />
                  <br />
                  There's an old saying that goes… “necessity is the mother of
                  invention.” Since this tragic pandemic has upended our world
                  in ways we couldn't imagine, safe ridesharing and retail
                  delivery services have become paramount to our lives, and to
                  our health and community sustainability. These innovations,
                  alongside hospitality and online services, are now necessary
                  for our society to thrive. But, there's room to grow, room to
                  innovate, and room to offer more secure services to customers
                  and businesses. With a purpose of localized service and
                  development via franchise business management, Halen will
                  enter the marketplace in summer 2023 poised to lead the sector.
                  <br />
                  <br />
                  Our purpose will be to:
                </p>{" "}
                <ul>
                  <li style={{ marginLeft: "50px" }}>
                    <p style={{ color: "black", textAlign: "justify" }}>
                      Benefit clients: Halen will consolidate the most important
                      services for our clients into one user friendly app, while
                      simultaneously minimizing the exposure of personal and
                      financial information to potential theft or compromise.
                    </p>
                  </li>
                  <br />
                  <li style={{ marginLeft: "50px" }}>
                    <p style={{ color: "black", textAlign: "justify" }}>
                      Benefit community: Halen's franchise business model will
                      put a "home office" in every community it serves. They
                      will provide round the clock customer service to clients,
                      drivers, and merchants, as well as orchestrate a variety
                      of community-based services.
                    </p>
                  </li>
                  <br />
                  <li style={{ marginLeft: "50px" }}>
                    <p style={{ color: "black", textAlign: "justify" }}>
                      Benefit drivers: Halen will provide a versatile array of
                      gig opportunities which can be tailored to each individual
                      driver's needs on an ongoing basis. This will also
                      minimize downtime, thus providing a more lucrative income
                      stream.
                    </p>
                  </li>
                </ul>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <img
                  src="/images/aboutCeo/signature.png"
                  style={{ width: "200px" }}
                />
                <p style={{ color: "black" }}>Chief Executive Officer </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default aboutCEO;
