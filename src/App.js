import React from 'react';
import InscriptionForm from './components/InscriptionForm';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Hommes from './pages/Hommes';
import Femmes from './pages/Femmes';
import Panier from './pages/Panier';


function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<InscriptionForm/>}/>
          <Route path="/accueil" element={<Accueil/>}/>
          <Route path="/card" element={<Card/>}/>
          <Route path="/homme" element={<Hommes/>}/>
          <Route path="/femme" element={<Femmes/>}/>
          <Route path="/panier" element={<Panier/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;