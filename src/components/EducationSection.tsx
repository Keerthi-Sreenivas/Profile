import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import rochesterLogo from "../assets/logos/university-of-rochester-logo.svg";
import iiitKottayamLogo from "../assets/logos/iiit-kottayam-logo.png";

const education = [
  {
    degree: "Masters in Data Science (Business Concentration)",
    school: "University of Rochester, New York",
    period: "2021 - 2022",
    gpa: "3.7 out of 4.0",
    description: "Teaching Assistant for Big Data at Simon Business School. Research assistant for Bio-Medical Image data preprocessing for U-Net Deep Learning Algorithm. Grace Hopper 2022 Conference attendee with University Scholarship.",
    coursework: ["Data Science at Scale", "Machine Learning", "Applied Statistical Methods", "Data Mining", "Technical Entrepreneurship", "Time Series Analysis"],
    logo: rochesterLogo
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering (Hons.)",
    school: "Indian Institute of Information Technology (IIIT), Kottayam",
    period: "2017 - 2021",
    gpa: "8.96 out of 10",
    description: "Main Author for research presentation 'IoT based Smart Medicine Reminder Kit' at ACM/CSI/IEEE-CS Research and Industry Symposium. Co-Founded Proxima, an Image processing based Start-up for Smart Badminton and Yoga instruction.",
    coursework: ["Artificial Intelligence", "Data Warehousing and Data Mining", "Big Data Analytics", "Cloud Computing", "Cryptography", "Blockchain Technology"],
    logo: iiitKottayamLogo
  }
];

const EducationSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-cyber opacity-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <motion.div 
        className="absolute top-32 right-16 w-40 h-40 bg-gradient-neon rounded-full blur-3xl"
        animate={{ 
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-32 left-16 w-28 h-28 bg-gradient-cosmic rounded-full blur-2xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -25, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
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
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 70
              }}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-8 hover-glow group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="p-3 bg-white/10 backdrop-blur rounded-xl shadow-glow"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img 
                    src={edu.logo} 
                    alt={`${edu.school} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-semibold text-white mb-3 font-display group-hover:text-gradient transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {edu.degree}
                  </motion.h3>
                  <div className="flex items-center gap-3 text-white/70 mb-3">
                    <span className="font-medium text-accent-light">{edu.school}</span>
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <div className="text-accent-light mb-4 font-medium">
                    <span className="text-white/60">GPA: </span>{edu.gpa}
                  </div>
                  <motion.p 
                    className="text-white/75 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0.75 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {edu.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-3">
                    {edu.coursework.map((course, courseIndex) => (
                      <motion.span
                        key={courseIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-cosmic/20 text-primary-light rounded-full text-sm border border-primary/30 hover:border-primary/60 transition-all backdrop-blur-sm"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;