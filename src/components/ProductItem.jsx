import React from "react";

const ProductItem = ({ productItem }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img
        src={productItem.thumbnail}
        alt={productItem.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2 text-gray-800">
        {productItem.title}
      </h2>
      <p className="text-gray-600 text-sm mt-1">${productItem.price}</p>
    </div>
  );
};

export default ProductItem;
