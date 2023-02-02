import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Assets */
import bottle from "../assets/gin-bottle.webp";

function Story() {
  return (
    <Wrapper className='section-center'>
      <div className='title'>
        <h2>À propos de nous</h2>
        <div className='underline'></div>
      </div>
      <article className='story-container'>
        <div className='story'>
          <p>
            Créée par une sommelière française et un anglais amoureux du gin en
            2016, C'est Nous est une distillerie artisanale basée en Normandie.
          </p>
          <p>
            Nous utilisons des alambics <i>pot still</i> pour nos distillations
            que nous préférons lentes avec une chauffe à nue. Embouteillage,
            habillage, ... sont tout autant d'étapes que nous faisons
            manuellement.
          </p>
          <p>
            Toujours dans un but d'adaptabilité, tous nos spiritueux artisanaux
            sont à consommer comme <b>vous </b>les aimez.
          </p>
          <div className='btn-container'>
            <Link to='/about' className='btn story-btn'>
              en savoir plus
            </Link>
          </div>
        </div>
        <div className='img-container'>
          <img src={bottle} alt="bouteille de notre gin artisanal c'est nous" />
        </div>
      </article>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  padding: 2rem 0;
  h2 {
    text-align: center;
    text-transform: capitalize;
  }
  .story-container {
    display: grid;
    place-content: center;
    gap: 2rem;
  }
  .btn-container {
    display: flex;
    justify-content: center;
  }
  .story-btn {
    margin-top: 2rem;
    background-color: var(--headlineColor);
    color: var(--backgroundColor);
    transition: var(--transition);
    box-shadow: var(--shadow-1);
    padding: 0.55rem 2rem;
    transition: var(--transition);
  }
  .story-btn:hover {
    background: var(--secondaryColor);
  }
  img {
    margin: 0 auto;
    height: 400px;
  }
  p {
    max-width: 45em;
    line-height: 1.5;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--textColor);
  }
  .img-container {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 992px) {
    .story-container {
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
    }
  }
`;
export default Story;
