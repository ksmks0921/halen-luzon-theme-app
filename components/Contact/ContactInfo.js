import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-box pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-contact-box">
                                <i className="flaticon-pin"></i>
                                <div className="content-title">
                                    <h3>Address</h3>
                                    <p>1007 N. Market St, Suite G20 124<br /> Wilmington, DE 19801</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6">
                            <div className="single-contact-box">
                                <i className="flaticon-envelope"></i>
                                <div className="content-title">
                                    <h3>Email</h3>
                                    <p>Media request: Media@halentech.com</p>
                                    <p>Investors request: Investors@halentech.com</p>
                                    <br/>                                    
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-contact-box">
                                <i className="flaticon-phone-call"></i>
                                <div className="content-title">
                                
                                    <h3>Address</h3>
                                    <p>651 N Broad St, Suite 205</p>
                                    <p>Middletown, DE 19709</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;