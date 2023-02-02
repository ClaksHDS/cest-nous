import React from "react";
import styled from "styled-components";
/* React Icons */
import { BsTelephoneOutbound } from "react-icons/bs";

const MapAddress = () => {
  return (
    <Wrapper className='section-center'>
      <div className='title'>
        <h2>Contactez-nous</h2>
        <div className='underline'></div>
      </div>
      <div className='contact-content'>
        <div className='map-container'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10428.91733561698!2d-0.2841882!3d49.1962089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc80c8109569baa7!2sDistillerie%20C&#39;est%20Nous!5e0!3m2!1sen!2suk!4v1675267311199!5m2!1sen!2suk'
            width='500'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='map'
          ></iframe>
        </div>
        <div className='contact-container'>
          <p>
            Nous sommes toujours à la recherche de nouveaux partenaires pour
            continuer d'étendre les spiritueux <b>C'est Nous</b>, n'hésitez pas
            à nous contacter.
          </p>
          <p>
            Écrivez-nous à{" "}
            <a
              href='mailto:info@cestnous-gin.com'
              title='écrivez-nous par mail'
            >
              info@cestnous-gin.com
            </a>
          </p>
          <p>
            {" "}
            <BsTelephoneOutbound /> <span>07-83-89-70-30</span>
          </p>
          <hr />
        </div>
      </div>
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  padding-top: 5rem;
  h2 {
    padding-top: 2rem;
    text-align: center;
    text-transform: capitalize;
  }
  .contact-content {
    padding-top: 2rem;
    display: grid;
  }
  .map-container {
    padding: 2rem;
    .map {
      width: 380px;
      height: 400px;
    }
  }
  p {
    line-height: 2;
    max-width: 45em;
    padding-bottom: 1rem;
  }
  a {
    color: var(--headlineColor);
    font-weight: bold;
  }
  @media (min-width: 992px) {
    .contact-content {
      grid-template-columns: repeat(2, 1fr);
      .map {
        width: 500;
        height: 455;
      }
      .contact-container {
        justify-items: center;
        padding-top: 7rem;
      }
    }
  }
`;

export default MapAddress;
