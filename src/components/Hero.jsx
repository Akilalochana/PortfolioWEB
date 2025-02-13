import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import img from '../images/akila.png'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 inline-block mb-4 shadow-md">
              <span className="flex items-center gap-2 text-gray-900 dark:text-white">
                <span className="text-2xl">👋</span>
                Hello,
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
               I'm <span className="text-primary">Akila</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              A passionate developer focused on creating interactive and user-friendly applications
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <span className="bg-white/80 rounded-full px-4 py-2 inline-block w-fit">
                Fullstack WEB DEVELOPER
              </span>
              <span className="bg-white/80 rounded-full px-4 py-2 inline-block w-fit">
                DESIGNER
              </span>
            </div>

            <div className="flex gap-4 mb-8">
              <a href="#" className="btn btn-primary">
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline">
                Let's Talk
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={img}
                alt="Profile"
                className="w-full max-w-lg mx-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-20 right-20 bg-white rounded-full p-4 shadow-lg"
            >
              <img src="/flutter.png" alt="Flutter" className="w-8 h-8" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
              className="absolute bottom-20 left-20 bg-white rounded-full p-4 shadow-lg"
            >
              <img src="/redux.png" alt="Redux" className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
