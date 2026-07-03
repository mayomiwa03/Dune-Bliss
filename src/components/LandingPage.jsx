import Blog from "./Blog";
import Browse from "./Browse";
import Delivery from "./Delivery";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Offer from "./Offer";
import Testimonial from "./Testimonial";
import Visit from "./Visit";

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Visit />
      <Offer />
      <Delivery />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
}
export default LandingPage;
