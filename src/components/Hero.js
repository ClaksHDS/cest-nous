import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Assets */
import logo from "../assets/logo.webp";
import banner from "../assets/banner.png";

function Hero() {
  return (
    <Wrapper>
      <article className='content'>
        <img
          src={banner}
          className='hero-img'
          alt='banner presenting the different products of the distllery : gin, vodka, ginfusions, cold-brew, rhums'
        />
        <Link to='/products' className='btn hero-btn'>
          découvrez nos spiritueux
        </Link>

        {/* <h1>
          "meilleur gin français" <br />
          <i>world gin awards 2019, 2020 et 2023</i>
          <br />
          micro distillerie en Normandie
        </h1>
        <Link to='/products' className='btn hero-btn'>
          découvrez nos spiritueux
        </Link>
      </article>
      <article className='img-container'>
        <img
          src={logo}
          alt="logo distillerie c'est nous"
          className='accent-img'
        /> */}
      </article>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.section`
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 90vh; /* if you don't want it to take up the full screen, reduce this number */
    overflow: hidden;
    scroll-behavior: smooth;
    margin: 0 auto;
  }
  .hero-img {
    object-fit: cover;

    justify-content: center;
    overflow: hidden;
  }
  .hero-btn {
    background: var(--headlineColor);
    color: var(--backgroundColor);
    margin-top: 2rem;
    transition: var(--transition);
  }
  .hero-btn:hover {
    background: var(--secondaryColor);
  }
  /*  h1 {
    line-height: 2;
    text-transform: capitalize;
    color: var(--headlineColor);
  }
  
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--textColor);
    font-size: 1rem;
  } */
  @media (min-width: 992px) {
    height: calc(100vh - 6rem);
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    /* h1 {
      margin-bottom: 2rem;
      line-height: 1.5;
    }
    p {
      font-size: 1.25rem;
    } */
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    /* .img-container {
      display: block;
      position: relative;
    } */
  }
`;

export default Hero;
