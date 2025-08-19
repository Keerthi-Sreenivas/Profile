import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import marketingThumb from "@/assets/project-marketing-insights.jpg";

const projects = [
  {
    title: "Colorizer - Deep Learning",
    description: "A Deep learning based application that converts a Black and White (Grayscale) Image/Video into a Colour video without human guidance.",
    image: "/lovable-uploads/cd248191-95e9-4d4a-82c3-072680e45a90.png",
    link: "https://docs.google.com/presentation/d/193X-n0sXoFbMR9dD7rxJxwM8n_GpOwNQ/edit?usp=sharing&ouid=116008293600462184270&rtpof=true&sd=true",
    tags: ["Deep Learning", "Computer Vision", "Python"]
  },
  {
    title: "Elon Musk Dogecoin Tweet Analysis - NLP",
    description: "Analyzed the sentiments around Elon's tweets about Dogecoin and impact of his tweets on the price of Doge coin.",
    image: "/lovable-uploads/82dbf840-a63a-4145-80ed-f74716f9352b.png",
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
    <section className="py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-dark opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      <motion.div 
        className="absolute top-8 md:top-16 left-10 md:left-20 w-20 md:w-28 h-20 md:h-28 bg-gradient-cosmic rounded-full blur-3xl opacity-8"
        animate={{ 
          x: [0, 15, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 14, 
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
          className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10 text-center text-glow"
        >
          Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 20
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="glass-card overflow-hidden hover-glow group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-cosmic/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 md:p-4">
                <h3 
                  className="text-sm md:text-base font-semibold text-foreground mb-2 font-display group-hover:text-primary transition-colors duration-300"
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-3 text-xs md:text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag, tagIndex) => (
                     <span
                       key={tagIndex}
                       className="px-2 md:px-3 py-0.5 md:py-1 bg-gradient-neon/20 text-accent-light rounded-full text-xs border border-accent/30 hover:border-accent/60 transition-all backdrop-blur-sm whitespace-nowrap"
                     >
                       {tag}
                     </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary-light hover:text-primary text-xs md:text-sm font-medium group/link transition-colors duration-200"
                >
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;