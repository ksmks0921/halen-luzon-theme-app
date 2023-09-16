import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import Footer from '../components/Layout/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="Service Details" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Service Details" 
                    bgImage="item-bg-1" 
                /> 

                <ServiceDetailsContent />
         
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;