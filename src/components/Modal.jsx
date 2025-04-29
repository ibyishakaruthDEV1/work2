import { FiShoppingCart, FiHeart, FiX } from 'react-icons/fi';

const Modal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <button 
              className="text-gray-500 hover:text-gray-700 p-1"
              onClick={onClose}
            >
              <FiX size={24} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-80 object-contain"
              />
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-1">({product.rating} rating)</span>
              </div>
              
              <p className="text-blue-600 font-bold text-2xl mb-4">RWF {product.price.toFixed(2)}</p>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700">Category</h4>
                  <p>{product.category}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Availability</h4>
                  <p className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
                  <FiHeart /> Save
                </button>
                <button 
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  disabled={product.stock <= 0}
                >
                  <FiShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;