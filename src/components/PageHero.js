import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title, singleProduct }) => {
  return (
    <Wrapper aria-label='Menu de navigation secondaire'>
      <div className='section-center'>
        <h2>
          <Link to='/'>Accueil</Link>
          {singleProduct && <Link to='/products'>/ Produits</Link>}/ {title}
        </h2>
      </div>
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.section`
  background: var(--headlineColor);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--backgroundColor);
  a {
    color: var(--backgroundColor);
    padding: 0.5rem;
    text-decoration: none;
    text-transform: capitalize;
    transition: var(--transition);
  }
  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;

export default PageHero;
