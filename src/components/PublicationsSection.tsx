import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Amazon Q Developer CLI supports image inputs in your terminal",
    publication: "AWS DevOps Blog",
    date: "2024",
    description: "Exploring how Amazon Q Developer CLI now supports image inputs directly in your terminal for enhanced developer productivity.",
    url: "https://aws.amazon.com/blogs/devops/amazon-q-developer-cli-supports-image-inputs-in-your-terminal/",
    category: "Developer Tools"
  },
  {
    title: "Build a financial research assistant using Amazon Q Business and Amazon QuickSight for generative AI-powered insights",
    publication: "AWS Machine Learning Blog",
    date: "2024",
    description: "Comprehensive guide on building financial research assistants leveraging Amazon Q Business and QuickSight for AI-powered analytical insights.",
    url: "https://aws.amazon.com/blogs/machine-learning/build-a-financial-research-assistant-using-amazon-q-business-and-amazon-quicksight-for-generative-ai-powered-insights/",
    category: "Machine Learning"
  }
];

const PublicationsSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-cosmic opacity-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      <motion.div 
        className="absolute top-16 right-12 w-18 h-18 bg-gradient-neon rounded-full blur-2xl opacity-8"
        animate={{ 
          x: [0, -15, 0],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 18, 
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
          Publications
        </motion.h2>
        
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <motion.a
              key={index}
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-6 hover-glow group cursor-pointer block"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-2 bg-gradient-cosmic rounded-lg flex-shrink-0"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FileText className="w-5 h-5 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-2 leading-tight">
                        {publication.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-accent-light font-medium text-sm">{publication.publication}</span>
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        <span className="text-white/60 text-sm">{publication.date}</span>
                        <span className="px-2 py-1 bg-gradient-neon/20 text-accent-light rounded-full text-xs border border-accent/30">
                          {publication.category}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-primary-light transition-colors flex-shrink-0 ml-3" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {publication.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;