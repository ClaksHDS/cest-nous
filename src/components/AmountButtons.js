import React from "react";
import styled from "styled-components";

function AmountButtons({ increase, decrease, amount }) {
  return (
    <Wrapper className='amount-btns'>
      <button
        type='button'
        className='amount-btn'
        aria-label='remove one item'
        onClick={decrease}
      >
        -
      </button>
      <h2 className='amount'>{amount}</h2>
      <button
        type='button'
        className='amount-btn'
        aria-label='add an item'
        onClick={increase}
      >
        +
      </button>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    color: var(--headlineColor);
    cursor: pointer;
    padding: 1rem 0;
    font-size: 2rem;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
