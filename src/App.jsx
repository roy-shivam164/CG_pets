// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Header openModal={openModal} />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
      {isModalOpen && <SignUpModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
