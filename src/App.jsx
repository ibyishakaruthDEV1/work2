import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      
        {/* Navigation */}
        <Navbar />
        
        {/* Image and Video Section */}
        <div className="clearfix p-4">
          {/* Left Circular Image */}
          <div className="group rounded-full w-28 h-28 overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 float-left mr-4">
            <img 
              src="/dev4.jpg" 
              alt="Profile"
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
          </div>

            

          









        {/* Main Content */}
        <main className="flex-grow px-4">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;