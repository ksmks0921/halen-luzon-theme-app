// Import Libraries
import React, { Component, Suspense } from 'react';

import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import "bootstrap-icons/font/bootstrap-icons.css";
import SocialLinks from '../../components/Careers/SocialLinks';

export default class api_developer_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="API Developer"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="API Developer"
            bgImage="item-bg-1"
            />
                <div className="main-content" style={{paddingBottom: "80px",paddingTop: "60px",display: "flex",flexDirection: "row"}}>
                    <div className="container" id="career-main" style={{width: "55%"}}>
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Senior API Developer</h3>
                            </div>
                            <br />
                            <div className="col-sm-7">
                                <p className="job-sub-description">Remote, Fulltime<br /> October 24, 2020</p>
                            </div>
                            <div className="col-sm-5">
                                <div style={{float: "right"}}>
                                <button className="default-btn" style={{border: "none"}}>Apply For This Position</button>
                          </div>

                            </div>
                        </div>
                        <hr />
                        <h4>Summary</h4>
                        <p>The right candidate will have the opportunity to work on multiple components of our state-of-the-art platform (a one stop shop app for rideshare, grocery, restaurant, and retail delivery)</p>
                        <hr />
                        <h4>Job Overview</h4>
                        <p>As a Senior API Developer you will participate in all aspects of the software development lifecycle which includes estimating, technical design, implementation, documentation, testing, deployment, and support of our applications. As a member working in a team environment you will take direction from solution architects and Leads on development activities.</p>
                        <hr />
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Responsible for designing, programming, coding of complex and business critical Information Technology solutions using Nodejs</li>
                            <li>Responsible for documentation of the system, conduct unit tests, peer code reviews and maintenance of internally developed applications, evaluation, and performance testing of purchased products</li>
                            <li>Responsible for including IT Controls to protect the confidentiality, integrity, as well as availability of the application and data processed or output by the application.</li>
                            <li>Write code for the most complex system designs and provides consultative guidance on project with extensive size, scope, and risk. Write programs that span platforms. Code to and/or create RESTful APIs</li>
                            <li>Develops micro services and has extensive experience using GitLab, Jenkins, PM2, Clustering, other tools, and technologies for developing a scalable application</li>
                            <li>Work on integration issues and determines the integration approach. Coordinate with other areas for integration architecture solutions</li>
                            <li>Review code developed by other Developers</li>
                            <li>Write detailed technical specifications for entire systems (made up of several subsystems). Identify integration points. Review technical specs created by other developers.</li>
                            <li>"Scope" time, resources, etc. required to complete programming projects. Seek review from other Developers, Business Analysts, Systems Analysts or Project Managers on estimates</li>
                            <li>Perform unit testing and debugging. Able to debug most program errors</li>
                            <li>Support transition of application throughout the Product Development life cycle. Document what must be migrated. Often requires more coordination points for transitioning systems. Document what must be migrated / file properties</li>
                            <li>Demonstrate the ability to adapt and work with team members of various experience level</li>
                        </ul>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>6+ years of Software Design and Development experience developing REST APIs</li>
                            <li>Node.js experience</li>
                            <li>Strong JavaScript language understanding - Promises, ECMAScript 6, some functional programming knowledge</li>
                            <li>Experience consuming an array of web services: XML / SOAP / JSON</li>
                            <li>Understanding the nature of asynchronous programming and its quirks and workarounds</li>
                            <li>4-7 Experience working with AWS serverless</li>
                            <li>3-5 years of experience using CI-CD tools, containerized deployments, and cloud architecture</li>
                            <li>Understands the security risk using npm modules</li>
                            <li>Experience building Serverless applications on AWS using AWS SAM, API Gateway, Lambda, SQS, SNS, Kinesis, Cognito, DynamoDB, IAM Roles/Permissions.</li>
                            <li>Good understanding of micro services architecture and OOPS concepts clarity</li>
                            <li>Working experience using GitLab, Jenkins, PM2 and similar tools and technologies</li>
                            <li>Expert level experience and understanding with unit testing, release procedures, coding design and documentation protocol as well as change management procedures.</li>
                            <li>Experience developing web-based user interface for business applications</li>
                            <li>Integration experience using web services - SOAP and/or REST.</li>
                            <li>Strong debugging, problem solving and investigative skills. Ability to assimilate disparate information (log files, error messages etc.) and pursue leads to find root cause problems.</li>
                            <li>Experience with Agile/Scrum methodology.</li>
                            <li>Self-starter who can work independently.</li>
                            <li>Bachelor’s Degree in MIS, Computer Science, Math, Engineering or comparable major.</li>
                            <li>Strong consulting and communication skills. Ability to work effectively with various organizations in pursuit of problem solutions.</li>
                        </ul>
                        <hr />
                        <h4>Perks</h4>
                        <p>Halen full-time employees receive complete and competitive benefits. We offer a collaborative work environment, competitive compensation, generous work/life opportunities and an outstanding benefits package that includes paid time off plus holidays. In addition, all colleagues are eligible for a number of rewards and recognition programs including billable bonus opportunities. Encouraging a healthy work/life balance and providing our colleagues great benefits are just part of what makes Halen a great place to work.</p>
                    </div>
                    <div className="container" id="career-main" style={{width: "25%"}}>
                        <h3>Share This Job<br/>
                            <SocialLinks postText={"Senior API Developer position at Halen!"}/>
                        </h3>
                        <hr/>
                        <h3>Related Jobs</h3>
                        <a href="http://localhost:3000/job_descriptions/api_developer_jd/">Security Engineer</a><br/>
                        <a href="http://localhost:3000/job_descriptions/api_developer_jd/">Senior Node JS Developer</a>
                    </div>
                </div>
                <Footer />
                </>

        );
    }
}