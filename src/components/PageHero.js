import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title, singleProduct }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {singleProduct && <Link to='/products'>/ Produits</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.section`
  background: var(--secondaryColor);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--textColor);
  a {
    color: var(--textColor);
    padding: 0.5rem;
    text-decoration: none;
    text-transform: capitalize;
    transition: var(--transition);
  }
  a:hover {
    color: var(--headlineColor);
  }
`;

export default PageHero;
