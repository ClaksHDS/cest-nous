import React from "react";
import styled from "styled-components";
/* Context */
import { useFilterContext } from "../context/filter_context";
import { formatPrice, getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const {
    filters: { text, category, company, min_price, max_price, price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search Input */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              className='search-input'
              placeholder='rechercher un produit'
              clearFilters='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* Search Input */}
          {/* Search Input */}
          {/* Search Input */}
        </form>
      </div>
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--backgroundColor);
    border-radius: var(--borderRadius);
    border-color: transparent;
  }
  .search-input::placeholder {
    text-transform: capitalize;
    color: var(--textColor);
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    color: var(--textColor);
    cursor: pointer;
  }
  .active {
    border-color: var(--headlineColor);
  }
  .company {
    background: var(--backgroundColor);
    border-radius: var(--borderRadius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--headlineColor);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }

  .clear-btn {
    background: var(--headlineColor);
    color: var(--backgroundColor);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
export default Filters;
