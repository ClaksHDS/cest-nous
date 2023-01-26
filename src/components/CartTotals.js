import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Context */
import { useCartContext } from "../context/cart_context";
/* Helpers */
import { formatPrice } from "../utils/helpers";

const CartTotals = () => {
  const { total_amount, shipping_mondial_relay, shipping_colissimo } =
    useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            sous-total : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            frais de port: <span>{formatPrice(shipping_mondial_relay)}</span>
          </p>
          <hr />
          <h4>
            total :{" "}
            <span>{formatPrice(total_amount + shipping_mondial_relay)}</span>
          </h4>
        </article>
        <Link to='/checkout' className='btn'>
          procéder au paiement
        </Link>
      </div>
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--secondaryColor);
    border-radius: var(--borderRadius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    background: var(--headlineColor);
    color: var(--backgroundColor);
  }
  .btn:hover {
    background: var(--secondaryColor);
  }
`;

export default CartTotals;
