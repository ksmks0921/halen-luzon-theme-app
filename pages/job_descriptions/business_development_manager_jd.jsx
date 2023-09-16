// Import Libraries 
import React, { Component, Suspense } from 'react';

// Import Components 
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';

export default class business_development_manager_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Business Development Manager"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Business Development Manager"
            bgImage="item-bg-1"
            />

                <div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>Business Development Manager</h3>
                            </div>
                            <div className="col-sm-7">
                                <p className="job-sub-description">Remote, Fulltime<br /> October 24, 2020</p>
                            </div>
                            <div className="col-sm-5">
                            <button className="default-btn" style={{border: "none", float: "right"}}>Apply For This Position</button>
                            </div>
                        </div>
                        <hr />
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Developing growth strategies and plans</li>
                            <li>Managing and retaining relationships with existing clients</li>
                            <li>Increasing client base</li>
                            <li>Having an in-depth knowledge of business products and value proposition</li>
                            <li>Writing business proposals</li>
                            <li>Negotiating with stakeholders</li>
                            <li>Identifying and mapping business strengths and customer needs</li>
                            <li>Researching business opportunities and viable income streams</li>
                            <li>Following industry trends locally and internationally</li>
                            <li>Drafting and reviewing contracts</li>
                            <li>Reporting on successes and areas needing improvements</li>
                        </ul>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>High-level communication skills</li>
                            <li>Stakeholder management skills</li>
                            <li>Proven ability to negotiate</li>
                            <li>Experience with design and implementation of business development strategy</li>
                            <li>Conflict resolution</li>
                            <li>The ability to self-motivate and motivate a team</li>
                            <li>Experience working to and exceeding targets</li>
                            <li>Bachelor's degree in marketing, communications, business or a related field</li>
                            <li>Proven sales experience in a related product or service</li>
                            <li>Exceptional communication and presentation skills, and ability to express technical and nontechnical concepts clearly and concisely</li>
                            <li>Expert understanding of service and product, and ability to innovate new ways the product can serve customers</li>
                            <li>Excellent organizational skills to meet goals and set priorities</li>
                            <li>Innate drive to succeed and take initiative</li>
                            <li>Strong organizational talents and ability to work under pressure and in new environments</li>
                        </ul>
                        <hr />
                        <h4>Perks</h4>
                        <p>Halen full-time employees receive complete and competitive benefits. We offer a collaborative work environment, competitive compensation, generous work/life opportunities and an outstanding benefits package that includes paid time off plus holidays. In addition, all colleagues are eligible for a number of rewards and recognition programs including billable bonus opportunities. Encouraging a healthy work/life balance and providing our colleagues great benefits are just part of what makes Halen a great place to work.</p>
                    </div>
                </div>
                <Footer />
</>
        );
    }
}