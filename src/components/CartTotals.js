import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Context */
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
/* Helpers */
import { formatPrice } from "../utils/helpers";

const CartTotals = () => {
  const {
    total_amount,
    shipping_mondial_relay,
    shipping_colissimo,
  } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h4>
            sous-total : <span>{formatPrice(total_amount)}</span>
          </h4>
          <p>
            frais de port: <span>{formatPrice(shipping_mondial_relay)}</span>
          </p>
          <hr />
          <h5>
            total :{" "}
            <span>{formatPrice(total_amount + shipping_mondial_relay)}</span>
          </h5>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn' aria-label='pay your order'>
            procéder au paiement
          </Link>
        ) : (
          <button
            className='btn'
            aria-label='login to the website to be able to pay'
            onClick={loginWithRedirect}
          >
            se connecter
          </button>
        )}
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
    transition: var(--transition);
  }
  .btn:hover,
  .btn:focus {
    background: var(--secondaryColor);
  }
`;

export default CartTotals;
