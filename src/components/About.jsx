import { motion } from 'framer-motion';

const About = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Developer",
      description: "I am a web designer with a passion for creating beautiful and functional web applications."
    },
    {
      icon: "📱",
      title: "Android Studio ",
      description: "I am a React Native developer with a passion for building beautiful and functional mobile applications."
    },
    {
      icon: "🎨",
      title: "UI/UX Designer",
      description: "I create beautiful and functional user interfaces and experiences."
    },
    {
      icon: "📊",
      title: "Data Analyst",
      description: "I analyze data to help businesses make better decisions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's a bit about what I do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-4xl bg-gray-50 dark:bg-gray-800 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
