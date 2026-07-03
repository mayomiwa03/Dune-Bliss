import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";

import food from "../Images/landing-1.svg";
import payment from "../Images/landing-2.svg";
import delivery from "../Images/landing-3.svg";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  text-align: center;
  @media (min-width: 260px) and (max-width: 500px) {
  }
`;

const Illustration = styled.img`
  width: 250px;
  margin-bottom: 80px;
`;

const Title = styled.h1`
  color: #ad343e;
  font-size: 35px;
`;

const Text = styled.p`
  color: #333;
  max-width: 300px;
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
  cursor: pointer;
`;

const Dots = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #999;
`;

function Onboarding() {
  const slides = [
    {
      image: food,
      title: "Order for Food",
      text: "Get your favourite meals delivered quickly",
    },
    {
      image: payment,
      title: "Easy Payment",
      text: "Pay securely with different methods",
    },
    {
      image: delivery,
      title: "Fast Delivery",
      text: "Your food arrives at your doorstep",
    },
  ];

  return (
    <Swiper spaceBetween={20} slidesPerView={1}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Welcome>
            <Illustration src={slide.image} />

            <Title>{slide.title}</Title>

            <Text>{slide.text}</Text>

            <Dots>● ● ●</Dots>

            <SlideButton index={index} />
          </Welcome>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Onboarding;
