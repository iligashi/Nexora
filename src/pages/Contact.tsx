import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Logo Design',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  });

  const services = [
    'Logo Design',
    'Website Development',
    'Mobile App Development',
    'Management Systems',
    'Other',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.send(
        'service_h3ral8d',
        'template_0dzx88f',
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        'XjDQ16Moq4IOUH77j'
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' },
      });
      setFormData({
        name: '',
        email: '',
        service: 'Logo Design',
        message: '',
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' },
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear from you. Fill out the form
            below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <HiLocationMarker className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Pristina, Kosovo</p>
                  <p className="text-gray-400">Kosovo</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <HiMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">nexora@nexoraagency.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <HiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-400">+38349732127</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
              {status.info.msg && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg ${
                    status.info.error ? 'bg-red-500/20' : 'bg-green-500/20'
                  }`}
                >
                  {status.info.msg}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 