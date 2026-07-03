import { HeroSec } from "./style";

const Hero = () => {
  return (
    <HeroSec>
      <div className="container">
        <h1>Best food for your taste</h1>
        <p>
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div>
          <button>Book A Table</button>
          <button>Explore Menu</button>
        </div>
      </div>
    </HeroSec>
  );
};

export default Hero;
