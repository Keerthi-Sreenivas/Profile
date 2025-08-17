import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

const FeaturedInSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-neon opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute top-16 left-12 w-24 h-24 bg-gradient-cosmic rounded-full blur-2xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6, 
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            delay: 0.2
          }}
          className="glass-card p-6 hover-glow group cursor-pointer"
        >
          <div className="flex items-center gap-6">
            <motion.div 
              className="p-3 bg-gradient-cosmic rounded-xl shadow-neon"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              <Youtube className="w-8 h-8 text-white" />
            </motion.div>
            
            <div className="flex-1">
              <motion.h3 
                className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                YouTube Feature
              </motion.h3>
              <p className="text-white/70 mb-4">
                Watch my featured content discussing AI, data science, and technology innovations
              </p>
              
              <motion.a
                href="https://youtu.be/sF6izpB_A0Y?si=cUsXan5QddSK8j4Q"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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