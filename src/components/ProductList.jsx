import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="max-w-screen-lg mx-auto w-full px-4">
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((productItem) => (
            <ProductItem key={productItem.id} productItem={productItem} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-6">
          No products found. Try another search.
        </p>
      )}
    </div>
  );
};

export default ProductList;
