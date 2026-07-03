import { BrowseSec } from "./style";
import { GiCoffeeCup, GiHotMeal, GiCakeSlice } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";

const Browse = () => {
  return (
    <BrowseSec>
      <div className="head">
        <h1>Browse Our Menu</h1>
      </div>
      <div className="body">
        <div className="card">
          <div className="card-icon">
            <span>
              <GiCoffeeCup />
            </span>
          </div>
          <h4>Breakfast</h4>
          <p>
            In the new era of technology we look in the future with certainty
            and pride for our life.
          </p>
          <a href="">Explore Menu</a>
        </div>{" "}
        <div className="card">
          <div className="card-icon">
            <span>
              <GiHotMeal />
            </span>
          </div>
          <h4>Main Dishes</h4>
          <p>
            In the new era of technology we look in the future with certainty
            and pride for our life.
          </p>
          <a href="">Explore Menu</a>
        </div>{" "}
        <div className="card">
          <div className="card-icon">
            <span>
              <RiDrinks2Line />
            </span>
          </div>
          <h4>Drinks</h4>
          <p>
            In the new era of technology we look in the future with certainty
            and pride for our life.
          </p>
          <a href="">Explore Menu</a>
        </div>{" "}
        <div className="card">
          <div className="card-icon">
            <span>
              <GiCakeSlice />
            </span>
          </div>
          <h4>Desserts</h4>
          <p>
            In the new era of technology we look in the future with certainty
            and pride for our life.
          </p>
          <a href="">Explore Menu</a>
        </div>
      </div>
    </BrowseSec>
  );
};

export default Browse;
