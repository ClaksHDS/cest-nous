import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Assets */

import banner from "../assets/banner.png";
import bannerSmall from "../assets/banner-small-screen.png";

function Hero() {
  return (
    <Wrapper>
      <article>
        <div className='content'>
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
        </div>
        <div className='link-container'>
          <Link
            to='/products'
            aria-label="Découvrir nos spiritueux : Navigue vers la page présentant l'ensemble des produits"
            className='btn hero-btn'
          >
            découvrez nos spiritueux
          </Link>
        </div>
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

  .link-container {
    display: grid;
    place-items: center;
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
    margin-bottom: 4rem;
    padding: 0.75rem 1.5rem;
    transition: var(--transition);
  }
  .hero-btn:hover,
  .hero-btn:focus {
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
      padding: 0.85rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export default Hero;
