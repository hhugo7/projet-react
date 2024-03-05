import React from 'react';
import '../css/Accueil.css';
import ProductCard from "../components/ProductCard.jsx";

function Accueil(props) {
  return (
    <div>
      <div className='accueil'>

        <div className='accueil-back'>
            <h1>La Nouvelle Collection Bijoux est arrivée !</h1>
        </div>

        <div className='accueil-titre'>
          <h1>Nouvelle Collection</h1>
          <hr></hr>
        </div>

        <div className='accueil-product-card'>
        <ProductCard category= "jewelery" />
        </div>

      </div>
    </div>
  );
}

export default Accueil;