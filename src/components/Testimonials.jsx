import { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      content: "Originally I was looking for a job as a frontend developer but I found Orion. Orion is a great place to work. The people are friendly, helpful and very knowledgeable. I recommend Orion to anyone looking for a job.",
      author: "Jane Doe",
      position: "UI/UX Designer at Amazon Inc.",
      image: "/testimonial1.jpg"
    },
    {
      content: "Working with Micael was an excellent experience. His attention to detail and creative solutions helped bring our vision to life.",
      author: "John Smith",
      position: "CTO at TechCorp",
      image: "/testimonial2.jpg"
    },
    {
      content: "The portfolio website Micael created for us exceeded our expectations. Professional, responsive, and beautifully designed.",
      author: "Sarah Johnson",
      position: "Marketing Director at StartUp Inc.",
      image: "/testimonial3.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl text-textSecondary mb-8">
                {testimonials[currentSlide].content}
              </p>
              
              <div className="flex items-center justify-center mb-8">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentSlide].author}
                  </h4>
                  <p className="text-textSecondary">
                    {testimonials[currentSlide].position}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  →
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Brand Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-8 items-center"
          >
            <img src="/amazon.png" alt="Amazon" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/new-balance.png" alt="New Balance" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/skype.png" alt="Skype" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/spotify.png" alt="Spotify" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/adidas.png" alt="Adidas" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src="/asus.png" alt="Asus" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
