// src/components/Header.jsx
const Header = ({ openModal }) => (
    <header className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-600 text-5xl font-bold">CG Pets</div>
        <nav className="space-x-4">
          <a href="#home" className="text-blue-600 hover:font-bold">Home</a>
          <a href="#products" className="text-blue-600 hover:font-bold">Products</a>
          <a href="#about" className="text-blue-600 hover:font-bold">About Us</a>
          <a href="#contact" className="text-blue-600 hover:font-bold">Contact</a>
          <button onClick={openModal} className="bg-white text-blue-600 hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded">Sign Up</button>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  