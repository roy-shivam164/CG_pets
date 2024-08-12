// src/components/About.jsx
const About = () => (
  <section id="about" className="py-12 bg-gray-100">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      {/* Image Container */}
      <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 md:pl-10 md:ml-10">
        <img
          src="images/team.jpg"
          alt="Our Team"
          className="w-full h-auto max-w-sm object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-2/3 text-center md:text-left  md:pl-10 md:ml-8">
        <h2 className="text-4xl font-bold mb-6 fade-in">About Us</h2>
        <p className="text-gray-700 max-w-xl fade-in">
          CG Pets is a trusted provider of high-quality pet products, dedicated to making your pets happy and healthy. We are based in San Francisco, California, and ship our products directly to your door.
        </p>
        <p className="text-gray-700 max-w-xl fade-in">
          At CG Pets, we are passionate about pets and are committed to providing exceptional customer service. Our knowledgeable team is always here to help you find the perfect products for your furry friends. Whether you are a new pet owner or a seasoned pro, we are here to support you every step of the way.
        </p>
      </div>
    </div>
  </section>
);

export default About;
