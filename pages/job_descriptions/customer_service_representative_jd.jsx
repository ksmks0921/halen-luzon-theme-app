// Import Libraries 
import React, { Component, Suspense } from 'react';

// Import Components 
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';

export default class customer_service_representative_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Customer Service Representative"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Customer Service Representative"
            bgImage="item-bg-1"
            />

<div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Customer Service Representative</h1>
                            </div> 
                            <div className="col-sm-7">
                                <p className="job-sub-description">Remote, Fulltime<br /> October 24, 2020</p>
                            </div>
                            <div className="col-sm-5">
                            <button className="default-btn" style={{border: "none", float: "right"}}>Apply For This Position</button>
                            </div>
                        </div>
                        <hr />
                        <p>We are hiring a Customer Service Representative to manage customer queries and complaints. You will also be asked to process orders, modifications, and escalate complaints across a number of communication channels. To do well in this role you need to be able to remain calm when customers are frustrated and have experience working with computers.</p>
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Maintaining a positive, empathetic and professional attitude toward customers at all times.</li>
                            <li>Responding promptly to customer inquiries.</li>
                            <li>Communicating with customers through various channels.</li>
                            <li>Acknowledging and resolving customer complaints.</li>
                            <li>Knowing our products inside and out so that you can answer questions.</li>
                            <li>Processing orders, forms, applications, and requests.</li>
                            <li>Keeping records of customer interactions, transactions, comments and complaints.</li>
                            <li>Communicating and coordinating with colleagues as necessary.</li>
                            <li>Providing feedback on the efficiency of the customer service process.</li>
                            <li>Managing a team of junior customer service representatives.</li>
                            <li>Ensure customer satisfaction and provide professional customer support.</li>
                        </ul>
                        <br />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>High school diploma, general education degree or equivalent.</li>
                            <li>Ability to stay calm when customers are stressed or upset.</li>
                            <li>Comfortable using computers.</li>
                            <li>Experience working with customer support.</li>
                        </ul>
                        <br />
                        <h4>Perks</h4>
                        <p>Halen full-time employees receive complete and competitive benefits. We offer a collaborative work environment, competitive compensation, generous work/life opportunities and an outstanding benefits package that includes paid time off plus holidays. In addition, all colleagues are eligible for a number of rewards and recognition programs including billable bonus opportunities. Encouraging a healthy work/life balance and providing our colleagues great benefits are just part of what makes Halen a great place to work.</p>
                    </div>
                </div>
                <Footer />
</>
        );
    }
}