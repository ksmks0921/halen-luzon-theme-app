// Import Libraries 
import React, { Component, Suspense } from 'react';

// Import Components 
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';

export default class chief_financial_officer_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Chief Financial Officer"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Chief Financial Officer"
            bgImage="item-bg-1"
            />

<div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Chief Financial Officer </h1>
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
                        <p>Develops financial well-being of the organization by providing financial projections and accounting services, preparing growth plans, and directing staff.</p>
                        <hr />
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Accomplishes finance human resource strategies by determining accountabilities; communicating and enforcing values, policies, and procedures; implementing recruitment, selection, orientation, training, coaching, counseling, disciplinary, and communication programs; planning, monitoring, appraising, and reviewing job contributions; and planning and reviewing compensation strategies.</li>
                            <li>Develops finance organizational strategies by contributing financial and accounting information, analysis, and recommendations to strategic thinking and direction and establishing functional objectives in line with organizational objectives.</li>
                            <li>Establishes finance operational strategies by evaluating trends; establishing critical measurements; determining production, productivity, quality, and customer-service strategies; designing systems; accumulating resources; resolving problems; and implementing change.</li>
                            <li>Develops organization prospects by studying economic trends and revenue opportunities; projecting acquisition and expansion prospects; analyzing organization operations; identifying opportunities for improvement, cost reduction, and systems enhancement; and accumulating capital to fund expansion.</li>
                            <li>Develops financial strategies by forecasting capital, facilities, and staff requirements; identifying monetary resources; and developing action plans.</li>
                            <li>Monitors financial performance by measuring and analyzing results, initiating corrective actions, and minimizing the impact of variances.</li>
                            <li>Maximizes return on invested funds by identifying investment opportunities and maintaining relationships with the investment community.</li>
                            <li>Reports financial status by developing forecasts, reporting results, analyzing variances, and developing improvements.</li>
                            <li>Updates job knowledge by remaining aware of new regulations, participating in educational opportunities, reading professional publications, maintaining personal networks, and participating in professional organizations.</li>
                            <li>Accomplishes finance and organization mission by completing related results as needed.</li>
                        </ul>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>Financial planning and strategy</li>
                            <li>Managing profitability</li>
                            <li>Strategic planning and vision</li>
                            <li>Quality management</li>
                            <li>Promotion of process improvement</li>
                            <li>Forecasting</li>
                            <li>Corporate finance</li>
                            <li>Budget development</li>
                            <li>MBA or bachelor’s degree in business, finance, accounting, or equivalent experience.</li>
                            <li>Master’s degree preferred.</li>
                            <li>Certified Public Accountant certification a plus.</li>
                            <li>Minimum 10 years’ experience in accounting and financial management practices.</li>
                            <li>Experience in a senior management position.</li>
                            <li>Proficiency with accounting software, word processing, and spreadsheets.</li>
                            <li>Solid GAAP and financial reporting technical skills.</li>
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