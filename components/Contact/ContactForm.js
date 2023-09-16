import React, { useState } from 'react';
import { Submission } from '../Shared/Submission';


// const alertContent = () => {
//     MySwal.fire({
//         title: 'Congratulations!',
//         text: 'Your message was successfully send and will back to you soon',
//         icon: 'success',
//         timer: 2000,
//         timerProgressBar: true,
//         showConfirmButton: false,
//     })
// }

// Form initial state
const INITIAL_STATE = {
    table: "Inquiries",
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     try {
    //         const url = `${baseUrl}/api/contact`;
    //         const { name, email, number, subject, text } = contact;
    //         const payload = { name, email, number, subject, text };
    //         const response = await axios.post(url, payload);
    //         console.log(response);
    //         setContact(INITIAL_STATE);
    //         alertContent();
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    return (
        <section className="contact-section signup-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="contact-text">
                            <h3>Have Any Questions About Us?</h3>
                            <p>If you'd like to know more about our company, general operating information, or other opportunities, please fill out the fields below and submit your question. For customer service support, please contact your local Halen franchise office.</p>
                        </div>

                        <div className="contact-form">
                            <form onSubmit={(event) => {Submission(event, contact)}}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Name" 
                                                className="form-control" 
                                                value={contact.name}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Email" 
                                                className="form-control" 
                                                value={contact.email}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input 
                                        type="text" 
                                        name="number" 
                                        placeholder="Phone number" 
                                        className="form-control" 
                                        value={contact.number}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                    
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject" 
                                        className="form-control" 
                                        value={contact.subject}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                        
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea 
                                        name="text" 
                                        cols="30" 
                                        rows="6" 
                                        placeholder="Write your message..." 
                                        className="form-control" 
                                        value={contact.text}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                
                                <div className="send-btn">
                                    <button type="submit" className="default-btn">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-image">
                            <img src="/images/contact.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;