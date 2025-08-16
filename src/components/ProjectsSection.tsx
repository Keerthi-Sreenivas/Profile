import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import colorizerThumb from "@/assets/project-colorizer.jpg";
import dogeThumb from "@/assets/project-doge-analysis.jpg";
import marketingThumb from "@/assets/project-marketing-insights.jpg";

const projects = [
  {
    title: "Colorizer - Deep Learning",
    description: "A Deep learning based application that converts a Black and White (Grayscale) Image/Video into a Colour video without human guidance.",
    image: colorizerThumb,
    link: "https://docs.google.com/presentation/d/193X-n0sXoFbMR9dD7rxJxwM8n_GpOwNQ/edit?usp=sharing&ouid=116008293600462184270&rtpof=true&sd=true",
    tags: ["Deep Learning", "Computer Vision", "Python"]
  },
  {
    title: "Elon Musk Dogecoin Tweet Analysis - NLP",
    description: "Analyzed the sentiments around Elon's tweets about Dogecoin and impact of his tweets on the price of Doge coin.",
    image: dogeThumb,
    link: "https://github.com/Keerthi-Sreenivas/Elon_Musk-Doge-Tweet_Analysis/blob/main/Facts_derived_from_the_study.pdf",
    tags: ["NLP", "Sentiment Analysis", "Data Science"]
  },
  {
    title: "Marketing Insights - Statistics",
    description: "Digging through data and finding significant insights to advertise better products to customers of different backgrounds.",
    image: marketingThumb,
    link: "https://github.com/Keerthi-Sreenivas/statistics/blob/main/Project.pdf",
    tags: ["Statistics", "Marketing Analytics", "Data Visualization"]
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-dark opacity-25"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute top-16 left-20 w-36 h-36 bg-gradient-cosmic rounded-full blur-3xl"
        animate={{ 
          x: [0, 40, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          className="text-4xl font-bold text-white mb-16 text-center font-display text-glow"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 80,
                rotateX: 20,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.15,
                type: "spring",
                stiffness: 60
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-card overflow-hidden hover-glow group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-cosmic/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-semibold text-white mb-3 font-display group-hover:text-gradient transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gradient-neon/20 text-accent-light rounded-full text-xs border border-accent/30 hover:border-accent/60 transition-all backdrop-blur-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-primary-light hover:text-white text-sm font-medium group/link"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:rotate-45 transition-transform duration-300" />
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;