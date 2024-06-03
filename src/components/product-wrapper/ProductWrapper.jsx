import React from "react";
import ProductItem from "./ProductItem";
import "./ProductWrapper.scss";

const ProductWrapper = ({ data }) => {
  return (
    <>
      <section className="products">
        <div className="container products__container">
          {data?.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductWrapper;
