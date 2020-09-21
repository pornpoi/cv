import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Pornpong I Portfolio </title>

        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
        <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet" />
        <link href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />

      </Head>

      <main>

        <div>
          {/* ======= Mobile nav toggle button ======= */}
          <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
          {/* ======= Header ======= */}
          <header id="header">
            <div className="d-flex flex-column">
              <div className="profile">
                <img src="assets/img/profile-img.jpg" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="#">Pornpong Inpang</a></h1>
                <div className="social-links mt-3 text-center">
                  <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
              </div>
              <nav className="nav-menu">
                <ul>
                  <li className="active"><a href="#hero"><i className="bx bx-home" /> <span>Home</span></a></li>
                  <li><a href="#about"><i className="bx bx-user" /> <span>About</span></a></li>
                  <li><a href="#resume"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                  <li><a href="#portfolio"><i className="bx bx-book-content" /> Portfolio</a></li>
                  <li><a href="#services"><i className="bx bx-server" /> Services</a></li>
                  <li><a href="#contact"><i className="bx bx-envelope" /> Contact</a></li>
                </ul>
              </nav>{/* .nav-menu */}
              <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
            </div>
          </header>{/* End Header */}
          {/* ======= Hero Section ======= */}
          <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
              <h1>Pornpong Inpang</h1>
              <p>I'm <span className="typed" data-typed-items="DevOpsEngineer, System Analyst, Developer, Freelancer" /></p>
            </div>
          </section>{/* End Hero */}
          <main id="main">
            {/* ======= About Section ======= */}
            <section id="about" className="about">
              <div className="container">
                <div className="section-title">
                  <h2>About</h2>
                  <p>I am an innovative, creative thinker who is adept at coming up with real solutions that work for clients. With experience in a wide variety of software, system architectures and programming languages, I am always current with the latest developments in the software development world. I pride myself on optimizing function and providing solutions that are intuitive user-friendly, adaptable and effective.</p>
                </div>
                <div className="row">
                  <div className="col-lg-4" data-aos="fade-right">
                    <img src="assets/img/profile-img.jpg" className="img-fluid " />
                  </div>
                  <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>DevOpsEngineer &amp; Developer.</h3>
                    <p className="font-italic">
                      Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.
            </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li><i className="icofont-rounded-right" /> <strong>Birthday:</strong> 29 December 1986</li>
                          <li><i className="icofont-rounded-right" /> <strong>LinkIn:</strong><a target="_blank" href="https://www.linkedin.com/in/pawnpong-inpang-3757b0118/"> <i className="bx bxl-linkedin" /> pawnpong-inpang</a></li>
                          <li><i className="icofont-rounded-right" /> <strong>Phone:</strong> (+66)89-3052270</li>
                          <li><i className="icofont-rounded-right" /> <strong>City:</strong> Bangkok , Thailand</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li><i className="icofont-rounded-right" /> <strong>Age:</strong> 34</li>
                          <li><i className="icofont-rounded-right" /> <strong>Degree:</strong> Master of Science</li>
                          <li><i className="icofont-rounded-right" /> <strong>Field of study:</strong> Infomation Technology</li>
                          <li><i className="icofont-rounded-right" /> <strong>Email:</strong> inpang_nook@hotmail.com</li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Participated in integration of new systems with legacy software. Performed routine software testing and debugging. Developed new user interface for patient record system that increased productivity and reduced errors. Supervised programming department and ensured compliance with quality standards and documentation requirements.
            </p>
                  </div>
                </div>
              </div>
            </section>{/* End About Section */}
            {/* ======= Facts Section ======= */}
            <section id="facts" className="facts">
              <div className="container">
                <div className="section-title">
                  <h2>Facts</h2>
                  <p>There are multiple types of programmers in the world from front-end and back-end professionals to specialized application developers and software testers. With that being said, at some point in your IT career path, you will probably choose which area to focus on. Well unless you're passionate about every aspect of the software development process. If that's your case then becoming a full stack developer might be the best option for you since these professionals have functional knowledge and extensive experience in diverse and basically all aspects of computer software development. Simply said, they are able to take a concept and turn it into a finished product.</p>
                </div>
                <div className="row no-gutters">
                  {/* <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                    <div className="count-box">
                      <i className="icofont-simple-smile" />
                      <span data-toggle="counter-up">232</span>
                      <p><strong>Happy Clients</strong> consequuntur quae</p>
                    </div>
                  </div> */}
                  <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={100}>
                    <div className="count-box">
                      <i className="icofont-document-folder" />
                      <span data-toggle="counter-up">20+</span>
                      <p><strong>Projects</strong> that I made</p>
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
            {/* ======= Skills Section ======= */}
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
            {/* ======= Resume Section ======= */}
            <section id="resume" className="resume">
              <div className="container">
                <div className="section-title">
                  <h2>Resume</h2>
                  <p>The list of techical and my aptitude </p>
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
                      <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                      <h5>2010 - 2014</h5>
                      <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                      <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
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
                        less experienced team members; teaching improved processes; mentoring team
