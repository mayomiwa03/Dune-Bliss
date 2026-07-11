import { NavLink } from "react-router-dom";

import { MdOutlinePhone, MdMailOutline } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { HeaderSec } from "./style";
import logo from "../Images/logo-img.png";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { useRef } from "react";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

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
          <ul ref={navRef}>
            <li>
              {" "}
              <NavLink
                to="/LandingPage"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Menu
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/pages"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Pages
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <button className="hamburgerClose" onClick={showNavbar}>
              <span>
                <MdClose />
              </span>
            </button>
          </ul>
        </div>
        <button>Book A Table</button>
        <button className="hamburgerOpen" onClick={showNavbar}>
          <span>
            <CgMenuLeftAlt />
          </span>
        </button>
      </div>
    </HeaderSec>
  );
};

export default Header;
