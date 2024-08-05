import hero from '../assets/hero.jpg';
import hero2 from '../assets/66216.jpg';
import herobanner from '../assets/pethero.svg';


// src/components/Hero.jsx
const Hero = () => (
  <section id="home" className="h-screen flex items-center">
    <div className="flex container mx-auto w-full h-full">
      <div className="flex flex-col justify-center items-start w-1/2 p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">BUY FOR PET WHENEVER ITS NEED</h1>
        <p className="text-xl mb-8 text-blue-400">Pet food is animal feed intended for consumption by pets. Typically sold at pet stores and supermarkets.</p>
        <a href="#products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop Now</a>
      </div>
      <div className="w-1/2 h-full">
        <img src={herobanner} alt="Pet Products" className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

export default Hero;
