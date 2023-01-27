import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
/* Context */
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
/* Assets */
import { navButtons } from "../utils/data";
/* React icons */
import { BsBasket2, BsPersonPlus, BsPersonX } from "react-icons/bs";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Panier
        <span className='cart-container'>
          <BsBasket2 />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Déconnexion
          <span>
            <BsPersonX />
          </span>
        </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Se connecter
          <span>
            <BsPersonPlus />
          </span>
        </button>
      )}
    </Wrapper>
  );
};
/* Component styles */
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 325px;
  .cart-btn {
    color: var(--headlineColor);
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    span {
      font-size: 1.5rem;
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -14px;
    background: var(--cardBackground);
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: var(--headlineColor);
    svg {
      margin-left: 5px;
    }
    span {
      font-size: 1.5rem;
    }
  }
`;
export default CartButtons;
