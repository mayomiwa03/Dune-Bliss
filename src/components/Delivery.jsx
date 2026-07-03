import { DeliverySec } from "./style";
import { IoTimeOutline, IoCartOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import imgmain from "../Images/Faster-1.png";
import duoImg1 from "../Images/Faster-2.png";
import duoImg2 from "../Images/Faster-3.png";

const Delivery = () => {
  return (
    <DeliverySec>
      <div className="container">
        <div className="left">
          <div className="imgMain">
            <img src={imgmain} alt="" />
          </div>
          <div className="imgDuo">
            <img src={duoImg1} alt="" />
            <img src={duoImg2} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>Fastest Food Delivery in City</h1>
          <p>
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop
          </p>
          <div className="bullet">
            <div className="bulletpoint">
              <span>
                <IoTimeOutline />
              </span>
              <p>Delivery within 30 minutes</p>
            </div>{" "}
            <div className="bulletpoint">
              <span>
                <BiSolidOffer />
              </span>
              <p>Best Offer & Prices</p>
            </div>{" "}
            <div className="bulletpoint">
              <span>
                <IoCartOutline />
              </span>
              <p>Online Services Available</p>
            </div>
          </div>
        </div>
      </div>
    </DeliverySec>
  );
};

export default Delivery;
