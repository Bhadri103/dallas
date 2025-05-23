import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Applications from './components/Applications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-16 md:py-24">
          <About />
        </section>
        <section id="products" className="py-16 md:py-24 bg-gray-50">
          <Products />
        </section>
        <section id="gallery" className="py-16 md:py-24">
          <Gallery />
        </section>
        <section id="applications" className="py-16 md:py-24 bg-gray-50">
          <Applications />
        </section>
        <section id="contact" className="py-16 md:py-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;