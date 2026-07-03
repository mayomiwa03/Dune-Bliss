import { MdOutlinePhone, MdMailOutline } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { HeaderSec } from "./style";
import logo from "../Images/logo-img.png";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const Header = () => {
  return (
    <HeaderSec>
      <div className="Uppernav">
        <div className="contact">
          <a href="tel:+2348145829513">
            <span>
              <MdOutlinePhone />
            </span>{" "}
            (234) 814 582 9513
          </a>
          <a href="mailto:oluwamayomiwa03@gmail.com">
            <span>
              <MdMailOutline />
            </span>
            DuneBistro@gmail.com
          </a>
        </div>
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
      <div className="lowerNav">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>Dune Bliss</h1>
        </div>
        <div className="nav">
          <ul>
            <li>
              {" "}
              <a href="">Home</a>
            </li>
            <li>
              {" "}
              <a href="">About</a>
            </li>
            <li>
              {" "}
              <a href="">Menu</a>
            </li>
            <li>
              {" "}
              <a href="">Pages</a>
            </li>
            <li>
              {" "}
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <button>Book A Table</button>
        <div className="hamburger">
          <span>
            <CgMenuLeftAlt />
          </span>
          <span>
            <MdClose />
          </span>
        </div>
      </div>
    </HeaderSec>
  );
};

export default Header;
