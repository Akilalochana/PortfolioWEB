import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For example, sending the data to your backend API
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Take A Coffee & Chat With Me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-4 bg-red-50 rounded-lg px-6 py-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <img src="/email-icon.png" alt="Email" className="w-5 h-5" />
              </div>
              <a href="mailto:hello@micael.com" className="text-textPrimary hover:text-primary">
                sandakelumsampathbandara@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 bg-blue-50 rounded-lg px-6 py-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <img src="/phone-icon.png" alt="Phone" className="w-5 h-5" />
              </div>
              <a href="tel:+1234567890" className="text-textPrimary hover:text-primary">
                +778823415
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn btn-primary"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
