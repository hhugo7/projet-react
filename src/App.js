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
import { Helmet } from 'react-helmet';

function App(props) {
  return (
    <div>
      <Helmet>
        <title>HugHUB</title>
        <link rel="icon" href="favicon.ico" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InscriptionForm/>}/>
          <Route path="/accueil" element={<AppLayout><Accueil/></AppLayout>}/>
          <Route path="/card" element={<AppLayout><Card/></AppLayout>}/>
          <Route path="/homme" element={<AppLayout><Hommes/></AppLayout>}/>
          <Route path="/femme" element={<AppLayout><Femmes/></AppLayout>}/>
          <Route path="/panier" element={<AppLayout><Panier/></AppLayout>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppLayout({children}) {
  if (window.location.pathname === "/") {
    return (
      <div>
        {children}
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}




export default App;