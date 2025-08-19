import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import awsQDeveloperThumb from "../assets/publications/aws-q-developer-thumbnail.png";
import awsFinancialAssistantThumb from "../assets/publications/aws-financial-assistant-thumbnail.png";

const publications = [
  {
    title: "Amazon Q Developer CLI supports image inputs in your terminal",
    publication: "AWS DevOps Blog",
    date: "2025",
    description: "Exploring how Amazon Q Developer CLI now supports image inputs directly in your terminal for enhanced developer productivity.",
    url: "https://aws.amazon.com/blogs/devops/amazon-q-developer-cli-supports-image-inputs-in-your-terminal/",
    category: "Developer Tools",
    thumbnail: awsQDeveloperThumb
  },
  {
    title: "Build a financial research assistant using Amazon Q Business and Amazon QuickSight for generative AI-powered insights",
    publication: "AWS Machine Learning Blog",
    date: "2025",
    description: "Comprehensive guide on building financial research assistants leveraging Amazon Q Business and QuickSight for AI-powered analytical insights.",
    url: "https://aws.amazon.com/blogs/machine-learning/build-a-financial-research-assistant-using-amazon-q-business-and-amazon-quicksight-for-generative-ai-powered-insights/",
    category: "Machine Learning",
    thumbnail: awsFinancialAssistantThumb
  }
];

const PublicationsSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-cosmic opacity-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      <motion.div 
        className="absolute top-8 md:top-16 right-6 md:right-12 w-12 md:w-18 h-12 md:h-18 bg-gradient-neon rounded-full blur-2xl opacity-8"
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
          className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center text-glow"
        >
          Publications
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
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
              className="glass-card overflow-hidden hover-glow group cursor-pointer block"
            >
              <div className="relative">
                <img
                  src={publication.thumbnail}
                  alt={publication.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-cosmic/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                  <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur text-white text-xs rounded-full border border-white/20">
                    {publication.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-3 h-3 md:w-4 md:h-4 text-accent-light flex-shrink-0" />
                  <span className="text-accent-light font-medium text-xs">{publication.publication}</span>
                  <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-white/60 text-xs flex-shrink-0">{publication.date}</span>
                </div>
                
                <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-2 leading-tight line-clamp-2">
                  {publication.title}
                </h3>
                
                <p className="text-white/70 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300 line-clamp-3">
                  {publication.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;