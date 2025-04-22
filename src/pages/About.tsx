import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import officeImage from '../img/office.jpg';
import TestimonialsSection from '../components/TestimonialsSection';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'Team Members', value: '5+' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and embrace new technologies to deliver cutting-edge solutions.',
      icon: '💡',
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from design to development.',
      icon: '⭐',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision becomes reality.',
      icon: '🤝',
    },
    {
      title: 'Integrity',
      description: "We believe in transparency, honesty, and doing what's right for our clients.",
      icon: '🎯',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-gray-400">
          We are a creative digital agency passionate about helping businesses succeed
          in the digital world.
        </p>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">About Nexora Agency</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a creative digital agency passionate about helping businesses succeed
              in the digital world. From branding to development, we deliver excellence
              in everything we do.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400 mb-6">
                Founded in 2024, Nexora Agency has grown from a small design studio
                to a full-service digital agency. Our journey has been driven by a
                passion for creating exceptional digital experiences and helping
                businesses thrive in an ever-evolving digital landscape.
              </p>
              <p className="text-gray-400 mb-6">
                Today, we work with clients worldwide, from startups to established
                enterprises, delivering innovative solutions that drive real
                business results.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
              >
                Work With Us
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={officeImage}
                  alt="Our Office"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              These core values guide everything we do and help us deliver the best
              possible results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Let's work together to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default About; 