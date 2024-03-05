import React from 'react';
import {  Link } from "react-router-dom";
import '../css/Header.css';


const Header= () =>{
    return (
    <div>
        <div className='header'>
        <a className='hugHUB'>HugHUB</a>
        <li><Link to="/accueil" className="white-link">Accueil</Link></li>
        <li><Link to="/homme" className="white-link">Hommes</Link></li>
        <li><Link to="/femme" className="white-link">Femmes</Link></li>
        <li><Link to="/panier" className='white-link'>Panier</Link></li>
    </div>
  </div>
  );    
}
export default Header;