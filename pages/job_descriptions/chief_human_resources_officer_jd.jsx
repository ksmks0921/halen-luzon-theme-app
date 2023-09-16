// Import Libraries 
import React, { Component, Suspense } from 'react';

// Import Components 
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';

export default class chief_human_resources_officer_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Chief Human Resources Officer"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Chief Human Resources Officer"
            bgImage="item-bg-1"
            />

<div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Chief Human Resources Officer Manager</h1>
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
                            <li>Crafting talent acquisition strategies to build strong pipelines for future hiring needs</li>
                            <li>Formulating career development plans</li>
                            <li>Promoting inclusion in the workplace and reinforcing our position as an equal opportunity employer</li>
                            <li>Craft talent acquisition strategies to build strong pipelines for future hiring needs</li>
                            <li>Formulate career development plans</li>
                            <li>Promote inclusion in the workplace and reinforce our position as an equal opportunity employer</li>
                            <li>Ensure our hiring, onboarding and management procedures are effective for diverse groups</li>
                            <li>Lead employer branding efforts (like recruitment marketing)</li>
                            <li>Supervise HR Directors</li>
                            <li>Evaluate training and development programs</li>
                            <li>Develop HR policies for all branches, countries, regions</li>
                            <li>Ensure HR plans align with our mission and business objectives</li>
                        </ul>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>Work experience as a Chief HR Officer, VP of HR or similar role</li>
                            <li>Experience in strategic planning</li>
                            <li>In-depth knowledge of all HR functions</li>
                            <li>Hands-on experience with HR software (HRIS, ATS)</li>
                            <li>Good understanding of labor legislation</li>
                            <li>Excellent leadership abilities</li>
                            <li>Communication and problem-solving skills</li>
                            <li>BSc/MSc in Human Resources Management, Organizational Psychology or relevant field</li>
                            <li>Certification like PHR and SPHR is a plus</li>
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