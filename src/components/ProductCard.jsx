import React, { useState, useEffect } from "react";
import "../css/ProductCard.css";

const ProductCard = ({ category }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Filtrer les produits pour obtenir uniquement ceux de la catégorie spécifiée
        const categoryProducts = data.filter((product) => product.category === category);
        setFilteredProducts(categoryProducts);
      })
      .catch((error) => console.error("Error fetching products", error));
  }, [category]); // Effect déclenché lorsque la catégorie change

  function toggleHeartColor() {
    var heartIcon = document.getElementById("heartIcon");
    heartIcon.classList.toggle("redHeart");
  }


  return (
    <div className="product">
       {filteredProducts.map((product) => (
        <a key={product.id} className="product-card">
          <img className="product-card__image" src={product.image} alt={product.title} />
          <p className="product-card__brand">{product.brand}</p>
          <p className="product-card__description">{product.description}</p>
          <p className="product-card__price">{product.price}€</p>
          <button className="accueil-button-panier" >Ajouter au panier</button>
        </a>
      ))}
    </div>
  );
};

export default ProductCard;
