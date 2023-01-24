import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Context */
/* Components */
import AmountButtons from "./AmountButtons";

function AddToCart({ singleProduct }) {
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
        <Link to='/cart' className='btn'>
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
  }
  .btn:hover {
    background-color: var(--secondaryColor);
  }
`;
export default AddToCart;
