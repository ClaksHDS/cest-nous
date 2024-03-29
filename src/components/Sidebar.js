import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
/* Assets */
import logo from "../assets/logo.webp";
import { links } from "../utils/data";
/* Components */
import CartButtons from "./CartButtons";
/* Context */
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
/* React icons */
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt="logo distillerie c'est nous" />
          <button
            className='close-btn'
            type='button'
            onClick={closeSidebar}
            aria-label='close sidebar'
          >
            <IoCloseOutline />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>
                paiement
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </Wrapper>
  );
};

/* Styles */

const Wrapper = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--headlineColor);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover,
  .close-btn:focus {
    color: var(--secondaryColor);
  }
  .logo {
    justify-self: center;
    height: 125px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-decoration: none;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--textColor);
    transition: var(--transition);
  }
  .links a:hover,
  .links a:focus {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--cardBackground);
    color: var(--textColor);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--backgroundColor);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
