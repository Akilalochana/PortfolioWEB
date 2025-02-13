import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Modern UI/UX Website',
      description: 'A modern UI/UX website for online ticket booking.',
      image: '/project1.png',
      category: 'UI/UX',
    },
    {
      title: 'Advanced Security Laser Alarm System',
      description: 'Advanced Security Laser Alarm System',
      image: '/project2.png',
      category: 'Mobile App',
    },
    {
      title: 'Web Development Group Project',
      description: '1st year at IIT',
      image: '/project3.png',
      category: 'React JS',
    },
    {
      title: '2D Game',
      description: 'using html css js',
      image: '/project4.png',
      category: 'Web App',
    },
    {
      title: 'YouTube Clone',
      description: 'react and youtube API',
      image: '/project5.png',
      category: 'Web App',
    },
    {
      title: 'SDGP',
      description: '2nd year group project',
      image: '/project6.png',
      category: 'Mobile App',
    },
  ];

  const filters = ['All', 'UI/UX', 'Web App', 'Mobile App', 'React JS'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out some of my latest projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-2 bg-primary text-white rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
