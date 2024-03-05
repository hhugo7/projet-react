import React from 'react';
import ProductCard from '../components/ProductCard';
import '../css/Homme.css';

function Hommes(props) {
    return (
        <div>
            <div className='homme-back'>
                <h1>Shoppe La Nouvelle Collection Homme !</h1>
            </div>
            <ProductCard category="men's clothing" />
        </div>
    );
}

export default Hommes;