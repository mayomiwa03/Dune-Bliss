import styled from "styled-components";
import heroimg from "../Images/Hero.png";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
   font-family: "Poppins", sans-serif;
   overflow-x: hidden;
   box-sizing: border-box;
   padding: 0;
   margin: 0;
  
  }
   
`;
export default GlobalStyle;

export const HeaderSec = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .Uppernav {
    background-color: #ad343e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 7rem;
    .contact {
      display: flex;
      align-items: center;
      gap: 2rem;

      a:link {
        color: #fff;
        text-decoration: none;
        font-size: 12px;
        span {
          font-size: 14px;
          padding-right: 0.5rem;
        }
      }
    }
    .socials {
      display: flex;
      align-items: center;
      gap: 1rem;
      span {
        a {
          font-size: 14px;
          background-color: #aaaaaa40;
          padding: 8px 12px;
          border-radius: 100%;
          color: #fff;
        }
      }
    }
  }
  .lowerNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    padding: 1rem 7rem;

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        width: 30px;
      }
      h1 {
        font-family: "Playfair Display", serif;
        font-size: 1.6rem;
        padding-top: 10px;
        font-weight: 700;
      }
    }
    .nav {
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 1.5rem;
        li {
          a {
            color: #333;
            text-decoration: none;
            border-radius: 16px;
            padding: 6px 16px;
            &:hover,
            &.active {
              background-color: #dbdfd0;
            }
          }
        }
        button {
          display: none;
        }
      }
    }
    button {
      border-radius: 16px;
      border: 1px solid #333;
      padding: 6px 16px;
    }
    .hamburgerOpen {
      display: none;
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    .Uppernav {
      padding: 0.5rem 1rem;

      .contact {
        align-items: start;

        flex-direction: column;
        gap: 0.2rem;

        a:link {
          font-size: 9px;
          span {
            font-size: 10px;
          }
        }
      }
      .socials {
        gap: 0.3rem;
        span {
          a {
            font-size: 10px;
            padding: 6px 9px;
          }
        }
      }
    }
    .lowerNav {
      padding: 1rem 1rem;
      .logo {
        gap: 0.5rem;
        img {
          width: 25px;
        }
        h1 {
          font-size: 1.2rem;
        }
      }
      .nav {
        ul {
          z-index: 2;
          position: fixed;
          flex-direction: column;
          top: 0;
          left: 0;
          height: 50vh;
          width: 100%;
          backdrop-filter: blur(10px);
          transition: 1s;
          transform: translateY(-100vh);
          li {
            font-weight: 600;
          }
          button {
            display: block;
            top: 2rem;
            right: 1rem;
            position: absolute;
            border: none;
            background: transparent;
            font-size: 20px;
            color: #333;
            padding: 0;
          }
        }
        .responsive_nav {
          transform: none;
        }
      }
      button {
        display: none;
      }
      .hamburgerOpen {
        display: block;
        border: none;
        background-color: transparent;
        padding: 0;

        span {
          font-size: 20px;
          color: #333;
        }
        span:nth-child(2) {
          display: none;
        }
      }
    }
  }
`;
export const HeroSec = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background:
    linear-gradient(rgba(80, 80, 80, 0.01), rgba(80, 80, 80, 0.08)),
    url(${heroimg});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70vh;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 10rem 0;

    h1 {
      font-family: "Playfair Display", serif;
      font-size: 7.4rem;
      max-width: 550px;
      text-align: center;
    }
    p {
      font-size: 16px;
      max-width: 460px;
      text-align: center;
    }
    div {
      display: flex;
      gap: 16px;
      button {
        border-radius: 118px;
        padding: 20px 32px;
        font-weight: 600;
      }
      button:first-child {
        background-color: #ad343e;
        border: none;
      }
      button:nth-child(2) {
        border: 1px solid #333;
      }
      button:hover {
        text-decoration: underline;
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    background:
      linear-gradient(rgba(80, 80, 80, 0.5), rgba(80, 80, 80, 0.5)),
      url(${heroimg});
    .container {
      padding: 5rem 2rem;
      gap: 1rem;

      h1 {
        font-size: 3.4rem;
      }
      p {
        font-size: 14px;
      }
      div {
        button {
          padding: 15px 24px;
          font-size: 12px;
        }
        button:nth-child(2) {
          border: 0.5px solid #333;
        }
      }
    }
  }
`;
export const BrowseSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin: 10rem auto;
  .head {
    h1 {
      font-family: "Playfair Display", serif;
      font-size: 3rem;
    }
  }
  .body {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    gap: 3rem;
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      gap: 10px;
      text-align: center;
      .card-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;

        span {
          font-size: 50px;
          padding: 5px 16px;
          border-radius: 50%;
          background-color: #eee;
        }
      }
      h4 {
        margin-top: 0.5rem;
        font-weight: 600;
        font-size: 16px;
      }
      p {
      }
      a {
        color: #ad343e;
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    margin: 5rem auto;
    .head {
      h1 {
        font-size: 1.5rem;
      }
    }
    .body {
      padding: 0 2rem;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      .card {
        .card-icon {
          span {
            font-size: 30px;
          }
        }
        h4 {
          font-size: 12px;
        }
        p {
          font-size: 8px;
        }
        a {
          font-size: 10px;
        }
      }
    }
  }
`;
export const VisitSec = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f7;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 930px;
    padding: 8rem 0;
    margin: 0 auto;
    .left {
      position: relative;
      img {
        width: 400px;
      }
      .leftfloat {
        background-color: #474747;
        color: #fff;
        border-radius: 10px;
        width: 250px;
        padding: 2rem;
        position: absolute;
        bottom: -30px;
        right: -30px;

        h2 {
          font-size: 14px;
          margin-bottom: 2rem;
        }
        div {
          display: flex;
          gap: 1rem;
          span {
            color: #fff;
          }
          a {
            color: #fff;
            text-decoration: none;
            font-size: 10px;
            padding-bottom: 1rem;
            max-width: 90%;
          }
        }
      }
    }
    .right {
      width: 450px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      h1 {
        font-family: "Playfair Display", serif;
        font-size: 41px;
      }
      h6 {
      }
      p {
      }
      button {
        border: 2px solid;
        padding: 20px 32px;
        width: 200px;
        border-radius: 30px;
        text-transform: capitalize;
        font-weight: 600;
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    .container {
      flex-direction: column;
      padding: 4rem 2rem;
      gap: 5rem;
      .left {
        img {
          width: 280px;
        }
        .leftfloat {
          width: 200px;
          padding: 1rem;
          h2 {
            font-size: 10px;
          }
          div {
            align-items: center;
            padding-bottom: 0.5rem;

            span {
            }
            a {
              font-size: 7px;
              padding-bottom: 0;
            }
          }
        }
      }
      .right {
        width: 320px;
        h1 {
          font-size: 24px;
        }
        h6 {
          font-size: 9px;
        }
        p {
          font-size: 9px;
        }
        button {
          font-size: 10px;

          border: 1px solid;
          padding: 7px 8px;
          width: 120px;
        }
      }
    }
  }
`;
export const OfferSec = styled.div`
  max-width: 930px;
  margin: 5rem auto;
  .title {
    margin-bottom: 3rem;
    width: 50%;
    h1 {
      font-family: "Playfair Display", serif;
      font-size: 41px;
    }
  }
  .body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    .card {
      border: none;
      width: 215px;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      img {
        border-radius: 12px;
      }
      h4 {
        font-size: 16px;
        font-weight: 600;
        margin-top: 1rem;
      }
      p {
        font-size: 11px;
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    padding: 1rem 4rem;
    .title {
      width: 80%;
      h1 {
        font-size: 24px;
      }
    }
    .body {
      grid-template-columns: 1fr;

      margin: 0 auto;
    }
  }
`;
export const DeliverySec = styled.div`
  background-color: #f9f9f7;
  max-width: 1200px;
  margin: 0 auto;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 930px;
    gap: 6rem;
    padding: 10rem 0;

    .left {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      .imgMain {
        flex: 60;
        transform: translateY(-30px);
        img {
          width: 100%;
        }
      }
      .imgDuo {
        flex: 40;
        img {
          width: 100%;
        }
        img:first-child {
          margin-bottom: 1.5rem;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font-family: "Playfair Display", serif;
        font-size: 41px;
      }
      p {
        font-size: 11px;
      }
      .bullet {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.7rem;
        padding-top: 1rem;
        .bulletpoint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          span {
            background-color: #ad343e;
            padding: 0.2rem 0.5rem;
            border-radius: 50px;
            font-size: 15px;
            color: #fff;
            font-weight: 600;
          }
          p {
            padding-top: 10px;
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    .container {
      padding: 4rem 2rem;
      flex-direction: column-reverse;
      .left {
      }
      .right {
        h1 {
          font-size: 24px;
          max-width: 50%;
        }
        .bullet {
          .bulletpoint {
            span {
              font-size: 12px;
            }
            p {
              font-size: 11px;
            }
          }
        }
      }
    }
  }
`;
export const TestimonialSec = styled.div`
  margin: 5rem auto;

  .container {
    max-width: 930px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    .title {
      h1 {
        font-family: "Playfair Display", serif;
        font-size: 41px;
      }
    }
    .cardHolder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;

      .cardBox {
        background-color: #f9f9f7;
        padding: 2rem;
        border-radius: 12px;
        h4 {
          color: #ad343e;
          font-weight: 600;
          font-size: 16px;
        }
        p {
          font-size: 12px;
          padding-bottom: 1rem;
        }
        .user {
          display: flex;
          align-items: center;
          gap: 2rem;
          border-top: 1px solid #eee;
          padding-top: 2rem;
          img {
            width: 60px;
          }
          .userText {
            display: flex;
            flex-direction: column;
            align-items: start;
            text-transform: capitalize;
            padding-top: 10px;
            h6 {
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    .container {
      padding: 0 2rem;
      align-items: start;
      .title {
        h1 {
          font-size: 24px;
        }
      }
      .cardHolder {
        grid-template-columns: 1fr;
        .cardBox {
          h4 {
            font-size: 12px;
          }
          p {
            font-size: 9px;
          }
          .user {
            padding-top: 0.5rem;

            img {
              width: 40px;
            }
            .userText {
              padding-top: 20px;
              h6 {
                font-size: 11px;
              }
              p {
                font-size: 9px;
              }
            }
          }
        }
      }
    }
  }
`;
export const BlogSec = styled.div`
  background-color: #f9f9f7;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;

  .containerr {
    max-width: 930px;
    margin: 0 auto;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      h1 {
        font-family: "Playfair Display", serif;
        font-size: 41px;
      }
      button {
        border-radius: 118px;
        padding: 20px 32px;
        font-weight: 600;
        color: #f9f9f7;
        background-color: #ad343e;
        border: none;
      }
    }
    .main {
      display: flex;
      align-items: start;
      justify-content: space-between;
      .left {
        width: 50%;

        .foodCard {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0.5px 0.5px 7px rgba(0, 0, 0, 0.1);
          img {
            width: 100%;
          }
          .text {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            h6 {
              opacity: 60%;
              font-weight: 500;
            }
            h3 {
              font-size: 16px;
              font-weight: 600;
            }
            p {
              font-size: 13px;
            }
          }
        }
      }
      .right {
        .cardContainer {
          display: grid;
          grid-template-columns: repeat(2, 205px);
          gap: 2rem;
          .foodCard {
            display: flex;
            flex-direction: column;
            background-color: #fff;
            border-radius: 12px;
            gap: 2rem;
            box-shadow: 0.5px 0.5px 7px rgba(0, 0, 0, 0.1);

            img {
              width: 100%;
            }
            .text {
              display: flex;
              flex-direction: column;
              padding: 2rem;

              gap: 1rem;
              h6 {
                opacity: 60%;
                font-weight: 500;
              }
              h3 {
                font-size: 16px;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    .containerr {
      padding: 0 2rem;
      .title {
        h1 {
          font-size: 24px;
          max-width: 35%;
        }
        button {
          padding: 6px 12px;
          font-size: 11px;
        }
      }
      .main {
        flex-direction: column;
        gap: 2rem;
        .left {
          width: 100%;
          .foodCard {
            gap: 2rem;

            .text {
              gap: 1.5rem;

              h6 {
                font-size: 9px;
              }
              h3 {
                font-size: 11px;
              }
              p {
                font-size: 9px;
              }
            }
          }
        }
        .right {
          .cardContainer {
            grid-template-columns: repeat(2, 1fr);

            .foodCard {
              gap: 2rem;

              .text {
                padding: 1rem;

                h6 {
                  font-size: 9px;
                }
                h3 {
                  font-size: 11px;
                }
                p {
                  font-size: 9px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const FooterSec = styled.footer`
  max-width: 1200px;

  margin: 3rem auto 0;
  padding: 9rem 0;
  background-color: #474747;
  .main {
    max-width: 930px;
    margin: 0 auto;
    display: flex;
    gap: 7rem;
    .left {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      width: 30%;
      .logo {
        display: flex;
        align-items: center;
        gap: 5px;
        img {
          width: 30px;
        }
        h1 {
          font-size: 20px;
          color: #fff;
          padding-top: 8px;
          font-family: "Playfair Display", serif;
        }
      }
      p {
        color: #fff;
        width: 75%;
      }
      .socials {
        display: flex;
        align-items: center;
        gap: 2rem;
        span {
          a {
            color: #fff;
            font-size: 14px;
          }
          a:hover {
            color: #bde88c;
          }
        }
      }
    }
    .middle {
      color: #fff;
      display: flex;
      gap: 6rem;
      flex: 1;
      div {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;

        h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2rem;
          font-family: "Playfair Display", serif;
        }
        a {
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 300;
        }
        a:hover {
          color: #bde88c;
        }
      }
    }
    .right {
      color: #fff;
      h4 {
        font-family: "Playfair Display", serif;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 4rem;
      }
      .imgs {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        img {
          width: 120px;
        }
      }
    }
  }
  .copy {
    margin-top: 7rem;
    p {
      color: #fff;
      text-align: center;
      span {
        a {
          color: #ad343e;
          font-weight: 600;
          text-decoration: none;
        }
      }
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    padding: 2rem 0;

    .main {
      padding: 2rem;
      flex-direction: column;
      gap: 3rem;

      .left {
        width: 100%;
        gap: 1rem;
        .logo {
          img {
            width: 20px;
          }
          h1 {
            font-size: 12px;
          }
        }
        p {
          font-size: 9px;
          width: 90%;
        }
        .socials {
          span {
            a {
              font-size: 10px;
            }
          }
        }
      }
      .middle {
        div {
          h4 {
            font-size: 11px;
          }
          a {
            font-size: 9px;
          }
        }
      }
      .right {
        h4 {
          font-size: 11px;
        }
        .imgs {
          grid-template-columns: repeat(2, 120px);
          img {
            width: 100%;
          }
        }
      }
    }
    .copy {
      margin-top: 3rem;
      p {
        font-size: 9px;
      }
    }
  }
`;
