import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Assets */
import logo from "../assets/logo.webp";
import bottle from "../assets/gin-bottle.webp";

function Hero() {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
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
        />
      </article>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  h1 {
    line-height: 2;
    text-transform: capitalize;
    color: var(--headlineColor);
  }
  .hero-btn {
    background: var(--headlineColor);
    color: var(--backgroundColor);
    margin-top: 2rem;
  }
  .hero-btn:hover {
    background: var(--secondaryColor);
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
  }
  @media (min-width: 992px) {
    height: calc(100vh - 6rem);
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    h1 {
      margin-bottom: 2rem;
      line-height: 1.5;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
  }
`;

export default Hero;
