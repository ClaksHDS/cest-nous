import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Assets */
import error from "../assets/error.png";

function ErrorPage() {
  return (
    <Wrapper className='page-100'>
      <section>
        <img src={error} alt='404 page not found' />
        <h1>page introuvable</h1>
        <h2>Nous n'avons pas trouvé de résultat pour cette page.</h2>
        <h2>Vérifiez que l'URL du site est correcte.</h2>
        <Link to='/' className='button'>
          Accueil
        </Link>
      </section>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.main`
  background: var(--backgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 80vw;
    max-width: 600px;
    display: block;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
  h1 {
    font-size: 3rem;
    text-transform: capitalize;
    color: var(--headlineColor);
  }
  h2 {
    font-size: 1rem;
  }
  .button {
    margin-top: 1rem;
    padding-top: 2rem;
    background-color: var(--headlineColor);
    color: var(--backgroundColor);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.375rem 0.75rem;
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
    border-color: transparent;
  }
  .button:hover {
    color: var(--secondaryColor);
    background: var(--cardBackground);
  }
`;

export default ErrorPage;
