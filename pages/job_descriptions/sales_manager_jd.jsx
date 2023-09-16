// Import Libraries 
import React, { Component } from 'react';

// Import Components 
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';

export default class sales_manager_jd extends Component {
    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Sales Manager"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Sales Manager"
            bgImage="item-bg-1"
            />

                <div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Sales Manager</h1>
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
                        <p>Responsible for leading sales teams to reach sales targets. Primarily tasked with hiring and training team members, setting quotas, evaluating and adjusting performance, and developing processes that drive sales.</p>
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Recruit, hire, and train sales team</li>
                            <li>Set sales goals, compare performance to goals, and adjust goals as needed</li>
                            <li>Assess current team processes and procedures, identify opportunities for improvement, and implement them</li>
                            <li>Develop individual quotas and assign territories for team members</li>
                            <li>Provide detailed and accurate sales forecasts</li>
                            <li>Coach, mentor, and provide feedback to team members</li>
                            <li>Foster a competitive yet collaborative team environment</li>
                            <li>Assess individual performance through observation and measurement, and suggest corrective actions as needed</li>
                        </ul>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>Bachelor's degree in Business, Marketing, Communications, or related field</li>
                            <li>5 years of experience in sales</li>
                            <li>Strong oral and written communication skills</li>
                            <li>Proven ability to lead a team to meet quotas</li>
                            <li>Excellent leadership skills</li>
                            <li>Experience setting sales goals</li>
                            <li>Results-oriented with strong analytical skills</li>
                            <li>Deep understanding of CRM systems and best practices</li>
                            <li>Proficient in Microsoft Office</li>
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