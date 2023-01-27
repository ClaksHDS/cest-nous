import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Components */
import { PageHero, Sliders } from "../components";
/* Assets */
import { bio } from "../utils/data";

function AboutPage() {
  return (
    <main>
      <PageHero title='About' />
      <Wrapper className='page section section-center'>
        <div className='story-container'>
          <article>
            <div className='title'>
              <h2>notre distillerie</h2>
              <div className='underline'></div>
            </div>
            <p>
              La distillerie C'est Nous a été créée en 2016 par un anglais (pays
              du Gin) et une sommelière française. C'est à Caen, en Normandie
              que la distillerie artisanale s'est installée.
            </p>
            <p>
              {" "}
              Nous utilisons des alambics en cuivre <i>pot still</i> et
              distillons nos spiritueux lentement pour plus de complexité. La
              distillation sera suivie de différentes étapes comme
              l'embouteillage, l'habillage ou encore le cirage que nous
              pratiquons manuellement.
            </p>
            <div className='link-container'>
              <Link to='/products' className='btn nav-btn'>
                Découvrir nos spiritueux
              </Link>
            </div>
          </article>
          <Sliders />
        </div>
        <div className='title founder-title'>
          <h2>les fondateurs</h2>
          <div className='underline'></div>
        </div>
        <article className='founder-container'>
          {bio.map((founder) => {
            const { id, founderName, bio, quote, img } = founder;
            return (
              <section className='team-box' key={id}>
                <div className='founder-img'>
                  <img src={img} alt={founderName} />
                  <div className='underline'></div>
                </div>
                <h3>{founderName}</h3>
                <hr />
                <p>{bio}</p>
                <hr />
                <p className='founder-quote'>"{quote}"</p>
              </section>
            );
          })}
        </article>
      </Wrapper>
    </main>
  );
}

/* Styles */
const Wrapper = styled.section`
  .story-container {
    display: grid;
    gap: 2rem;
    padding-bottom: 4rem;
    .nav-btn {
      margin: 2rem;
      background: var(--headlineColor);
      color: var(--backgroundColor);
      display: flex;
      justify-content: center;
      padding: 0.55rem 2rem;
    }
    .nav-btn:hover {
      background: var(--secondaryColor);
    }
  }
  .link-container {
    display: flex;
    justify-content: center;
  }
  h2 {
    text-align: center;
    text-transform: capitalize;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--borderRadius);
    height: 500px;
    object-fit: cover;
  }
  p {
    max-width: 45em;
    line-height: 1.5;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--textColor);
  }
  .title {
    text-align: left;
  }
  .founder-title {
    padding-bottom: 2rem;
  }

  .founder-container {
    display: grid;
    gap: 2rem;
    max-width: var(--maxWidth);
    width: 80vw;
    margin: 2rem auto;
  }
  .team-box {
    background: var(--cardBackground);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    padding: 2rem;
    h3 {
      text-align: center;
      padding-top: 2rem;
      font-weight: 450;
    }
    img {
      width: 250px;
      height: 250px;
      margin: 0 auto;
      border-radius: 50%;
    }
    .founder-quote {
      font-style: italic;
      text-align: center;
    }
  }
  .team-box:hover {
    box-shadow: var(--shadow-2);
  }

  @media (min-width: 992px) {
    .story-container {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
    .founder-container {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }
`;

export default AboutPage;
