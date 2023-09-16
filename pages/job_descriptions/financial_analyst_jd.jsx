// Import Libraries 
import React, { Component, Suspense } from 'react';

// Import Components 
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';

export default class financial_analyst_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Financial Analyst"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Financial Analyst"
            bgImage="item-bg-1"
            />
<div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Financial Analyst</h1>
                            </div>
                            <div className="col-sm-7">
                                <p className="job-sub-description">Remote, Fulltime<br /> October 24, 2020</p>
                            </div>
                            <div className="col-sm-5">
                            <button className="default-btn" style={{border: "none", float: "right"}}>Apply For This Position</button>
                            </div>
                        </div>
                        <hr />
                        <p>Analyzes financial status by collecting, monitoring, and studying data; recommending actions.</p>
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Determines cost of operations by establishing standard costs; collecting operational data.</li>
                            <li>Identifies financial status by comparing and analyzing actual results with plans and forecasts.</li>
                            <li>Guides cost analysis process by establishing and enforcing policies and procedures; providing trends and forecasts; explaining processes and techniques; recommending actions.</li>
                            <li>Improves financial status by analyzing results; monitoring variances; identifying trends; recommending actions to management.</li>
                            <li>Reconciles transactions by comparing and correcting data.</li>
                            <li>Maintains database by entering, verifying, and backing up data.</li>
                            <li>Recommends actions by analyzing and interpreting data and making comparative analyses; studying proposed changes in methods and materials.</li>
                            <li>Increases productivity by developing automated accounting applications; coordinating information requirements.</li>
                            <li>Protects operations by keeping financial information confidential.</li>
                            <li>Maintains technical knowledge by attending educational workshops; reviewing publications.</li>
                            <li>Contributes to team effort by accomplishing related results as needed.</li>
                        </ul>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>Corporate Finance, Developing Standards, Quality Management, Problem Solving, Process Improvement, Cost Accounting, Statistical Analysis, Financial Planning and Strategy, Reporting Research Results, Requirements Analysis, Financial Skills</li>
                            <li>0-3+ years of business finance or other relevant experience</li>
                            <li>High proficiency in financial modeling techniques</li>
                            <li>Strong fluency with Excel formulas and functions</li>
                            <li>BA, BS, or B.Com degree required (Bachelor’s Degree in Accounting/Finance/Economics)</li>
                            <li>Strong analytical and data gathering skills</li>
                            <li>Good business acumen</li>
                            <li>3-5+ years of business finance or other relevant experience</li>
                            <li>MBAs are preferred</li>
                            <li>Finance, Accounting, Economics, or Statistics are preferred major fields</li>
                            <li>Proven work experience in a quantitatively-heavy role</li>
                            <li>FMVA or similar designations preferred</li>
                            <li>Strong quantitative and analytical competency</li>
                            <li>Self-starter with excellent interpersonal communication and problem-solving skills</li>
                            <li>Advanced knowledge of Excel</li>
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