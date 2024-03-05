import React from 'react';
import '../css/Footer.css';

function Footer(props) {
    return (
        <div>
            <div className='footer'>
                <div className='footer-links'>
                    <h3>Liens utiles</h3>
                    <ul>
                        <li><a href='/'>Connexion</a></li>
                        <li><a href='/accueil'>Accueil</a></li>
                        <li><a href='/homme'>Homme</a></li>
                        <li><a href='/femme'>Femme</a></li>
                    </ul>
                </div>
                <div className='footer-social'>
                    <h3>Suivez-nous</h3>
                    <ul>
                        <li><a href='https://facebook.com'>Facebook</a></li>
                        <li><a href='https://twitter.com'>Twitter</a></li>
                        <li><a href='https://instagram.com'>Instagram</a></li>
                    </ul>
                </div>
                <div className='footer-info'>
                    <h3>Informations</h3>
                    <p>123 Rue du Commerce, 75000 Paris</p>
                    <p>01 23 45 67 89</p>
                    <p>contact@example.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;