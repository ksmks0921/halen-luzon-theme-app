// Import Libraries 
import React, { Component, Suspense } from 'react';

// Import Components 
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';

export default class chief_of_staff_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Chief Of Staff"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Chief Of Staff"
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
                        <h4>Summary</h4>
                        <p>A Chief of Staff manages the day-to-day affairs of an organization, managing office disputes and solving problems whileleading and supporting the entire staff.</p>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>Bachelor’s degree; MBA a plus but not required</li>
                            <li>5-7+ years of business development, corporate strategy and/or executive management experience</li>
                            <li>Strongly developed written and verbal communication skills</li>
                            <li>Organization and planning skills</li>
                            <li>Ability to diffuse work conflict without bringing it to the attention of the executive leader using strong interpersonal skills</li>
                            <li>Ability to successfully manage multiple projects simultaneously</li>
                            <li>Excellent problem-solving skills</li>
                            <li>Highly resourceful</li>
                            <li>Strong emotional intelligence</li>
                            <li>Self-motivation</li>
                            <li>Excellent analytical skills</li>
                            <li>Strategic mindset</li>
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