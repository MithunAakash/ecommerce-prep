import React from 'react';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-600 mt-1">₹{price}</p>
      <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
