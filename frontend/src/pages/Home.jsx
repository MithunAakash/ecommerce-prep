import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    {
      name: 'Nike Air Max',
      price: 6999,
      image: 'https://via.placeholder.com/300x200.png?text=Nike+Air+Max',
    },
    {
      name: 'Adidas Ultraboost',
      price: 7999,
      image: 'https://via.placeholder.com/300x200.png?text=Adidas+Ultraboost',
    },
    {
      name: 'Puma RS-X',
      price: 5999,
      image: 'https://via.placeholder.com/300x200.png?text=Puma+RS-X',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
