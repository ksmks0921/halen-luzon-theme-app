// Import Libraries 
import React, { Component, Suspense } from 'react';

// Import Components 
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';

export default class corporate_paralegal_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Corporate Paralegal"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Corporate Paralegal"
            bgImage="item-bg-1"
            />

<div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Corporate Paralegal</h1>
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
                        <p>The candidate will prepare and manage files and documents, including initial and renewal license, permit applications, to ensure that firm compliance requirements are met with regard to multiple lines of business. Help determine which licenses firm must obtain before launching a business line in a new market. Ensure that all of firm licenses and permits are valid, up to date, and timely renewed. Oversee the maintenance of compliance records and data. Liaise with other teams within the Company and external parties regarding licensing matters. Assist team members with issues, questions and research related to licensing and other compliance issues.</p>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>The candidate must have Bachelor’s degree and 2+ years’ relevant paralegal or compliance experience.</li>
                            <li>Technical Savvy - Should have proficiency working in a Mac environment, and specifically with Google Apps (Gmail, Calendar, Docs, Sheets, etc.), Excel, Adobe Acrobat and Word.</li>
                            <li>Must have excellent problem-solving capabilities, judgment, communication (written and verbal) and interpersonal skills.</li>
                            <li>Should have ability to operate autonomously while being a team player who brings a positive attitude to the workplace.</li>
                            <li>Should have ability to think quickly on your feet, convey grace under pressure, and simultaneously manage complex workloads, multiple client demands, and shifting priorities.</li>
                            <li>Should have an understanding of the transportation and ridesharing industries, as well as the sharing economy in general.</li>
                            <li>Be a resourceful self-starter and have a passion for results.</li>
                            <li>Embody Halen's culture, and operate with high standards and ethics.</li>
                            <li>Performing legal research - Flexible and adaptable to changing priorities.</li>
                            <li>Excellent business judgment, communication, and interpersonal skills.</li>
                            <li>Electronically maintaining and organizing employment- and privacy-related legal files.</li>
                            <li>Updating and implementing changes to HR- and privacy-related templates, policies, training materials and other documents</li>
                            <li>Reliable & Highly motivated.</li>
                            <li>Able to maintain confidentiality and discretion.</li>
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