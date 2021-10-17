import React from 'react';
import image from '../../images/contact.jpg'
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className="container mx-auto h-screen">
                <div className="contact">

                    <div className="sm:grid grid-cols-2 gap-2">
                        <div>
                            <img className="w-full" src={image} alt="" />
                        </div>
                        <div className="bg-white w-100 sm:px-20 p-10">
                            <div>
                                <input className="border mb-3 border-gray-400 w-full p-3 rounded focus:outline-none" type="text" placeholder="Your Name" /><br />
                                <input className="border mb-3 border-gray-400 w-full p-3 rounded focus:outline-none" type="email" placeholder="Your Email" /><br />
                                <textarea className="border border-gray-400 w-full p-3 rounded focus:outline-none" cols="24" rows="5" placeholder="Message">
                                </textarea>
                                <button className="w-full bg-yellow-500 py-2 mt-5 font-medium">Send Message</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;