import React from 'react'

export default () => {
    return (
        <>
            <section id="facts" className="facts">
                <div className="container">
                    <div className="section-title">
                        <h2>Facts</h2>
                        <p>There are multiple types of programmers in the world from front-end and back-end professionals to specialized application developers and software testers. With that being said, at some point in your IT career path, you will probably choose which area to focus on. Well unless you're passionate about every aspect of the software development process. If that's your case then becoming a full stack developer might be the best option for you since these professionals have functional knowledge and extensive experience in diverse and basically all aspects of computer software development. Simply said, they are able to take a concept and turn it into a finished product.</p>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                    <div className="count-box">
                    <i className="icofont-code"/>
                      <span data-toggle="counter-up">8</span>
                      <p><strong>Programming</strong> Language</p>
                    </div>
                  </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="count-box">
                                <i className="icofont-document-folder" />
                                <span data-toggle="counter-up">20</span>
                                <p><strong>Projects</strong>made by me</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={200}>
                            <div className="count-box">
                                <i className="icofont-live-support" />
                                <span data-toggle="counter-up">24 </span>
                                <p><strong>Hours Of Support</strong> </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={300}>
                            <div className="count-box">
                                <i className="icofont-users-alt-5" />
                                <span data-toggle="counter-up">4</span>
                                <p><strong>Team Members</strong> for flexibility</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Facts Section */}

        </>
    )
}
