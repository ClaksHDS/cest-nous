import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* React icons */
import { BsSearch } from "react-icons/bs";
/* helpers */
import { formatPrice } from "../utils/helpers";

function Product({ id, image, company, name, price }) {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={name} tabIndex='0' />
        <Link
          to={`/products/${id}`}
          aria-label="navigate to the selected product's page"
          className='link'
        >
          <BsSearch />
        </Link>
      </div>
      <footer>
        <h5>
          {name} - {company}
        </h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.article`
  .container {
    position: relative;
    border-radius: var(--borderRadius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--borderRadius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--headlineColor);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--backgroundColor);
    }
  }
  .container:hover img,
  .container:focus img {
    opacity: 0.5;
  }
  .container:hover .link,
  .container:focus .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--headlineColor);
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-size: 0.85rem;
    text-transform: capitalize;
  }
  footer p {
    color: var(--headlineColor);
    font-weight: bold;
  }
`;
export default Product;
