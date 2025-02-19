import { Link } from 'react-router-dom'; // Import Link for navigation
import { Building2, Mail, MapPin, Phone } from 'lucide-react'; // Import icons

export default function Footer() {
  return (
    // Footer container with dark background
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid layout for footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-xl">TechCorp</span>
            </Link>
            <p className="text-gray-400">
              Building tomorrow's solutions with today's innovation.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {/* Address */}
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">123 Tech Street, Digital City</span>
              </li>
              {/* Phone */}
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <a href="tel:+6281510034748" className="text-gray-400 hover:text-white transition-colors">
                  +62 815 1003 4748
                </a>
              </li>
              {/* Email */}
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <a href="mailto:info@techcorp.com" className="text-gray-400 hover:text-white transition-colors">
                  info@techcorp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-400">© 2024 BlueTechCorp. All rights reserved.</p>
            {/* Legal Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}