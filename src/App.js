import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Categorie.css';
import './App.css';
import './flip.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Categorie from './pages/Categorie';
import Contact from './pages/Contact';

import CategorieOne from './pages/CategorieOne';
import CategorieTwo from './pages/CategorieTwo';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/categorie-one">
            <CategorieOne />
          </Route>
          <Route path="/categorie-two">
            <CategorieTwo />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/categories">
            <Categorie />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
