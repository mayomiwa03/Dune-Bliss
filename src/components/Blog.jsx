import { BlogSec } from "./style";
import leftImg from "../Images/Blog-left.png";
import gridImg1 from "../Images/Blog-grid1.png";
import gridImg2 from "../Images/Blog-grid2.png";
import gridImg3 from "../Images/Blog-grid3.png";
import gridImg4 from "../Images/Blog-grid4.png";

const Blog = () => {
  return (
    <BlogSec>
      <div className="containerr">
        <div className="title">
          <h1>Our Blog & Articles</h1>
          <button>Read All Articles</button>
        </div>
        <div className="main">
          <div className="left">
            <div className="foodCard">
              <img src={leftImg} alt="" />
              <div className="text">
                <h6>January 3, 2023</h6>
                <h3>
                  The secret tips & tricks to prepare a perfect burger & pizza
                  for our customers
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur of a adipiscing
                  elitilmim semper adipiscing massa gravida nisi cras enim quis
                  nibholm varius amet gravida ut facilisis neque egestas.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="cardContainer">
              <div className="foodCard">
                <img src={gridImg1} alt="" />
                <div className="text">
                  <h6>January 3, 2023</h6>
                  <h3>
                    How to prepare the perfect french fries in an air fryer
                  </h3>
                </div>
              </div>
              <div className="foodCard">
                <img src={gridImg2} alt="" />
                <div className="text">
                  <h6>January 3, 2023</h6>
                  <h3>How to prepare delicious chicken tenders</h3>
                </div>
              </div>
              <div className="foodCard">
                <img src={gridImg3} alt="" />
                <div className="text">
                  <h6>January 3, 2023</h6>
                  <h3>7 delicious cheesecake recipes you can prepare</h3>
                </div>
              </div>
              <div className="foodCard">
                <img src={gridImg4} alt="" />
                <div className="text">
                  <h6>January 3, 2023</h6>
                  <h3>5 great pizza restaurants you should visit this city</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogSec>
  );
};

export default Blog;
