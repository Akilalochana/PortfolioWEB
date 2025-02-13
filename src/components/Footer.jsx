import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-primary">
              akila<span className="text-accent">lochana</span>
            </a>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              aria-label="Github"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              aria-label="Linkedin"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter size={20} />
            </a>
          </div>

          <div className="text-center md:text-right text-gray-600 dark:text-gray-300">
            <p>2024 AKILA. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
