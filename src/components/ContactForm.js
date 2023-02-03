import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Wrapper>
      <h2>contactez-nous</h2>
      <div className='underline'></div>
      <p>
        Nous sommes toujours à la recherche de nouveaux partenaires pour
        continuer d'étendre les spiritueux <b>C'est Nous</b>, n'hésitez pas à
        nous écrire.
      </p>
      <form class='form'>
        <div class='form-row'>
          <label for='name' class='form-label'>
            Nom
          </label>
          <input
            type='text'
            placeholder='Votre nom'
            id='name'
            class='form-input'
            autoComplete='family-name'
          />
        </div>
        <div class='form-row'>
          <label for='email' class='form-label'>
            Email
          </label>
          <input
            type='email'
            id='email'
            class='form-input'
            placeholder='votre adresse e-mail'
            autoComplete='email'
            required
          />
          <small class='form-alert'>
            * Veuillez renseigner votre adresse e-mail
          </small>
        </div>
        <div class='form-row'>
          <label for='objet' class='form-label'>
            Objet
          </label>
          <input
            type='text'
            placeholder='Objet de votre demande'
            id='objet'
            class='form-input'
          />
        </div>
        <div class='form-row'>
          <label for='textarea' class='form-label'>
            Votre Message
          </label>
          <textarea class='form-textarea'>Ecrivez votre message</textarea>
        </div>
        <button
          class='btn btn-block'
          aria-label="send your message to C'est Nous team"
          type='submit'
        >
          envoyer
        </button>
      </form>
    </Wrapper>
  );
};

/* Styles */

const Wrapper = styled.aside`
  padding-top: 2rem;
  .underline {
    width: 6rem;
    height: 0.25rem;
    background: var(--headlineColor);
    margin-left: auto;
    margin-right: auto;
  }
  p {
    text-align: center;
  }
  .form {
    width: 90vw;
    max-width: var(--fixedWidth);
    background: #f2ebe2;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    font-weight: bold;
  }
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--headlineColor);
  }
  .form-row {
    margin-bottom: 1rem;
  }
  .form-textarea {
    height: 7rem;
  }
  ::placeholder {
    font-family: inherit;
    color: var(--textColor);
  }
  .form-alert {
    color: #60151b;
  }
  .btn {
    color: var(--backgroundColor);
    background: var(--headlineColor);
    display: inline-block;
    width: 100%;
    transition: var(--transition);
  }
  .btn:hover,
  .btn:focus {
    background: var(--secondaryColor);
  }
`;
export default ContactForm;
