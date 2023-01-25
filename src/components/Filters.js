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
              placeholder='rechercher'
              clearFilters='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* Categories Filter */}
          <div className='form-control'>
            <h5>catégories</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${
                      category === cat.toLowerCase() ? "active" : null
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Companies Filter */}
          <div className='form-control'>
            <h5>Gamme</h5>
            <select
              name='company'
              value={company}
              onChange={updateFilters}
              className='company'
            >
              {companies.map((cie, index) => {
                return <option key={index}>{cie}</option>;
              })}
            </select>
          </div>
          {/* Range Price Filter */}
          <div className='form-control'>
            <h5>prix</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
        </form>
        {/* Clear Filters */}
        <button type='button' className='clear-btn' onClick={clearFilters}>
          tout effacer
        </button>
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
