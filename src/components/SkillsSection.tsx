import { motion } from "framer-motion";
import { Code2, Database, PenTool, Users } from "lucide-react";

const skills = [
  {
    category: "Technology",
    icon: <Code2 className="w-4 h-4" />,
    items: "Amazon Bedrock, Amazon Q Developer, Kiro, Q CLI, Amazon Opensearch, ElasticSearch, Splunk, Kafka, Logstash, APM, Kibana, AWS Cloudwatch"
  },
  {
    category: "Programming",
    icon: <Database className="w-4 h-4" />,
    items: "Python, R, SQL, JavaScript, Ruby, HTML/CSS, KQL, SPL"
  },
  {
    category: "Professional",
    icon: <Users className="w-4 h-4" />,
    items: "Mentorship, Team Player, DEI Advocate, Technical Leadership"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-dark opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      <motion.div 
        className="absolute top-20 left-16 w-20 h-20 bg-gradient-cosmic rounded-full blur-3xl opacity-8"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 16, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-24 right-20 w-16 h-16 bg-gradient-neon rounded-full blur-2xl opacity-8"
        animate={{ 
          x: [0, -18, 0],
          y: [0, 12, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 5
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
          className="text-3xl font-bold text-white mb-10 text-center text-glow"
        >
          Skills & Expertise
        </motion.h2>
        <div className="space-y-4">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-5 hover-glow group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="p-2 bg-gradient-cosmic rounded-lg"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="w-4 h-4 text-white flex items-center justify-center">
                    {category.icon}
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.category}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {category.items}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;