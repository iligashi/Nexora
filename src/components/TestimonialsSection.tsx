import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO',
    company: 'TechKosova',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&auto=format',
    content: 'Working with this team has been an absolute pleasure. Their expertise and dedication to delivering high-quality results have exceeded our expectations.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Kosova Digital',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format',
    content: 'The level of professionalism and attention to detail is outstanding. They truly understand our business needs and deliver solutions that drive results.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Innovate Prishtina',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
    content: 'Their innovative approach and technical expertise have helped us transform our digital presence. Highly recommended!'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonial.id * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-gray-700 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-300 italic pl-8">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 