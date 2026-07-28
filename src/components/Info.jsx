import { InfoSec } from "./style";
import imagee from "../Images/InfoImg.png";

const Info = () => {
  return (
    <InfoSec>
      <div className="container">
        <div className="left">
          <h1>A little information for our valuable guest</h1>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <div className="gridbox">
            <div className="gridcard">
              <h1>3</h1>
              <p>Location</p>
            </div>{" "}
            <div className="gridcard">
              <h1>1995</h1>
              <p>Founded</p>
            </div>{" "}
            <div className="gridcard">
              <h1>65+</h1>
              <p>Staff Members</p>
            </div>{" "}
            <div className="gridcard">
              <h1>100%</h1>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={imagee} alt="chef cooking" />
        </div>
      </div>
    </InfoSec>
  );
};

export default Info;
