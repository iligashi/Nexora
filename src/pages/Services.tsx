import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Logo & Brand Identity',
      description: 'Create a unique and memorable brand identity that resonates with your audience.',
      features: [
        'Custom Logo Design',
        'Brand Guidelines',
        'Business Cards & Stationery',
        'Social Media Assets',
      ],
      price: 'Starting at $',
    },
    {
      title: 'Website Development',
      description: 'Build a modern, responsive website that drives results.',
      features: [
        'Custom Design & Development',
        'Responsive Mobile-First Approach',
        'SEO Optimization',
        'Content Management System',
      ],
      price: 'Starting at $',
    },
    {
      title: 'Mobile App Development',
      description: 'Transform your idea into a powerful mobile application.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'UI/UX Design',
        'App Store Optimization',
      ],
      price: 'Starting at $',
    },
    {
      title: 'Management Systems',
      description: 'Streamline your operations with custom management solutions.',
      features: [
        'Custom CRM Development',
        'Inventory Management',
        'Project Management Tools',
        'Analytics & Reporting',
      ],
      price: 'Starting at $',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-400">
          We offer comprehensive digital solutions to help your business thrive.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-orange-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">
                    {service.price}
                  </span>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 mt-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Services; 