import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar'; // Import navigation component
import Footer from './components/Footer'; // Import footer component
import Home from './pages/Home'; // Import page components
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Main App component - Sets up routing and main layout structure
function App() {
  return (
    // Router wrapper for handling navigation
    <Router>
      {/* Main layout container with min-height and flex column */}
      <div className="min-h-screen bg-white flex flex-col">
        {/* Fixed navigation bar at the top */}
        <Navbar />
        
        {/* Main content area that grows to fill available space */}
        <main className="flex-grow">
          {/* Route configuration for different pages */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page route */}
            <Route path="/about" element={<About />} /> {/* About page route */}
            <Route path="/services" element={<Services />} /> {/* Services page route */}
            <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
          </Routes>
        </main>
        
        {/* Footer component at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;