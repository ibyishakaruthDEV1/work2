const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">ONLINE ELECTRONICS</h3>
              <p className="text-gray-400">Rwamagana District, Eastern Province</p>
              <p className="text-gray-400">Rwanda</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: electronics@gmail.com</p>
              <p className="text-gray-400">Phone: +250 790000000</p>
              <p className="text-gray-400">Working Hours: 8AM - 6PM (Mon-Sat)</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ONLINE ELECTRONICS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;