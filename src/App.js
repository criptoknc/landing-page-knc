import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Technologies from './components/Technologies';
import ChooseUs from './components/ChooseUs';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Technologies />
      <ChooseUs />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
