import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
/* Components */
import { PageHero, StripeCheckout } from "../components";
/* Context */
import { useCartContext } from "../context/cart_context";

function CheckoutPage() {
  const { cart } = useCartContext();
  return (
    <main role='main'>
      <PageHero title='Paiement' />

      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Votre panier est vide</h2>
            <Link to='/products' className='btn'>
              ajouter des articles
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
}

/* styles */
const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
  h2 {
    text-transform: none;
  }
  .btn {
    background: var(--headlineColor);
    color: var(--backgroundColor);
    margin-top: 2rem;
  }
  .btn:hover,
  .btn:focus {
    background: var(--secondaryColor);
  }
`;
export default CheckoutPage;
