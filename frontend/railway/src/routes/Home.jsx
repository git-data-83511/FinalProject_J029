import Hero from "../components/Hero";
import UserSidebar from "../components/UserSidebar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";

// Background image of home page
import homeImg from "../assets/homeImg.jpg";

function Home() {
  return (
    <>
      <UserSidebar>
        {/* Rendering the Hero component with specified props (Parent -- Home) (Child -- Hero) */}
        <Hero
          cName="hero"
          heroImg={homeImg} // Image for the hero section
          title="Your Journey Your Story" // Title for the hero section
          text="Choose Your Favourite Destination." // Text content for the hero section
          url="/booktrain"
          btnClass="show" // CSS class for styling the button
          btnText="Book Tickets" // Text content for the button
        />
      </UserSidebar>
      <Destination />
      <Trip />
    </>
  );
}

export default Home;
