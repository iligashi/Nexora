import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorkImage from '../img/AI workout.png';
import Ecommerce from '../img/E commerce.png';
import Fitnes from '../img/Fitnes.png';
import RestaurantMenu from '../img/RestaurantMenu.png';
import FashionBrand from '../img/FashionBrand.png';
import RealEstate from '../img/RealEstate.png';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'branding', name: 'Branding' },
    { id: 'web', name: 'Web Design' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'systems', name: 'Systems' },
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Workout - Tech Startup Rebrand',
      category: 'branding',
      image: WorkImage,  
      description: 'Complete brand identity redesign for an AI-powered fitness tech startup, featuring a modern and dynamic logo that combines a brain and dumbbell to represent the fusion of artificial intelligence and fitness.',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'web',  
      image: Ecommerce,
      description: 'Modern e-commerce solution with seamless user experience.',
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: Fitnes,
      description: 'Cross-platform mobile app for fitness enthusiasts.',
    },
    {
      id: 4,
      title: 'Restaurant Management',
      category: 'systems',
      image: RestaurantMenu,
      description: 'Comprehensive management system for restaurant chains.',
    },
    {
      id: 5,
      title: 'Fashion Brand Identity',
      category: 'branding',
      image: FashionBrand,
      description: 'Luxury fashion brand identity and packaging design.',
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'web',
      image: RealEstate,
      description: 'Property listing and management platform.',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto px-4 py-16"
      >
        <h1 className="text-5xl font-bold mb-6">Our Work</h1>
        <p className="text-xl text-gray-400">
          Explore our latest projects and see how we help businesses succeed.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              filter === category.id
                ? 'bg-orange-500 text-white'
                : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-lg bg-gray-900"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
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
            Let's create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Work; 