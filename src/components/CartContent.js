import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Context */
import { useCartContext } from "../context/cart_context";
/* Components */
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continuer mon shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          aria-label='clear your cart'
          onClick={clearCart}
        >
          vider mon panier
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--headlineColor);
    color: var(--backgroundColor);
    text-decoration: none;
    transition: var(--transition);
    border-radius: var(--borderRadius);
    font-weight: 400;
    cursor: pointer;
  }
  .link-btn:hover,
  .link-btn:focus {
    background: var(--secondaryColor);
    color: var(--backgroundColor);
  }
  .clear-btn {
    background: var(--headlineColor);
    transition: var(--transition);
  }
`;
export default CartContent;
