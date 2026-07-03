import { VisitSec } from "./style";
import visitimg from "../Images/Come-img.png";
import { MdOutlinePhone, MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Visit = () => {
  return (
    <VisitSec>
      <div className="container">
        <div className="left">
          <img src={visitimg} alt="shawarma" />
          <div className="leftfloat">
            <h2>Come and visit us</h2>
            <div className="flx">
              <span>
                <MdOutlinePhone />
              </span>
              <a href="tel:+2348145829513">(234) 814 582 9513</a>
            </div>{" "}
            <div className="flx">
              <span>
                <MdMailOutline />
              </span>
              <a href="mailto:oluwamayomiwa03@gmail.com">
                {" "}
                DuneBistro@gmail.com
              </a>
            </div>{" "}
            <div className="flx">
              <span>
                <IoLocationOutline />
              </span>
              <a href="https://www.google.com/maps/place/Murtala+Muhammed+International+Airport/@6.5796843,3.3550241,13.67z/data=!4m6!3m5!1s0x103b91e751d71485:0xf222ed73a7d14f9a!8m2!3d6.5795773!4d3.3226101!16zL20vMDRjcHhr?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D">
                837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <h1>We provide healthy food for your family.</h1>
          <h6>
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </h6>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <button>More about us</button>
        </div>
      </div>
    </VisitSec>
  );
};

export default Visit;
