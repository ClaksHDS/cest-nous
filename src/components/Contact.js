import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Inscrivez-vous à notre newsletter</h3>
        <div className='content'>
          <p>
            Pour être les premiers au courant de nos dernières créations et des
            évènements auxquels vous pourrez nous retrouver. Et surtout, restez
            à l'écoute de nos activités à venir : ateliers et visites de notre
            distillerie au programme !{" "}
          </p>

          <form
            className='contact-form'
            action='https://formspree.io/f/myyazbwn'
            method='POST'
          >
            <input
              type='email'
              className='form-input'
              placeholder='votre adresse mail'
              name='email'
            />
            <button
              type='submit'
              className='submit-btn'
              aria-label='subscribe to the newsletter'
            >
              inscrivez-vous
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.section`
  padding: 2rem 0;
  margin: 2rem auto;
  h3 {
    text-transform: capitalize;
    padding-bottom: 1rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--textColor);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--headlineColor);
  }
  .form-input {
    border-right: none;
    color: var(--textColor);
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  .submit-btn {
    border-top-right-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
  .form-input::placeholder {
    color: var(--textColor);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--headlineColor);
    text-transform: capitalize;
    cursor: pointer;
    transition: var(--transition);
    color: var(--backgroundColor);
  }
  .submit-btn:hover {
    background: var(--secondaryColor);
  }
  @media (min-width: 992px) {
    padding: 0;
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 4rem;
    margin-bottom: 2rem;
  }
`;

export default Contact;
