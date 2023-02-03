import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Assets */
import { socialLinks } from "../utils/data";
/* React Icons */
import { BsEnvelope } from "react-icons/bs";

function Footer() {
  return (
    <Wrapper role='contentinfo'>
      <ul className='social-links'>
        {socialLinks.map((social) => {
          const { id, icon, url } = social;
          return (
            <li key={id}>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='links directing to our social media accounts'
                title='visitez nos réseaux sociaux pour suivre notre actualité'
              >
                {icon}
              </a>
            </li>
          );
        })}
        <li>
          <a href='mailto:info@cestnous-gin.com' title='écrivez-nous par mail'>
            <BsEnvelope />
          </a>
        </li>
      </ul>
      <Link to='/mentions-légales' className='nav-link'>
        Mentions Légales
      </Link>
      <p>
        &copy; {new Date().getFullYear()}
        <span> Distillerie C'est Nous</span>
        {""} - micro distillerie en Normandie
      </p>
    </Wrapper>
  );
}

/* Component styles */
const Wrapper = styled.footer`
  height: 10rem;
  background: var(--headlineColor);
  text-align: center;
  color: var(--backgroundColor);
  .social-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 0.02rem;
    padding-top: 1rem;
    a {
      font-size: 1.4rem;
      margin: 0 1rem;
      color: var(--backgroundColor);
      transition: var(--transition);
      cursor: pointer;
    }
    a:hover,
    a:focus {
      font-size: 1.5rem;
    }
  }
  .nav-link {
    text-decoration: underline;
    transition: var(--transition);
  }
  p {
    margin: 0 auto;
    padding: 1rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 1.25;
    color: var(--backgroundColor);
  }
`;

export default Footer;
