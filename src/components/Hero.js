import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Assets */
import logo from "../assets/logo.webp";
import banner from "../assets/banner.png";
import bannerSmall from "../assets/banner-small-screen.png";

function Hero() {
  return (
    <Wrapper>
      <article className='content'>
        <img
          src={bannerSmall}
          className='hero-img'
          alt='banner presenting the different products of the distllery : awarded gin, vodka'
        />
        {/* <img
          src={banner}
          className='hero-img-big'
          alt='banner presenting the different products of the distllery : gin, vodka, ginfusions, cold-brew, rhums'
        /> */}

        <Link to='/products' className='btn hero-btn'>
          découvrez nos spiritueux
        </Link>
      </article>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.section`
  background: #fcfaf7;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    scroll-behavior: smooth;
    margin: 0 auto;
  }
  .hero-img {
    object-fit: contain;
    justify-content: center;
    overflow: hidden;
    width: 90%;
  }
  .hero-btn {
    background: var(--headlineColor);
    color: var(--backgroundColor);
    margin: 3rem;
    transition: var(--transition);
  }
  .hero-btn:hover {
    background: var(--secondaryColor);
  }
  @media (min-width: 992px) {
    height: calc(100vh - 6rem);
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    .hero-img {
      object-fit: contain;
      width: 100%;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export default Hero;
