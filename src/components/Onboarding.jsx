import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";

import food from "../Images/landing-1.svg";
import payment from "../Images/landing-2.svg";
import delivery from "../Images/landing-3.svg";
import food2 from "../Images/food2.avif";
import payment2 from "../Images/payment2.jpg";
import delivery2 from "../Images/delivery2.avif";

function SlideButton({ index }) {
  const swiper = useSwiper();
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        if (index === 2) {
          navigate("/LandingPage");
          // later: navigate("/home") or whatever page
        } else {
          swiper.slideNext();
        }
      }}
    >
      {index === 2 ? "Get Started" : "Next"}
    </Button>
  );
}

const Welcome = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  text-align: center;
  @media (min-width: 260px) and (max-width: 500px) {
    width: 100vw;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  .left {
    position: relative;
    /* width: 100%; */
    height: 100%;
    overflow: hidden;
    @media (min-width: 260px) and (max-width: 500px) {
      display: none;
    }
  }
`;

const Backdrop = styled.img`
  width: 50vw;
  height: 100vh;
  object-fit: cover;
  display: block;
`;
const Overlay = styled.div`
  position: absolute;

  inset: 0;
  background: linear-gradient(rgba(80, 80, 80, 0.4), rgba(80, 80, 80, 0.5));
  pointer-events: none;
`;

const Illustration = styled.img`
  width: 350px;
  margin-bottom: 80px;
`;

const Title = styled.h1`
  color: #ad343e;
  font-size: 32px;
`;

const Text = styled.p`
  color: #333;
  max-width: 300px;
  font-size: 15px;
`;

const Button = styled.button`
  margin-top: 40px;
  width: 200px;
  padding: 18px;
  border: none;
  border-radius: 40px;
  background: #ad343e;
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

const Dots = styled.div`
  margin-top: 20px;
  font-size: 15px;
  color: #999;
`;

function Onboarding() {
  const slides = [
    {
      leftImage: food2,
      image: food,
      title: "Order for Food",
      text: "Get your favourite meals delivered quickly",
    },
    {
      leftImage: payment2,
      image: payment,
      title: "Easy Payment",
      text: "Pay securely with different methods",
    },
    {
      leftImage: delivery2,
      image: delivery,
      title: "Fast Delivery",
      text: "Your food arrives at your doorstep",
    },
  ];

  return (
    <Swiper spaceBetween={20} slidesPerView={1}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Container>
            <div className="left">
              <Backdrop src={slide.leftImage} />
              <Overlay />
            </div>
            <Welcome>
              <Illustration src={slide.image} />

              <Title>{slide.title}</Title>

              <Text>{slide.text}</Text>

              <Dots>● ● ●</Dots>

              <SlideButton index={index} />
            </Welcome>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Onboarding;
