import React from 'react';


const Contact = () => {
    return (
        <>
            <section id="contact" className="contact ">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Please feel free to contact me by this below.</p>
                    </div>
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="icofont-google-map" />
                                    <h4>Location:</h4>
                                    <p>Ramintra Rd , Tharang Bangkhen</p>
                                </div>
                                <div className="email">
                                    <i className="icofont-envelope" />
                                    <h4>Email:</h4>
                                    <p>inpang_nook@hotmail.com</p>
                                </div>
                                <div className="phone">
                                    <i className="icofont-phone" />
                                    <h4>Call:</h4>
                                    <p>(+66) 89-305-2270</p>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.4157377423915!2d100.63131252920634!3d13.859259199392381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d62b1cc26da19%3A0xf2019fa2c3fafa5c!2s82%20Soi%202%2C%20Khwaeng%20Tha%20Raeng%2C%20Khet%20Bang%20Khen%2C%20Krung%20Thep%20Maha%20Nakhon%2010220!5e0!3m2!1sen!2sth!4v1600679947736!5m2!1sen!2sth" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" rows={10} data-rule="required" data-msg="Please write something for us" defaultValue={""} />
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>{/* End Contact Section */}

        </>
    );
};

export default Contact;