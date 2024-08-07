// import dogimg from '../assets/2151182847.jpg';
// import catfood from '../assets/catfood.jpg';
// import birdfood from '../assets/birdfood.jpg';


const products = [
    {
      name: 'Dog Food',
      description: 'High-quality food for your beloved dogs.',
      image: 'images/dog_food.jpg'
    },
    {
      name: 'Cat Food',
      description: 'Nutritional food for your lovely cats.',
      image: 'images/cat_food.jpg',
    },
    {
      name: 'Bird Food',
      description: 'Premium food for your feathered friends.',
      image: 'images/bird_food.jpg',
    },
  ];
  
  const Products = () => (
    <section id="products" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 fade-in">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <a href="#" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Buy Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Products;
  