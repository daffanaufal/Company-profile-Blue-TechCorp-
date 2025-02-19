import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Database, Lock, BarChart } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Create stunning, responsive websites that drive results.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Build powerful mobile applications for iOS and Android.",
    features: [
      "Native iOS & Android Apps",
      "Cross-platform Solutions",
      "App Maintenance",
      "Mobile UI/UX Design"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Leverage cloud technology for scalable infrastructure.",
    features: [
      "Cloud Migration",
      "AWS & Azure Services",
      "Cloud Architecture",
      "DevOps Solutions"
    ]
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Optimize your data storage and management systems.",
    features: [
      "Database Design",
      "Performance Tuning",
      "Data Migration",
      "Backup Solutions"
    ]
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Protect your digital assets with advanced security measures.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Solutions",
      "Security Training"
    ]
  },
  {
    icon: BarChart,
    title: "IT Consulting",
    description: "Strategic technology consulting for business growth.",
    features: [
      "Digital Strategy",
      "Technology Assessment",
      "Process Optimization",
      "IT Infrastructure"
    ]
  }
];