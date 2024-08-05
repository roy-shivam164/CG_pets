// src/components/Products.jsx
const products = [
    {
      name: 'Dog Food',
      description: 'High-quality food for your beloved dogs.',
      image: 'https://cdn.pixabay.com/photo/2016/12/10/16/57/dog-1892133_1280.jpg',
    },
    {
      name: 'Cat Food',
      description: 'Nutritional food for your lovely cats.',
      image: 'https://cdn.pixabay.com/photo/2016/02/10/16/37/pet-1194086_1280.jpg',
    },
    {
      name: 'Bird Food',
      description: 'Premium food for your feathered friends.',
      image: 'https://cdn.pixabay.com/photo/2017/12/29/18/39/bird-3048557_1280.jpg',
    },
  ];
  
  const Products = () => (
    <section id="products" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 fade-in">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <a href="#" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Buy Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Products;
  