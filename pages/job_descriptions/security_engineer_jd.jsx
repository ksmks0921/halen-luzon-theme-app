// Import Libraries 
import React, { Component, Suspense } from 'react';

import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import SocialLinks from '../../components/Careers/SocialLinks';

export default class security_engineer_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Security Engineer"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Security Engineer"
            bgImage="item-bg-1"
            />
                <div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Security Engineer</h1>
                            </div>
                            <div className="col-sm-7">
                                <p className="job-sub-description">Remote, Fulltime<br /> October 24, 2020</p>
                            </div>
                            <div className="col-sm-5">
                                <button className="default-btn" style={{border: "none", float: "right"}}>Apply for this job</button>
                            </div>
                        </div>
                        <hr />
                        <h4>Job Overview</h4>
                        <p>The Security Engineer will work cross functionally with the Information Technology, People and Culture, Communications, Legal, and eCommerce teams. This position requires technical proficiency as well as an eager attitude, professionalism, and solid communication skills.</p>
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Analyze security systems and seek improvements on a continuous basis</li>
                            <li>Report possible threats or software issues</li>
                            <li>Research weaknesses and find ways to counter them</li>
                            <li>Find cost-effective solutions to cybersecurity problems</li>
                            <li>Understand software, hardware and internet needs while adjusting them according to our business environment</li>
                            <li>Develop best practices and security standards for the organization</li>
                            <li>Test company software, firmware and firewalls</li>
                            <li>Assist fellow employees with cybersecurity, software, hardware or IT needs</li>
                        </ul>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>Ability to prioritize projects</li>
                            <li>Comfortable working in a fast-paced environment</li>
                            <li>Excellent communication skills</li>
                            <li>Certifications such as CISSP, GSEC, CEH or CISM desired</li>
                            <li>An understanding of best practices and how to implement them at a business-wide level</li>
                            <li>At least 2 years' experience in the cybersecurity industry</li>
                            <li>Public Trust security clearance, or a willingness to obtain one</li>
                            <li>Critical thinking skills and the ability to solve problems as they arise</li>
                            <li>Basic coding skills, such as HTML, CSS and other languages</li>
                        </ul>
                        <hr />
                        <h4>Required Experience</h4>
                        <p>A knowledgeable engineer who can serve as an effective member of the IT organization, communicate with both technical and non-technical individuals about risks, threats, vulnerabilities, mitigations, remediations, and controls</p>
                        <ul>
                            <li>5+ years experience developing and administering an information security program. Retail experience preferred.</li>
                            <li>Expert knowledge of the PCI-DSS and working knowledge of government privacy, and Sarbanes-Oxley requirements.</li>
                            <li>Must have experience with auditing, risk management, and contract and vendor negotiation.</li>
                            <li>Excellent time management skills with ability to manage projects and security/business continuity incidents sometimes under tight deadlines.</li>
                            <li>Hands-on experience with Systems Administration and/or IP Networking</li>
                            <li>Advanced certifications including CISSP</li>
                            <li>Experience with maintaining AWS Organization's Service Control Policies (SCP), and common AWS Identity & Access Management (IAM) roles and policies.</li>
                            <li>Experience with securing AWS and Linux environments, preferably in a regulated environment subject to HIPAA or PCI-DSS</li>
                            <li>An automation-first mindset</li>
                            <li>Demonstrated ability to work with diverse groups of people</li>
                        </ul>
                        <hr />
                        <h4>Perks</h4>
                        <p>Halen full-time employees receive complete and competitive benefits. We offer a collaborative work environment, competitive compensation, generous work/life opportunities and an outstanding benefits package that includes paid time off plus holidays. In addition, all colleagues are eligible for a number of rewards and recognition programs including billable bonus opportunities. Encouraging a healthy work/life balance and providing our colleagues great benefits are just part of what makes Halen a great place to work.</p>
                    </div>
                    <div className="container" id="career-main" style={{width: "15%"}}>
                        <h3>Share This Job</h3>
                                <SocialLinks postText={"Security Engineer position at Halen!"}/>
                        <h3>Related Jobs</h3>
                        <a href="http://localhost:3000/job_descriptions/api_developer_jd/">Senior API Developer</a><br/>
                        <a href="http://localhost:3000/job_descriptions/api_developer_jd/">Senior Node JS Developer</a>
                    </div>
                </div>
                <Footer />
</>
        );
    }
}