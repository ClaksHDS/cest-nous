import React from "react";
/* Context */
import { useFilterContext } from "../context/filter_context";
/* Components */
import GridView from "./GridView";
import ListView from "./ListView";

const ProductsList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Désolé, aucun produit ne correspond à votre recherche
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products}>ProductsList</GridView>;
};

export default ProductsList;
