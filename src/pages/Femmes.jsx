import React from 'react';
import ProductCard from '../components/ProductCard';
import '../css/Femme.css';

function Femmes(props) {
    return (
        <div>
            <div className='femme-back'>
                <h1>Shoppe La Nouvelle Collection Femme !</h1>
            </div>
            <ProductCard category="women's clothing" />
        </div>
    );
}

export default Femmes;