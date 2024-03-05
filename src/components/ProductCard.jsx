import React, { useState, useEffect } from "react";
import "../css/ProductCard.css";

const ProductCard = ({ category }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const categoryProducts = data.filter((product) => product.category === category);
        setFilteredProducts(categoryProducts);
      })
      .catch((error) => console.error("Error fetching products", error));
  }, [category]);

  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  return (
    <div className="product">
       {filteredProducts.map((product) => (
        <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
          <img className="product-card__image" src={product.image} alt={product.title} />
          <p className="product-card__brand">{product.brand}</p>
          <p className="product-card__description">{product.description}</p>
          <p className="product-card__price">{product.price}€</p>
          <button className="accueil-button-panier">Ajouter au panier</button>
        </div>
      ))}
      {selectedProduct && (
        <div className="product-details">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <h2>{selectedProduct.title}</h2>
          <p>{selectedProduct.description}</p>
          <p>Prix: {selectedProduct.price}€</p>
          <button onClick={() => setSelectedProduct(null)}>Fermer</button>
        </div>
      )}  
    </div>
  );
};

export default ProductCard;
