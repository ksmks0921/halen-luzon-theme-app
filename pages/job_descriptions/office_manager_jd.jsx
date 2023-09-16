// Import Libraries 
import React, { Component, Suspense } from 'react';

// Import Components 
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';

export default class office_manager_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Office Manager"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Office Manager"
            bgImage="item-bg-1"
            />
<div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Office Manager</h1>
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
                        <p>The Office Manager will organize and coordinate office administration and procedures, in order to ensure organizational effectiveness, efficiency and safety. The Office Manager is responsible for developing intra-office communication protocols, streamlining administrative procedures, inventory control, office staff supervision and task delegation.</p>
                        <p>Energetic professional who doesn't mind wearing multiple hats. Experienced in handling a wide range of administrative and executive support related tasks and able to work independently with little or no supervision. Well organized, flexible and enjoy the administrative challenges of supporting an office of diverse people.</p>
                        <hr />
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Point person for maintenance, mailing, shipping, supplies, equipment, bills and errands</li>
                            <li>Organize and schedule meetings and appointments</li>
                            <li>Partner with HR to maintain office policies as necessary</li>
                            <li>Organize office operations and procedures</li>
                            <li>Coordinate with IT department on all office equipment</li>
                            <li>Manage relationships with vendors, service providers and landlord, ensuring that all items are invoiced and paid on time</li>
                            <li>Manage contract and price negotiations with office vendors, service providers and office lease</li>
                            <li>Provide general support to visitors</li>
                            <li>Responsible for creating PowerPoint slides and making presentations</li>
                            <li>Manage executives' schedules, calendars and appointments</li>
                            <li>Responsible for managing office services by ensuring office operations and procedures are organized, correspondences are controlled, filing systems are designed, supply requisitions are reviewed and approved and that clerical functions are properly assigned and monitored</li>
                            <li>Establish a historical reference for the office by outlining procedures for protection, retention, record disposal, retrieval and staff transfers</li>
                            <li>Ensure office efficiency is maintained by carrying out planning and execution of equipment procurement, layouts and office systems</li>
                            <li>Responsible for developing and implementing office policies by setting up procedures and standards to guide the operation of the office</li>
                            <li>Ensure that results are measured against standards, while making necessary changes along the way</li>
                            <li>Allocate tasks and assignments to subordinates and monitor their performance</li>
                            <li>Assign and monitor clerical, administrative and secretarial responsibilities and tasks among office staff</li>
                            <li>Perform review and analysis of special projects and keep the management properly informed</li>
                            <li>Responsible for recruiting staff for the office and providing orientation and training to new employees</li>
                            <li>Ensure top performance of office staff by providing them adequate coaching and guidance</li>
                            <li>Remain updated on technical and professional knowledge</li>
                            <li>Responsible for ensuring office financial objectives are met by preparing annual budget for the office, planning the expenditures, analyzing variances and carrying out necessary corrections that may arise</li>
                            <li>Participate actively in the planning and execution of company events</li>
                            <li>Responsible for developing standards and promoting activities that enhance operational procedures</li>
                            <li>Coordinate office staff activities to ensure maximum efficiency</li>
                            <li>Evaluate and manage staff performance</li>
                            <li>Recruit and select office staff</li>
                            <li>Organize orientation and training of new staff members</li>
                            <li>Coach, mentor and discipline office staff</li>
                            <li>Design and implement filing systems=</li>
                            <li>Ensure filing systems are maintained and current=</li>
                            <li>Establish and monitor procedures for record keeping</li>
                            <li>Ensure security, integrity and confidentiality of data=</li>
                            <li>Design and implement office policies and procedures</li>
                            <li>Oversee adherence to office policies and procedures</li>
                            <li>Implement procedural and policy changes to improve operational efficiency</li>
                            <li>Prepare operational reports and schedules to ensure efficiency</li>
                            <li>Coordinate schedules, appointments and bookings</li>
                            <li>Monitor and maintain office supplies inventory</li>
                            <li>Review and approve office supply acquisitions</li>
                            <li>Manage internal staff relations</li>
                            <li>Maintain a safe and secure working environment</li>
                        </ul>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>Proven office management, administrative or assistant experience</li>
                            <li>Bachelor’s Degree</li>
                            <li>Knowledge of office management responsibilities, systems and procedures</li>
                            <li>Excellent time management skills and ability to multi-task and prioritize work</li>
                            <li>Attention to detail and problem solving skills</li>
                            <li>Excellent written and verbal communication skills</li>
                            <li>Strong organizational and planning skills</li>
                            <li>Proficient in MS Office</li>
                            <li>Knowledge of accounting, data and administrative management practices and procedures</li>
                            <li>Knowledge of clerical practices and procedures</li>
                            <li>Knowledge of human resources management practices and procedures</li>
                            <li>Knowledge of business and management principles</li>
                            <li>Computer skills and knowledge of office software packages</li>
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