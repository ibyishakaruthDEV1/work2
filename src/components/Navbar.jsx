import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false);
  };

  return (
    <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Branding */}
          <Link to="/" className="flex items-center space-x-2">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">ONLINE ELECTRONICS SERVICES</h1>
              <p className="text-xs md:text-sm opacity-80">Rwamagana, Eastern Province, Rwanda</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            <button
              onClick={() => setShowForm(!showForm)}
              className={`px-4 py-2 rounded-md transition ${showForm ? 'bg-white text-blue-700' : 'bg-blue-600 hover:bg-blue-800'}`}
            >
              {showForm ? 'Close' : 'Sign Up'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden mt-3 pb-3 space-y-2">
            <MobileNavLink to="/" onClick={() => setShowMobileMenu(false)}>Home</MobileNavLink>
            <MobileNavLink to="/products" onClick={() => setShowMobileMenu(false)}>Products</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setShowMobileMenu(false)}>About Us</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setShowMobileMenu(false)}>Contact</MobileNavLink>
            <button
              onClick={() => {
                setShowForm(!showForm);
                setShowMobileMenu(false);
              }}
              className="w-full text-left px-4 py-2 bg-blue-600 rounded-md"
            >
              {showForm ? 'Close Form' : 'Sign Up'}
            </button>
          </div>
        )}

        {/* Form (Desktop & Mobile) */}
        {showForm && (
          <div className="mt-4 p-4 bg-white text-gray-800 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-3 border-b pb-2">Create Account</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormInput
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Register
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

// Reusable components
const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="hover:underline hover:text-blue-200 transition"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-4 py-2 hover:bg-blue-600 rounded-md"
  >
    {children}
  </Link>
);

const FormInput = ({ type = 'text', ...props }) => (
  <input
    type={type}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
);

export default Navbar;