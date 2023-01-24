import React from "react";
import styled from "styled-components";
/* Components */
import { PageHero, Filters, Sort, ProductsList } from "../components";

function ProductsPage() {
  return (
    <main>
      <PageHero title='Produits' />
      <Wrapper className='page'></Wrapper>
      <div className='section-center products'>
        <Filters />
      </div>
      <div>
        <Sort />
        <ProductsList />
      </div>
    </main>
  );
}

/* Styles */
const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default ProductsPage;
