
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import awsLogo from "../assets/logos/aws-logo.svg";
import barclaysLogo from "../assets/logos/barclays-logo.png";
import allogeneLogo from "../assets/logos/allogene-logo.png";
import qriosityLogo from "../assets/logos/qriosity-logo.png";

const experiences = [
  {
    title: "Gen AI Specialist Solutions Architect",
    company: "Amazon Web Services (AWS)",
    period: "Jun 2024 - Current",
    description: "Driving AI driven developer productivity enablement for Amazon Q Developer and Kiro across 50+ customers and 3000+ developers. Led to direct product adoption growth by 150% across multiple ISV customers and partners. Orchestrated multiple PoC's for Q Business and Q for Quicksight for Gen AI enablement for enterprise AWS Customer productivity use cases. Partnered with product teams for negotiating policy exceptions for Aurora MySQL upgrades for customers. Led 10+ resilience reviews, security assessments and business reviews for enterprise AWS customers providing actionable insights and delivered 5+ tailored enablement sessions.",
    logo: awsLogo
  },
  {
    title: "Founder & Content Creator",
    company: "Qriosity (@qriositybykeerthi)",
    period: "2020 - Current",
    description: "Founded and lead Qriosity, a platform focused on technology education and curiosity-driven learning. Created engaging content around AI, data science, and technology trends. Built a community of tech enthusiasts and professionals. Developed educational resources and tutorials to democratize technical knowledge and inspire others to explore the intersection of technology and innovation.",
    logo: qriosityLogo
  },
  {
    title: "Cloud/Infrastructure Engineer",
    company: "Barclays - Global Technology Infrastructure Services",
    period: "Jan 2023 - June 2024",
    description: "Implemented 7+ end-to-end Observability PoC's for diverse teams. Executed near-real-time decommissioning insights for Database servers, resulting in substantial resource savings for up to 450 SQL and Oracle Database Servers. Championed the adoption of an Observability Mindset across Barclays, fostering a thriving community of over 2500 technology experts.",
    logo: barclaysLogo
  },
  {
    title: "Data Scientist",
    company: "Allogene Therapeutics - Cancer Research",
    period: "May 2022 - Dec 2022",
    description: "Developed a Data Issue tracker dashboard application in R to reduce time in communication issues in data by 70% which replaced existing licensed software thereby saving $80,000 annually. Worked with cross-functional teams to automate object extraction and performed ETL to store it in AWS S3 buckets.",
    logo: allogeneLogo
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-dark opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-cosmic rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-neon rounded-full blur-2xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1, 0.8, 1]
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
          className="text-4xl font-bold text-white mb-16 text-center text-glow"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-8 hover-glow group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="p-3 bg-white/10 backdrop-blur rounded-xl shadow-neon"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {experience.title}
                  </motion.h3>
                  <div className="flex items-center gap-3 text-white/70 mb-4">
                    <span className="font-medium text-primary-light">{experience.company}</span>
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <motion.p 
                    className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {experience.description}
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

export default ExperienceSection;
