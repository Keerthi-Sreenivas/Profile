import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Masters in Data Science (Business Concentration)",
    school: "University of Rochester, New York",
    period: "2021 - 2022",
    gpa: "3.7 out of 4.0",
    description: "Teaching Assistant for Big Data at Simon Business School. Research assistant for Bio-Medical Image data preprocessing for U-Net Deep Learning Algorithm. Grace Hopper 2022 Conference attendee with University Scholarship.",
    coursework: ["Data Science at Scale", "Machine Learning", "Applied Statistical Methods", "Data Mining", "Technical Entrepreneurship", "Time Series Analysis"]
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering (Hons.)",
    school: "Indian Institute of Information Technology (IIIT), Kottayam",
    period: "2017 - 2021",
    gpa: "8.96 out of 10",
    description: "Main Author for research presentation 'IoT based Smart Medicine Reminder Kit' at ACM/CSI/IEEE-CS Research and Industry Symposium. Co-Founded Proxima, an Image processing based Start-up for Smart Badminton and Yoga instruction.",
    coursework: ["Artificial Intelligence", "Data Warehousing and Data Mining", "Big Data Analytics", "Cloud Computing", "Cryptography", "Blockchain Technology"]
  }
];

const EducationSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center font-display"
        >
          Education
        </motion.h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary-light" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1 font-display">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-primary-light mb-2">
                    <span>{edu.school}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <div className="text-primary-light mb-3">
                    <span className="font-semibold">GPA: </span>{edu.gpa}
                  </div>
                  <p className="text-white/70 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm"
                      >
                        {course}
                      </span>
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