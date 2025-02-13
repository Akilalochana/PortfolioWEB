import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  // Sample blog posts (replace with your actual Medium posts)
  const samplePosts = [
    {
      id: 1,
      title: "If a stone is thrown with a speed of 8 kms^-1, will it continuously revolve around the earth?😯 (Gravitational force)",
      excerpt: " ",
      date: "2024-02-13",
      readTime: "5 min read",
      image: " ",
      category: "physics"
    },
    {
      id: 2,
      title: "The Dual Impact of Machine Learning: Empowering Developers and Challenging Societal Norms.",
      excerpt: " ",
      date: "2024-02-10",
      readTime: "7 min read",
      image: "https://source.unsplash.com/random/800x600/?technology",
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "Machine learning simply",
      excerpt: " ",
      date: "2024-02-08",
      readTime: "6 min read",
      image: "https://source.unsplash.com/random/800x600/?design",
      category: "Machine Learning"
    }
  ];

  useEffect(() => {
    // Simulate loading posts
    setTimeout(() => {
      setPosts(samplePosts);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="text-primary">Blog Posts</span>
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Sharing my thoughts and experiences in web development, design, and technology.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-textSecondary mb-3">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    <a href="#" onClick={() => setSelectedPost(post)}>
                      {post.title}
                    </a>
                  </h3>
                  
                  <p className="text-textSecondary mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <a
                    href="#"
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium group/link"
                  >
                    Read More
                    <FiArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Blog Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-textSecondary mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{formatDate(selectedPost.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-6">{selectedPost.title}</h2>
                <p className="text-textSecondary mb-6">{selectedPost.excerpt}</p>
                <p className="text-textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
