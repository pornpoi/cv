import Head from 'next/head'
import Contact from './components/Contact'
import Techstack from './components/Techstack'
import About from './components/About'
import Fact from './components/Fact'
import Skill from './components/Skill'
import Resume from './components/Resume'
import Service from './components/Service'

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
                  <li><a href="#portfolio"><i className="bx bx-book-content" /> TechStack</a></li>
                  <li><a href="#contact"><i className="bx bx-envelope" /> Contact</a></li>
                </ul>
              </nav>{/* .nav-menu */}
              <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
            </div>
          </header>
          {/* End Header */}
          {/* ======= Hero Section ======= */}
          <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
              <h1>Pornpong Inpang</h1>
              <p>I'm <span className="typed" data-typed-items="DevOpsEngineer, System Analyst, Developer, Freelancer" /></p>
            </div>
          </section>{/* End Hero */}
          <main id="main">
            {/* ======= About Section ======= */}
            <About />
            {/* ======= Facts Section ======= */}
            <Fact />
            {/* ======= Skills Section ======= */}
            <Skill />
            {/* ======= Resume Section ======= */}
            <Resume />
            {/* ======= Tech Stack Section ======= */}
            <Techstack />
            {/* <Service/> */}
            <Contact />
          </main>
          {/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer">

          </footer>
          {/* End  Footer */}
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
