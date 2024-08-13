import Hero from "../components/Hero";
import aboutUsImg from "../assets/aboutUsImg.jpg";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={aboutUsImg}
        title="About Us"
        btnClass="hide"
      />
      <AboutUs />
      <Footer></Footer>
    </>
  );
}

export default About;
