import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Flutter', icon: '/flutter.png' },
    { name: 'Material UI', icon: '/material-ui.png' },
    { name: 'Redux', icon: '/redux.png' },
    { name: 'HTML5', icon: '/html5.png' },
    { name: 'Vue', icon: '/vue.png' },
    { name: 'Python', icon: '/python.png' },
    { name: 'Sass', icon: '/sass.png' },
    { name: 'TypeScript', icon: '/typescript.png' },
    { name: 'Node.js', icon: '/nodejs.png' },
    { name: 'React', icon: '/react.png' },
    { name: 'CSS3', icon: '/css3.png' },
    { name: 'Figma', icon: '/figma.png' },
    { name: 'GraphQL', icon: '/graphql.png' },
    { name: 'JavaScript', icon: '/javascript.png' },
    { name: 'Git', icon: '/git.png' },
  ];

  const experience = [
    {
      year: '2023 - present',
      company: 'IIT | UNIVERSITY OF WESTMINSTER',
      position: ' ',
      description: ' '
    },
    {
      year: '2020',
      company: ' ',
      position: ' ',
      description: ' '
    },
    {
      year: '2020 - 2023',
      company: 'AL at Anuradhapura Central Collage',
      position: ' ',
      description: ' '
    },
    {
      year: '2015 - 2019',
      company: 'OL at Anuradhapura Central Collage',
      position: '',
      description: ''
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's what I'm good at and where I've been
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center p-3 mb-2">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-8 relative pl-8 border-l-2 border-primary"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full" />
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-primary font-medium mb-1">{exp.position}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
