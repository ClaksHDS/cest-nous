import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Context */
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
/* Assets */
import logo from "../assets/logo.webp";
import { links } from "../utils/data";
/* Components */
import CartButtons from "./CartButtons";
/* React icons */
import { BiMenu } from "react-icons/bi";

const NavLinks = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer role='navigation' aria-label='Menu principal'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link
            to='/'
            src={logo}
            aria-label="logo : navigue sur la page d'accueil"
          >
            <img src={logo} alt="Logo Distillerie C'est Nous" />
          </Link>
          <button
            type='button'
            className='nav-toggle'
            onClick={openSidebar}
            aria-label='open sidebar'
          >
            <BiMenu />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link
                to='/checkout'
                aria-label='Paiement : navigue vers la page de paiement'
              >
                paiement
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

export default NavLinks;

/* Component styles  */
const NavContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 95px;
      margin-left: -15px;
      transition: var(--transition);
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--headlineColor);
    transition: var(--transition);
    cursor: pointer;
    svg {
      font-size: 2.5rem;
    }
    svg:hover {
      color: var(--secondaryColor);
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--headlineColor);
        font-size: 1rem;
        text-transform: capitalize;
        text-decoration: none;
        transition: var(--transition);
        padding: 0.5rem;
        &:hover,
        &:focus {
          border-bottom: 1.75px solid var(--headlineColor);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
