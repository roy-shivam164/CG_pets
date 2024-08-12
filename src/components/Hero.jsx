// import hero from '../assets/hero.jpg';
// import hero2 from '../assets/66216.jpg';
import herobanner from '../assets/pethero.svg';


// src/components/Hero.jsx
const Hero = () => (
  <section id="home" className="h-screen flex flex-col md:flex-row items-center">
    <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-4 md:p-8 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-700">ESSENTIAL PET FOOD FOR EVERY NEED</h1>
      <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-400">High-quality food for dogs, cats, birds, etc. - available whenever you need it.</p>
      <a href="#products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop Now</a>
    </div>
    <div className="w-full md:w-1/2 h-full">
      <img src={herobanner} alt="Pet Products" className="w-full h-full object-cover" />
    </div>
  </section>
);

export default Hero;


