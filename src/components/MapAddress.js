import React from "react";
import styled from "styled-components";
/* React Icons */
import { BsTelephoneOutbound } from "react-icons/bs";

const MapAddress = () => {
  return (
    <Wrapper className='section-center'>
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
          continuer d'étendre les spiritueux <b>C'est Nous</b>, n'hésitez pas à
          nous contacter.
        </p>
        <p>
          Écrivez-nous à{" "}
          <a href='mailto:info@cestnous-gin.com' title='écrivez-nous par mail'>
            info@cestnous-gin.com
          </a>
        </p>
        <p>
          {" "}
          <BsTelephoneOutbound /> <span>07-83-89-70-30</span>
        </p>
      </div>
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.section`
  .map-container {
    display: grid;
    place-items: center;
    padding: 2rem;
  }
  @media (min-width: 992px) {
    .map {
      width: 400;
      height: 425;
    }
  }
`;

export default MapAddress;
