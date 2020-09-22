import React from 'react'

export default () => {
    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>The list of techical and my aptitude.</p>
                    </div>
                    <div className="row skills-content">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="progress">
                                <span className="skill">MERN Stack <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">ASP.net + SQL Server <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">React <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" >
                            <div className="progress">
                                <span className="skill">Laravel <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Jenkins + Openshift <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Python <i className="val">70%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Skills Section */}

        </>
    )
}
