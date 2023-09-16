// Import Libraries 
import React, { Component, Suspense } from 'react';

// Import Components 
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import PageBanner from '../../components/Common/PageBanner';

export default class event_director_jd extends Component {

    render() {
        return (
            <>
            <Navbar />

            <PageBanner
            pageTitle="Event Director"
            homePageUrl="/"
            homePageText="Careers"
            activePageText="Event Director"
            bgImage="item-bg-1"
            />

<div className="main-content" style={{padding: "20px"}}>
                    <div className="container" id="career-main">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Event Director</h1>
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
                        <p>Analyzes financial status by collecting, monitoring, and studying data; recommending actions.</p>
                        <hr />
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Monitors the progress of the planning and execution of each task that has to do with the event</li>
                            <li>Have a clear understanding of what the event is all about from the host  i.e. how exactly he/she wants the event to be organized (taste of the client)</li>
                            <li>Serves as a link between the event (actually the host of the event) and external bodies</li>
                            <li>Provides recruitment and training/coaching for the organizing committee for the purpose of an event</li>
                            <li>Development of general event management policies</li>
                            <li>Supervision of the production process of an event</li>
                            <li>Make sure that staff and work personnel at the event adhere to the management policies that were put in place to minimize hiccups during the course of the event.</li>
                        </ul>
                        <hr />
                        <h4>Basic Qualifications</h4>
                        <ul>
                            <li>Excellent communication skills</li>
                            <li>Must be creative and able to prioritize tasks in the face of many challenges</li>
                            <li>Must possess a degree in any hospitality-related field</li>
                            <li>A minimum of 2 years working experience in event management/planning/directing.</li>
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