import Header from "./Header";
import Visit from "./Visit";
import visitimg from "../Images/visit2.png";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Info from "./Info";
import Feel from "./Feel";

function About() {
  return (
    <>
      <Header />
      <Visit image={visitimg} />
      <Feel />
      <Info />
      <Testimonial />
      <Footer />
    </>
  );
}

export default About;
