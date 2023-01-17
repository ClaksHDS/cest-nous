import React from "react";
import { Link } from "react-router-dom";
import { navButtons } from "../utils/data";
import styled from "styled-components";
/* react icons */
import { BsBasket2, BsPerson } from "react-icons/bs";

const CartButtons = () => {
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn'>
        Panier
        <span className='cart-container'>
          <BsBasket2 />
          <span className='cart-value'>4</span>
        </span>
      </Link>
      <button type='button' className='auth-btn'>
        Login <BsPerson />
      </button>
    </Wrapper>
  );
};
/* Component styles */
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    color: var(--headlineColor);
    font-size: 1rem;
    display: flex;
    align-items: center;
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
  }
`;
export default CartButtons;
