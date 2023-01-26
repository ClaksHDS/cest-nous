import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Context */
import { useCartContext } from "../context/cart_context";
/* Components */
import { PageHero, CartContent } from "../components";

function CartPage() {
  const { cart } = useCartContext();

  // if the cart is empty
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Votre panier est vide</h2>
          <Link to='/products' className='btn'>
            ajouter des articles
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title='Panier'></PageHero>
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  );
}

/* Styles */
const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;
export default CartPage;
