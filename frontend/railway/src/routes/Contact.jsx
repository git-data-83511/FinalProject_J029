import Hero from "../components/Hero";
import ContactUs from "../components/ContactUs";
import contactUsImg from "../assets/contactUsImg.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
    <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={contactUsImg}
        title="Contact Us"
        btnClass="hide"
      />
      <ContactUs />
      <Footer></Footer>
    </>
  );
}

export default Contact;
