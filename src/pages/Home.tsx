import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiChevronDown, HiLightningBolt, HiCube, HiSparkles, HiShieldCheck } from 'react-icons/hi';

const Home = () => {
  const services = [
    {
      title: 'Brand Identity',
      description: 'Create a memorable brand that resonates with your audience.',
      icon: <HiSparkles className="w-8 h-8" />,
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      title: 'Web Development',
      description: 'Build modern, responsive websites that drive results.',
      icon: <HiCube className="w-8 h-8" />,
      features: ['Custom Development', 'E-commerce', 'CMS Integration', 'SEO Optimization']
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      icon: <HiLightningBolt className="w-8 h-8" />,
      features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Launch']
    },
    {
      title: 'Digital Solutions',
      description: 'Custom solutions to streamline your operations.',
      icon: <HiShieldCheck className="w-8 h-8" />,
      features: ['CRM Systems', 'Analytics', 'Cloud Solutions', 'API Integration']
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '20+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'Team Members', value: '5+' },
    { label: 'Awards Won', value: '2+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-orange-900/20 z-10" />
        
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-500"
          >
            Crafting Digital Excellence
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            We transform ideas into exceptional digital experiences. From brand creation 
            to full-stack development, we bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 flex items-center group"
            >
              Start Your Project
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/work"
              className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <HiChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-gray-800/50 transition-colors duration-300 border border-gray-800"
              >
                <div className="bg-orange-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-orange-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-32 px-4 bg-gradient-to-r from-orange-500 to-orange-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-12">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
          >
            Start a Project
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 