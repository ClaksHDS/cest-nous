import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Assets */
import logo from "../assets/logo.webp";
import banner from "../assets/banner-img-big.png";
import bannerSmall from "../assets/banner-img-small.png";

function Hero() {
  return (
    <Wrapper>
      <article>
        <div className='content'>
          <img src={logo} alt="logo distillerie c'est nous" className='logo' />
          <h2>Micro Distillerie en Normandie</h2>
          <img
            src={bannerSmall}
            className='hero-img-small'
            alt='banner presenting the different products of the distillery : awarded gin, vodka'
          />
          <img
            src={banner}
            className='hero-img-big'
            alt='banner presenting the different products of the distillery : awarded gin, vodka'
          />
          <h3>meilleur gin français</h3>
          <h4>
            <i>"Gin awards 2023, 2020 et 2019"</i>
          </h4>
        </div>

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
  display: grid;
  justify-content: center;
  place-items: center;
  .content {
    display: grid;
    place-items: center;
    text-align: center;
    width: 100%;
    height: 90vh;
    margin: 0 auto;
  }
  .logo {
    padding-top: 2rem;
    padding-bottom: 0;
  }

  .hero-img-small {
    object-fit: cover;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 80%;
  }
  .hero-img-big {
    display: none;
  }

  .hero-btn {
    margin: 0 auto;
    text-align: center;
    background: var(--headlineColor);
    color: var(--backgroundColor);
    margin: 3rem;
    transition: var(--transition);
  }
  .hero-btn:hover {
    background: var(--secondaryColor);
  }
  @media (min-width: 992px) {
    .hero-img-small {
      display: none;
    }
    .hero-img-big {
      display: block;
      object-fit: contain;
      justify-content: center;
      overflow: hidden;
      width: 90%;
      height: 80%;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export default Hero;
