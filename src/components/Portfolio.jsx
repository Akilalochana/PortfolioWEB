import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'];
  
  const projects = [
    {
      title: 'Modern UI/UX Website',
      description: 'A modern UI/UX website for online ticket booking.',
      image: '/project1.png',
      category: 'UI/UX',
    },
    {
      title: 'Advanced Security Laser Alarm System 🔒',
      description: 'Advanced Security Laser Alarm System 🔒',
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
      title: 'you tube clone',
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

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            My Creative <span className="text-primary">Portfolio</span> Section
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-textSecondary hover:bg-gray-200'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="btn btn-primary">View Project</button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-textSecondary">{project.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
