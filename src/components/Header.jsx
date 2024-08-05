// src/components/Header.jsx
const Header = ({ openModal }) => (
    <header className="bg-orange-500 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">CG Pets</div>
        <nav className="space-x-4">
          <a href="#home" className="text-white hover:text-gray-200">Home</a>
          <a href="#products" className="text-white hover:text-gray-200">Products</a>
          <a href="#about" className="text-white hover:text-gray-200">About Us</a>
          <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
          <button onClick={openModal} className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-2 px-4 rounded">Sign Up</button>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  