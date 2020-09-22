import React from 'react'

export default () => {
    return (
        <>
            <section id="resume" className="resume">
                <div className="container">
                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>You can get to know me better by the description below.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Pornpong Inpang</h4>
                                <p><em>Accomplished software developer with 11 years of experience in development of applications. Excels in every stage of the life cycle of software development, including design creation, coding, debugging, testing, and maintenance. Expert in devising innovative and tailored solutions to assist businesses achieve their goals in a variety of industries. Advanced skills and knowledge of leading programming tools with a strong background in mathematics, algorithms, and data-processing logic.</em></p>
                                <ul>
                                    <li>SJ Infinite,17 FL</li>
                                    <li>(+66) 89-305-2270</li>
                                    <li>inpang_nook@hotmail.com</li>
                                </ul>
                            </div>
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Master of Science &amp; Information of Technology</h4>
                                <h5>2009 - 2011</h5>
                                <p><em>Master of Science Program in Information Technology</em></p>
                                <p>Master of Science (Information Technology) : King mongkut's institute of technology ladkrabang</p>
                            </div>
                            <div className="resume-item">
                                <h4>Bachelor of Business Administration Program in Business Computer</h4>
                                <h5>2006 - 2009</h5>
                                <p><em>Bachelor of Business Administration Program in Business Computer</em></p>
                                <p>Rajabhat Suan Sunandha University</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>DevOpsEngineer & Developer</h4>
                                <h5>2019 - Present</h5>
                                <p><em>PTT Digital Solutions </em></p>
                                <ul>
                                    <li>Software Development For PTT Group</li>
                                    <li>Meeting with the clients to get and discuss the project requirement & workflow</li>
                                    <li>DevOps Operations</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Senior Developer</h4>
                                <h5>2009 - 2018</h5>
                                <p><em>TOT Public Company</em></p>
                                <ul>
                                    <li>Meeting with the clients to discuss the project requirement & workflow</li>
                                    <li>Setting each project’s workflow, schedule , and deliverables</li>
                                    <li>Overssing a team of 5 developers ;answering technical and procedural questions for
                        less experienced team members; teaching improved processes; mentoring team members</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Resume Section */}

        </>
    )
}
