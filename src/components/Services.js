import React from "react";
import styled from "styled-components";
/* Assets */
import { services } from "../utils/data";

function Services() {
  return (
    <Wrapper>
      <div className='section-center'>
        {/* <article className='header'>
          <h3>Notre savoir faire</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            beatae!
          </p>
        </article> */}
        <div className='services-center'>
          {services.map((service) => {
            const { id, title, icon, desc } = service;
            return (
              <article key={id} className='service'>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <div className='underline'></div>
                <p>{desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.section`
  /* h3 {
    color: var(--backgroundColor);
  }*/
  h4 {
    color: var(--headlineColor);
    text-transform: capitalize;
  }
  padding: 2rem 0;
  background: var(--headlineColor);
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--backgroundColor);
    padding-top: 1rem;
  }
  .underline {
    width: 6rem;
    height: 0.25rem;
    background: var(--headlineColor);
    margin-left: auto;
    margin-right: auto;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--cardBackground);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--borderRadius);
    p {
      color: var(--textColor);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--headlineColor);
    color: var(--backgroundColor);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
