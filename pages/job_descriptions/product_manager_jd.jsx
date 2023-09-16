// Import Libraries 
import React, { Component, Suspense } from 'react';

import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';


export default class project_manager_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Product Manager"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Product Manager"
            bgImage="item-bg-1"
            />
<div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Product Manager</h1>
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
                        <p>The Product Manager is responsible for both product planning and product marketing. This includes managing the product throughout the Product Lifecycle, gathering and prioritizing product and customer requirements, defining the product vision, and working closely with engineering, to deliver winning products. It also includes working with sales, marketing and support to ensure revenue and customer satisfaction goals are met. The Product Manager’s job also includes ensuring that the product and marketing efforts support the company’s overall strategy and goals.</p>
                        <hr />
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Define the product strategy and roadmap</li>
                            <li>Deliver MRDs and PRDs with prioritized features and corresponding justification</li>
                            <li>Work with external third parties to assess partnerships and licensing opportunities</li>
                            <li>Be an expert with respect to the competition</li>
                            <li>Develop the core positioning and messaging for the product</li>
                            <li>Perform product demos to customers</li>
                            <li>Set pricing to meet revenue and profitability goals</li>
                            <li>Deliver a monthly revenue forecast</li>
                            <li>Develop sales tools and collateral</li>
                            <li>Propose an overall budget to ensure success</li>
                            <li>Brief and train the sales force at quarterly sales meetings</li>
                            <li>Brief press and analysts and go on press tours</li>
                            <li>Act as a leader within the company</li>
                        </ul>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>Minimum of 5 years experience as a Product Manager or Product Marketing Manager</li>
                            <li>Demonstrated success defining and launching excellent products</li>
                            <li>Excellent written and verbal communication skills</li>
                            <li>Bachelor’s degree (MBA preferred)</li>
                            <li>Technical background, with experience in mobile applications</li>
                            <li>Excellent teamwork skills</li>
                            <li>Proven ability to influence cross-functional teams without formal authority</li>
                            <li>Examples and at least one sample of an effective document delivered in the past</li>
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