import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Context */
import { useCartContext } from "../context/cart_context";
/* Components */

const CartContent = () => {
  return <div>CartContent</div>;
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
    border-radius: var(--borderRadius);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--headlineColor);
  }
`;
export default CartContent;
