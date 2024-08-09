import "../styles/TripStyles.css";
import TripData from "./TripData";
import image1 from "../assets/trip1.jpg";
import image2 from "../assets/trip2.jpg";
import image3 from "../assets/trip3.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations.</p>
      <div className="tripcard">
        <TripData
          image={image1}
          heading="Trip in Keral"
          text="Discover the most revered pilgrimage sites, the sacred temples, the serene spiritual retreats, the best times to visit for special festivals, the most peaceful spots for meditation, the hidden shrines, and the most enchanting experiences in Kerala. There is so much to explore and experience in this divine destination!"
        />
        <TripData
          image={image2}
          heading="Trip in Rajasthan"
          text="Rajasthan is a stunning and culturally rich state in India, known worldwide for its vibrant heritage and majestic landscapes. It boasts a unique blend of history, architecture, and traditions that set it apart from any other destination. With its royal palaces, vast deserts, and colorful festivals, Rajasthan stands as a dream destination for travelers seeking an unforgettable experience.

"
        />
        <TripData
          image={image3}
          heading="Trip in Manali"
          text="Manali is a picturesque hill station nestled in the Himalayas, located in the northern part of India. It offers serene landscapes, stunning mountain views, and some of the most charming cottages and resorts in the region. With thrilling activities like trekking, paragliding, and skiing, Manali is a unique and fantastic destination for nature lovers and adventure enthusiasts alike."
        />
      </div>
    </div>
  );
};

export default Trip;
