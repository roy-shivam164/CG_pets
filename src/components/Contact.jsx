// src/components/Contact.jsx
const Contact = () => (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 fade-in">Contact Us</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6 fade-in">Have any questions or concerns? Feel free to reach out to us.</p>
        <form className="max-w-xl mx-auto fade-in">
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-32" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  