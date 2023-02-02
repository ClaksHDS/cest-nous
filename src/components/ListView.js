import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* Helpers */
import { formatPrice } from "../utils/helpers";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, company, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>
                {name} - {company}
              </h4>
              <h5>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link
                to={`/products/${id}`}
                className='btn'
                aria-label='read more about the product'
              >
                en lire plus
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--borderRadius);
    margin-bottom: 1rem;
    object-fit: contain;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--headlineColor);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
    transition: var(--transition);
    background: var(--headlineColor);
    color: var(--backgroundColor);
  }
  .btn:hover {
    background: var(--secondaryColor);
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
