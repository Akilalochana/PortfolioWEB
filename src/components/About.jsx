import { motion } from 'framer-motion';

const About = () => {
  const services = [
    {
      icon: "🎨",
      title: "Web Designer",
      description: "I am a web designer with a passion for creating beautiful and functional web applications."
    },
    {
      icon: "📱",
      title: "Android Studio ",
      description: "I am a React Native developer with a passion for building beautiful and functional mobile applications."
    },
    {
      icon: "🔧",
      title: "Backend Developer",
      description: "I am a backend developer with a passion for building beautiful and functional web applications."
    },
    {
      icon: "💻",
      title: "Frontend Developer",
      description: "I am a frontend developer with a passion for building beautiful and functional web applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            I Know That <span className="text-primary">Good Design</span>
          </h2>
          <h2 className="text-4xl font-bold mb-8">
            Means <span className="text-primary">Good Business</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:scale-105"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-4xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-textSecondary text-center">
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
