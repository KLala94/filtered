import React from 'react';
import Banner from './banner/Banner';
import './App.css';
import Footer from './footer/Footer';
import Main from './main/Main';
import Slider from './slider/slider';
function App() {
  return (
    <div className="App">
      <Banner />
      <Slider />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
