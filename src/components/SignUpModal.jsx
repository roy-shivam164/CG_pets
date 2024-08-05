// src/components/SignUpModal.jsx
const SignUpModal = ({ closeModal }) => (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Join Our Community</h2>
        <p className="text-gray-700 mb-6 text-center">Sign up for our newsletter and get the latest updates on our products and special offers.</p>
        <form>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          </div>
          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full">Sign Up</button>
        </form>
        <button onClick={closeModal} className="mt-4 text-gray-700 hover:text-gray-900">Close</button>
      </div>
    </div>
  );
  
  export default SignUpModal;
  