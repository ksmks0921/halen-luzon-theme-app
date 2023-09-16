import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectsStyleTwo from '../components/Projects/ProjectsStyleTwo';
import Footer from '../components/Layout/Footer';

class Projects2 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Projects Two" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Projects Style Two" 
                    bgImage="item-bg-3" 
                /> 

                <ProjectsStyleTwo />
                
                <Footer />
            </>
        );
    }
}

export default Projects2;