import { useState, useEffect } from 'react'; // Import React hooks
import { Link } from 'react-router-dom'; // Import Link for navigation
import { motion } from 'framer-motion'; // Import animation components
import { Menu, X, Building2 } from 'lucide-react'; // Import icons

export default function Navbar() {
  // State for mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  // State for navbar background change on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect hook to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update isScrolled state based on scroll position
      setIsScrolled(window.scrollY > 20);
    };
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle WhatsApp button click
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281510034748', '_blank');
  };

  return (
    // Navbar container with dynamic background based on scroll position
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and company name */}
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">Blue TechCorp</span>
          </Link>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button
              onClick={handleWhatsAppClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            <button
              onClick={handleWhatsAppClick}
              className="w-full text-left px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

// Desktop navigation link component
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

// Mobile navigation link component
const MobileNavLink = ({ to, children, onClick }: { 
  to: string; 
  children: React.ReactNode; 
  onClick: () => void 
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
  >
    {children}
  </Link>
);