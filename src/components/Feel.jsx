import { FeelSec } from "./style";
import { FaPlay } from "react-icons/fa";
import { SiWikibooks } from "react-icons/si";
import { LuAppWindowMac } from "react-icons/lu";
import { GiTimeBomb } from "react-icons/gi";

const Feel = () => {
  return (
    <FeelSec>
      <div className="vid-cont">
        <div className="cont">
          <div className="icon">
            <span>
              <FaPlay />
            </span>
          </div>
          <h1>Feel the authentic & original taste from us</h1>
        </div>
      </div>
      <div className="flxboxes">
        <div className="flxbox">
          <div className="icon">
            <SiWikibooks />
          </div>
          <div className="textcont">
            <h4>Multi Cuisine</h4>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>{" "}
        <div className="flxbox">
          <div className="icon">
            <LuAppWindowMac />{" "}
          </div>
          <div className="textcont">
            <h4>Easy To Order</h4>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>{" "}
        <div className="flxbox">
          <div className="icon">
            <GiTimeBomb />
          </div>
          <div className="textcont">
            <h4>Fast Delivery</h4>
            <p>
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
      </div>
    </FeelSec>
  );
};

export default Feel;
