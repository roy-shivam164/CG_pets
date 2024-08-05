
import hero from '../assets/hero.jpg';
// src/components/Hero.jsx
const Hero = () => (
    <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${hero})`,backgroundSize:'cover'}}>
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="text-center text-white fade-in">
          <h1 className="text-5xl font-bold mb-4 text-orange-700">BUY FOR PET WHENEVER ITS NEED</h1>
          <p className="text-xl mb-8 text-orange-800">Pet food is animal feed intended for consumption by pets. Typically sold at pet stores and supermarkets.</p>
          <a href="#products" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Shop Now</a>
        </div>
      </div>
    </section>
  );
  
  export default Hero;
  