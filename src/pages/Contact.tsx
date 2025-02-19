import { motion } from 'framer-motion'; // Import motion for animations
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react'; // Import icons

export default function Contact() {
  // Function to handle WhatsApp click - Opens WhatsApp chat with specified number
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281510034748', '_blank');
  };

  return (
    <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
      {/* Hero Section - Displays the main title and subtitle */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            // Animation properties for the hero section
            initial={{ opacity: 0, y: 20 }} // Initial state - hidden and moved down
            animate={{ opacity: 1, y: 0 }} // Animated state - visible and in position
            transition={{ duration: 0.8 }} // Animation duration
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information Container */}
          <motion.div
            // Animation properties for contact info
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-2xl mx-auto"
          >
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Get in touch with us through any of these channels. We're here to help!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone Contact */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+6281510034748" className="text-gray-600 hover:text-blue-600">
                    +62 815 1003 4748
                  </a>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@techcorp.com" className="text-gray-600 hover:text-blue-600">
                    info@techcorp.com
                  </a>
                </div>
              </div>

              {/* Address Information */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">123 Tech Street, Digital City</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}