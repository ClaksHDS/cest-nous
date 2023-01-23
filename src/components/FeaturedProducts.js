import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
/* Context */
import { useProductsContext } from "../context/products_context";
/* Components */
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";

function FeaturedProducts() {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>notre sélection du moment</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.section`
  background: var(--headlineColor);
  h2 {
    color: var(--backgroundColor);
    text-transform: capitalize;
  }
  .underline {
    color: var(--backgroundColor);
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
