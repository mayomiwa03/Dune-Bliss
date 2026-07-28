import image from "../Images/logos.png";
import { PartnersSec } from "./style";

const Partners = () => {
  return (
    <PartnersSec>
      <div className="container">
        <div className="left">
          <h1>You can order through apps</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </p>
        </div>
        <div className="right">
          <img src={image} alt="" />
        </div>
      </div>
    </PartnersSec>
  );
};

export default Partners;
