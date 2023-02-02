import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
/* Context */
import { useProductsContext } from "../context/products_context";
/* Assets */
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
/* Components */
import {
  Loading,
  Error,
  PageHero,
  AddToCart,
  ProductImages,
  ScrollButton,
} from "../components";

function SingleProductPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: singleProduct,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    id: sku,
    name,
    stock,
    description,
    price,
    company,
    images,
  } = singleProduct;

  return (
    <Wrapper>
      <PageHero title={name} singleProduct />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          tous nos produits
        </Link>
        <div className='product-center'>
          <ProductImages images={images} />
          <section className='content' key={sku}>
            <h2>{name}</h2>
            <h2>{company}</h2>
            <h5>{formatPrice(price)}</h5>
            <p className='description'>{description}</p>
            <p className='info'>
              <span>Disponibité : </span>
              {stock > 0 ? "En Stock" : "Indisponible"}
            </p>
            <hr />
            {stock > 0 && <AddToCart singleProduct={singleProduct} />}
          </section>
        </div>
        <ScrollButton />
      </div>
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--headlineColor);
  }
  .btn {
    background: var(--headlineColor);
    color: var(--backgroundColor);
  }
  .btn:hover {
    background: var(--secondaryColor);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