members</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Resume Section */}
            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" className="portfolio section-bg">
              <div className="container">
                <div className="section-title">
                  <h2>Tech Stack</h2>
                  <p>The list of tech stack which I can.</p>
                </div>
                <div className="row" data-aos="fade-up">
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">All</li>
                      <li data-filter=".filter-app">Programming Language</li>
                      <li data-filter=".filter-card">DevOps</li>
                      <li data-filter=".filter-web">DB</li>
                    </ul>
                  </div>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/nodejs.jpg" className="img-fluid" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/mongodb.jpg" className="img-fluid" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/corda.jpg" className="img-fluid" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/java.jpg" className="img-fluid" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/react.jpg" className="img-fluid" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/openshift.jpg" className="img-fluid" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/kubernetes.jpg" className="img-fluid" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/jenkins.jpg" className="img-fluid" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/python.jpg" className="img-fluid" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Portfolio Section */}
            {/* ======= Services Section ======= */}
            {/* <section id="services" className="services">
              <div className="container">
                <div className="section-title">
                  <h2>Services</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                    <div className="icon"><i className="icofont-computer" /></div>
                    <h4 className="title"><a >Lorem Ipsum</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                    <div className="icon"><i className="icofont-chart-bar-graph" /></div>
                    <h4 className="title"><a >Dolor Sitema</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                    <div className="icon"><i className="icofont-earth" /></div>
                    <h4 className="title"><a >Sed ut perspiciatis</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                    <div className="icon"><i className="icofont-image" /></div>
                    <h4 className="title"><a >Magni Dolores</a></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                    <div className="icon"><i className="icofont-settings" /></div>
                    <h4 className="title"><a >Nemo Enim</a></h4>
                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                    <div className="icon"><i className="icofont-tasks-alt" /></div>
                    <h4 className="title"><a >Eiusmod Tempor</a></h4>
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                  </div>
                </div>
              </div>
            </section> */}
            {/* End Services Section */}
            {/* ======= Testimonials Section ======= */}
            {/* <section id="testimonials" className="testimonials section-bg">
              <div className="container">
                <div className="section-title">
                  <h2>Testimonials</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="owl-carousel testimonials-carousel">
                  <div className="testimonial-item" data-aos="fade-up">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                  <div className="testimonial-item" data-aos="fade-up" data-aos-delay={100}>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                  <div className="testimonial-item" data-aos="fade-up" data-aos-delay={200}>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                  <div className="testimonial-item" data-aos="fade-up" data-aos-delay={300}>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                  <div className="testimonial-item" data-aos="fade-up" data-aos-delay={400}>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
              </div>
            </section>End Testimonials Section */}
            {/* ======= Contact Section ======= */}
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
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer">

          </footer>{/* End  Footer */}
        </div>

      </main>

      <footer>
        <a className="back-to-top"><i className="icofont-simple-up" /></a>



        <script src="/assets/vendor/jquery/jquery.min.js"></script>
        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
        <script src="/assets/vendor/php-email-form/validate.js"></script>
        <script src="/assets/vendor/waypoints/jquery.waypoints.min.js"></script>
        <script src="/assets/vendor/counterup/counterup.min.js"></script>
        <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="/assets/vendor/venobox/venobox.min.js"></script>
        <script src="/assets/vendor/owl.carousel/owl.carousel.min.js"></script>
        <script src="/assets/vendor/typed.js/typed.min.js"></script>
        <script src="/assets/vendor/aos/aos.js"></script>


        <script src="/assets/js/main.js"></script>
      </footer>


    </>
  )
}
