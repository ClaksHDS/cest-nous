import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Context */
import { useCartContext } from "../context/cart_context";
/* Components */
import AmountButtons from "./AmountButtons";

function AddToCart({ singleProduct }) {
  const { addToCart } = useCartContext();
  const { id, stock } = singleProduct;

  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to='/cart'
          className='btn add-to-cart'
          aria-label='add a product to the cart'
          onClick={() => addToCart(id, amount, singleProduct)}
        >
          Ajouter au panier
        </Link>
      </div>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.section`
  margin-top: 2rem;
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 240px;
    background-color: var(--headlineColor);
    color: var(--backgroundColor);
    transition: var(--transition);
  }
  .btn:hover {
    background-color: var(--secondaryColor);
  }
  .add-to-cart {
    text-align: center;
  }
`;
export default AddToCart;
