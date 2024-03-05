import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <ProductCard category="votre_catégorie" addToCart={addToCart} />
      <div className="panier">
        <h2>Panier</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParentComponent;
