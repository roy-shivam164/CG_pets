import  { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Branding */}
        <div className="text-blue-600 text-3xl md:text-5xl font-bold">CG Pets</div>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-blue-600 text-2xl focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`md:flex md:space-x-4 md:static absolute top-16 left-0 w-full md:w-auto bg-white md:bg-transparent ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#home" className="block md:inline text-blue-600 hover:font-bold py-2 px-4">Home</a>
          <a href="#products" className="block md:inline text-blue-600 hover:font-bold py-2 px-4">Products</a>
          <a href="#about" className="block md:inline text-blue-600 hover:font-bold py-2 px-4">About Us</a>
          <a href="#contact" className="block md:inline text-blue-600 hover:font-bold py-2 px-4">Contact</a>
          <button 
            onClick={openModal} 
            className="block md:inline bg-white text-blue-600 hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded mt-4 md:mt-0"
          >
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Header;
