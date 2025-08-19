
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import dataEngineerBadge from "@/assets/aws-data-engineer-associate.png";
import solutionsArchitectProBadge from "@/assets/aws-solutions-architect-professional.png";
import solutionsArchitectAssocBadge from "@/assets/aws-solutions-architect-associate.png";

const certifications = [
  {
    title: "AWS Certified Data Engineer Associate",
    issuer: "Amazon Web Services (AWS)",
    validity: "December 2024 - December 2027",
    link: "https://www.credly.com/earner/earned/badge/a60a7cf1-eab2-4a46-9ca8-610c30f64c96",
    image: dataEngineerBadge
  },
  {
    title: "AWS Certified Solutions Architect Professional",
    issuer: "Amazon Web Services (AWS)",
    validity: "December 2024 - December 2027",
    link: "https://www.credly.com/badges/ead2b9a9-1aab-4b9a-9301-64d07b8548f4/public_url",
    image: solutionsArchitectProBadge
  },
  {
    title: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services (AWS)",
    validity: "August 2022 - December 2027",
    link: "https://www.credly.com/badges/6dc6453b-42d0-42b2-8664-4f61d376cc58/public_url",
    image: solutionsArchitectAssocBadge
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-cyber opacity-15"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
      />
      <motion.div 
        className="absolute top-12 md:top-24 right-6 md:right-12 w-20 md:w-32 h-20 md:h-32 bg-gradient-neon rounded-full blur-3xl"
        animate={{ 
          x: [0, -45, 0],
          y: [0, 35, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-8 md:bottom-16 left-10 md:left-20 w-16 md:w-28 h-16 md:h-28 bg-gradient-cosmic rounded-full blur-2xl"
        animate={{ 
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
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
          className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10 text-center text-glow"
        >
          AWS Certifications
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ 
                opacity: 0, 
                y: 60,
                scale: 0.8,
                rotateY: 15
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                rotateY: 0
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.08,
                y: -12,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="glass-card p-4 md:p-5 hover-glow group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4 rounded-full overflow-hidden shadow-neon bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.h3 
                  className="text-sm md:text-lg font-semibold text-white mb-2 md:mb-3 group-hover:text-gradient transition-all duration-300 leading-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  {cert.title}
                </motion.h3>
                <p className="text-primary-light text-xs md:text-sm mb-1 md:mb-2 font-medium">{cert.issuer}</p>
                <p className="text-white/60 text-xs md:text-sm group-hover:text-white/80 transition-colors duration-300">
                  {cert.validity}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
