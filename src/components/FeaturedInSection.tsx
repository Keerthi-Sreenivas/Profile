import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

const featuredVideos = [
  {
    id: "sF6izpB_A0Y",
    title: "Grace Hopper Celebration 2022 - Experience & Insights",
    description: "Sharing key takeaways from attending GHC 2022 with University of Rochester scholarship support.",
    url: "https://youtu.be/sF6izpB_A0Y?si=cUsXan5QddSK8j4Q"
  },
  {
    id: "un3dSTKusQU", 
    title: "Grace Hopper Celebration 2022 - Technical Perspectives",
    description: "Discussing technical sessions, networking opportunities, and career insights from GHC 2022.",
    url: "https://youtu.be/un3dSTKusQU?si=N4oaTDSLwIYDVsrj"
  }
];

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
      
      <div className="container mx-auto max-w-6xl relative z-10">
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
          Featured Content
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1
              }}
              className="glass-card p-5 hover-glow group cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <motion.div 
                  className="relative overflow-hidden rounded-lg w-full"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img 
                    src={video.id === "sF6izpB_A0Y" ? "https://img.youtube.com/vi/sF6izpB_A0Y/maxresdefault.jpg" : "https://img.youtube.com/vi/un3dSTKusQU/maxresdefault.jpg"}
                    alt={video.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-3 bg-red-600 rounded-full shadow-lg"
                    >
                      <Play className="w-5 h-5 text-white ml-1" />
                    </motion.div>
                  </div>
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="p-2 bg-white/90 backdrop-blur rounded-lg border border-white/30 shadow-lg"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Youtube className="w-4 h-4 text-white" />
                    </motion.div>
                    <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300">
                      {video.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/70 mb-3 leading-relaxed text-xs">
                    {video.description}
                  </p>
                  
                  <motion.a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-cosmic text-white font-medium rounded-lg hover:shadow-neon transition-all duration-300 text-xs"
                  >
                    <Play className="w-4 h-4" />
                    Watch Video
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;