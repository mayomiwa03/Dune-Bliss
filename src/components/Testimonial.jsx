import { TestimonialSec } from "./style";
import user1 from "../Images/Testimonial-1.png";
import user2 from "../Images/Testimonial-2.png";
import user3 from "../Images/Testimonial-3.png";

const Testimonial = () => {
  return (
    <TestimonialSec>
      <div className="container">
        <div className="title">
          <h1>What our customers say</h1>
        </div>
        <div className="cardHolder">
          <div className="cardBox">
            <h4>"The best restaurant"</h4>
            <p>
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
            <div className="user">
              <img src={user1} alt="" />
              <div className="userText">
                <h6>Sophire Robson</h6>
                <p>los angeles, Ca</p>
              </div>
            </div>
          </div>
          <div className="cardBox">
            <h4>“Simply delicious”</h4>
            <p>
              Place exceeded my expectations on all fronts. The ambiance was
              cozy and relaxed, making it a perfect venue for our anniversary
              dinner. Each dish was prepared and beautifully presented.
            </p>
            <div className="user">
              <img src={user2} alt="" />
              <div className="userText">
                <h6>Matt Cannon</h6>
                <p>San Diego, CA</p>
              </div>
            </div>
          </div>
          <div className="cardBox">
            <h4>“One of a kind restaurant”</h4>
            <p>
              The culinary experience at place is first to none. The atmosphere
              is vibrant, the food - nothing short of extraordinary. The food
              was the highlight of our evening. Highly recommended.
            </p>
            <div className="user">
              <img src={user3} alt="" />
              <div className="userText">
                <h6>Andy Smith</h6>
                <p>an Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TestimonialSec>
  );
};

export default Testimonial;
