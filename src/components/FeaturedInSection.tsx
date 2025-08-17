import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

const FeaturedInSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-neon opacity-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      <motion.div 
        className="absolute top-16 left-12 w-16 h-16 bg-gradient-cosmic rounded-full blur-2xl opacity-10"
        animate={{ 
          x: [0, 10, 0],
          y: [0, -8, 0]
        }}
        transition={{ 
          duration: 16, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 100
          }}
          className="text-3xl font-bold text-white mb-8 text-center text-glow"
        >
          Featured In
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4,
            delay: 0.1
          }}
          className="glass-card p-6 hover-glow group cursor-pointer"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <motion.div 
              className="relative overflow-hidden rounded-xl shadow-neon w-full md:w-80"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <img 
                src="https://img.youtube.com/vi/sF6izpB_A0Y/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-3 bg-red-600 rounded-full shadow-lg"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
              </div>
            </motion.div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="p-2 bg-gradient-cosmic rounded-lg"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Youtube className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300"
                >
                  YouTube Feature
                </motion.h3>
              </div>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                Watch my featured content discussing AI, data science, and technology innovations. Exploring the intersection of cutting-edge technology and practical business applications.
              </p>
              
              <motion.a
                href="https://youtu.be/sF6izpB_A0Y?si=cUsXan5QddSK8j4Q"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-cosmic text-white font-medium rounded-xl hover:shadow-neon transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Watch Video
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedInSection;