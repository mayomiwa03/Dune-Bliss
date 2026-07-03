import { OfferSec } from "./style";
import img1 from "../Images/catering.png";
import img2 from "../Images/Birthday.png";
import img3 from "../Images/Wedding.png";
import img4 from "../Images/Events.png";

const Offer = () => {
  return (
    <OfferSec>
      <div className="title">
        <h1>We also offer unique services for your events</h1>
      </div>
      <div className="body">
        <div className="card">
          <img src={img1} alt="" />
          <h4>Caterings</h4>
          <p>
            In the new era of technology we look in the future with certainty
            for life.
          </p>
        </div>{" "}
        <div className="card">
          <img src={img2} alt="" />
          <h4>Birthdays</h4>
          <p>
            In the new era of technology we look in the future with certainty
            for life.
          </p>
        </div>{" "}
        <div className="card">
          <img src={img3} alt="" />
          <h4>Weddings</h4>
          <p>
            In the new era of technology we look in the future with certainty
            for life.
          </p>
        </div>{" "}
        <div className="card">
          <img src={img4} alt="" />
          <h4>Events</h4>
          <p>
            In the new era of technology we look in the future with certainty
            for life.
          </p>
        </div>
      </div>
    </OfferSec>
  );
};

export default Offer;
