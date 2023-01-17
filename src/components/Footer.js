import React from "react";
import styled from "styled-components";
import { socialLinks } from "../utils/data";

function Footer() {
  return (
    <Wrapper>
      <ul className='social-links'>
        {socialLinks.map((social) => {
          const { id, icon, url } = social;
          return (
            <li key={id}>
              <a
                href={url}
                target='_blank'
                aria-label='links directing to our social media accounts'
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
      <p>
        &copy; {new Date().getFullYear()}
        <span> Distillerie C'est Nous</span>
      </p>
      <ul className='legal-links'>
        <li>mentions légales</li>
        <li>trade contact</li>
        <li>privacy policy</li>
      </ul>
    </Wrapper>
  );
}

/* Component styles */
const Wrapper = styled.footer`
  height: 9rem;
  background: var(--secondaryColor);
  text-align: center;
  color: var(--backgroundColor);
  .social-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 1rem;
    padding-top: 1rem;
    a {
      font-size: 1.4rem;
      margin: 0 1rem;
      color: var(--backgroundColor);
      transition: var(--transition);
    }
    a:hover {
      font-size: 1.5rem;
    }
  }
  p {
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .legal-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    li {
      text-transform: capitalize;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
`;

export default Footer;
