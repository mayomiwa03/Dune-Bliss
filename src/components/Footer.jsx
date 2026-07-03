import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import img1 from "../Images/Foot1.png";
import img2 from "../Images/foot2.png";
import img3 from "../Images/Foot3.png";
import img4 from "../Images/Foot4.png";
import logoImg from "../Images/Footer-logo.png";
import { FooterSec } from "./style";

const Footer = () => {
  return (
    <FooterSec>
      <div className="main">
        <div className="left">
          <div className="logo">
            <img src={logoImg} alt="" />
            <h1>Dune Bliss</h1>
          </div>
          <p>
            In the new era of technology we look a in the future with certainty
            and pride to for our company and.
          </p>
          <div className="socials">
            <span>
              <a href="">
                <FaTwitter />
              </a>{" "}
            </span>
            <span>
              <a href="">
                <FaFacebookF />
              </a>
            </span>
            <span>
              <a href="">
                <FaInstagram />
              </a>
            </span>
            <span>
              <a href="">
                <FaGithub />
              </a>{" "}
            </span>
          </div>
        </div>
        <div className="middle">
          <div>
            <h4>Pages</h4>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Menu</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Delivery</a>
          </div>{" "}
          <div>
            <h4>Utility Pages</h4>
            <a href="">Start Here</a>
            <a href="">Styleguide</a>
            <a href="">Password Protected</a>
            <a href="">404 Not Found</a>
            <a href="">Licenses</a>
            <a href="">Changelog</a>
            <a href="">View More</a>
          </div>
        </div>
        <div className="right">
          <h4>Follow us on Instagram</h4>
          <div className="imgs">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
      <div className="copy">
        <p>
          Copyright © 2026{" "}
          <span>
            <a href="">Mayomiwa</a>
          </span>
          . All Rights Reserved
        </p>
      </div>
    </FooterSec>
  );
};

export default Footer;
