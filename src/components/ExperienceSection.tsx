
import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import awsLogo from "../assets/logos/aws-logo.svg";
import barclaysLogo from "../assets/logos/barclays-logo.png";
import allogeneLogo from "../assets/logos/allogene-new-logo.png";

const experiences = [
  {
    title: "Gen AI Specialist Solutions Architect",
    company: "Amazon Web Services (AWS)",
    period: "Jun 2024 - Current",
    description: "Achieved 150% product adoption and growth across 50+ customers and 3000+ developers through AI-driven developer productivity initiatives. Delivered enterprise solutions, resilience reviews, and tailored enablement sessions for AWS customers.",
    logo: awsLogo
  },
  {
    title: "Founder/Creator",
    company: "Qriosity",
    period: "2015 - Current",
    description: "Creating educational content for 18.5k learner community @qriositybykeerthi focused on technology education, AI, data science, and emerging tech trends. Built tutorials and content to engage professionals in the tech industry.",
    logo: "https://via.placeholder.com/64x64/FF6B35/FFFFFF?text=Q",
    link: "https://www.instagram.com/qriositybykeerthi/?hl=en"
  },
  {
    title: "Cloud/Infrastructure Engineer",
    company: "Barclays - Global Technology Infrastructure Services",
    period: "Jan 2023 - June 2024",
    description: "Pioneered Observability tooling adoption across 2500+ technology experts. Implemented 7+ end-to-end Observability PoCs and executed near-real-time database decommissioning insights, achieving substantial cost savings across 450+ servers.",
    logo: barclaysLogo
  },
  {
    title: "Data Scientist",
    company: "Allogene Therapeutics - Cancer Research",
    period: "May 2022 - Dec 2022",
    description: "Developed R-based Data Issue tracker dashboard, reducing communication delays by 70% and saving $80,000 annually. Automated object extraction and ETL processes with AWS S3 integration.",
    logo: allogeneLogo
  }
];

const ExperienceSection = () => {
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
        className="absolute top-20 left-10 w-24 h-24 bg-gradient-cosmic rounded-full blur-3xl opacity-10"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-neon rounded-full blur-2xl opacity-10"
        animate={{ 
          x: [0, -15, 0],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 5
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
          Professional Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
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
              className="glass-card p-6 hover-glow group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="p-3 bg-white/90 backdrop-blur rounded-xl border border-white/30 shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                      {experience.title}
                    </h3>
                    {experience.link && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4 text-white/40 hover:text-primary-light transition-colors" />
                      </a>
                    )}
                  </div>
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
