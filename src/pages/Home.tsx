import { motion } from 'framer-motion'; // Import animation components
import { ArrowRight, CheckCircle, Users, Trophy } from 'lucide-react'; // Import icons

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full screen height with background image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        {/* Hero Content with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Innovate. Create. Succeed.</h1>
          <p className="text-xl md:text-2xl mb-8">Building tomorrow's solutions today</p>
          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center mx-auto"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">We deliver excellence in every project</p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Features data array
const features = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "We maintain the highest standards in every project we undertake."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team consists of industry veterans and innovative minds."
  },
  {
    icon: Trophy,
    title: "Proven Success",
    description: "Track record of delivering successful projects across industries."
  }
];

// Statistics data array
const stats = [
  { value: "500+", label: "Clients Worldwide" },
  { value: "150+", label: "Team Members" },
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Projects Completed" }
];