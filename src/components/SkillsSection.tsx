
import { motion } from "framer-motion";
import { Code2, Database, PenTool, Users } from "lucide-react";

const skills = [
  {
    category: "AWS Services",
    icon: <Code2 className="w-6 h-6" />,
    items: "AWS OpenSearch, AWS Bedrock, AWS Q Business, AWS CloudFormation, AWS S3, AWS CloudWatch, AWS X-Ray"
  },
  {
    category: "Programming",
    icon: <Database className="w-6 h-6" />,
    items: "Python, R, SQL, JavaScript, Ruby, HTML/CSS, KQL, SPL"
  },
  {
    category: "Data & Analytics",
    icon: <PenTool className="w-6 h-6" />,
    items: "Elasticsearch, Kibana, Logstash, Kafka, Splunk, APM, R Shiny"
  },
  {
    category: "Professional",
    icon: <Users className="w-6 h-6" />,
    items: "Mentorship, Team Player, DEI Advocate, Technical Leadership"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-dark opacity-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      />
      <motion.div 
        className="absolute top-20 left-16 w-44 h-44 bg-gradient-cosmic rounded-full blur-3xl"
        animate={{ 
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 11, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-24 right-20 w-32 h-32 bg-gradient-neon rounded-full blur-2xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
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
          className="text-3xl font-bold text-white mb-10 text-center text-glow"
        >
          Skills & Expertise
        </motion.h2>
        <div className="space-y-6">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                scale: 1
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.15,
                type: "spring",
                stiffness: 70
              }}
              whileHover={{ 
                scale: 1.02,
                x: 10,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-8 hover-glow group cursor-pointer border-b-0"
            >
              <div className="flex items-center gap-6">
                <motion.div 
                  className="p-4 bg-gradient-cosmic rounded-xl shadow-neon"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-white w-6 h-6">
                    {category.icon}
                  </div>
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {category.category}
                  </motion.h3>
                  <motion.p 
                    className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                  >
                    {category.items}
                  </motion.p>
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
