import { motion } from "framer-motion";
import { Trophy, Users, BookOpen, Presentation, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Creative Collision Challenge 2022",
    description: "Won 1st Place at the University of Rochester AIN Entrepreneurship cell's yearly pitching competition.",
    icon: <Trophy className="w-4 h-4" />,
    year: "2022",
    link: "https://www.rochester.edu/entrepreneurship/"
  },
  {
    title: "Smart India Hackathon 2020",
    description: "Won 2nd place All India for developing a Smart Yoga Instructor with feedback using Deep Learning.",
    icon: <Trophy className="w-4 h-4" />,
    year: "2020",
    link: "https://www.sih.gov.in/"
  },
  {
    title: "Women Entrepreneurship Week Candidate",
    description: "Co-built a smart yoga instructor application at AIC Incubation center.",
    icon: <Users className="w-4 h-4" />,
    year: "2020",
    link: "https://www.iiitkottayam.ac.in/#!/codingClub"
  },
  {
    title: "Elected Cultural Secretary",
    description: "Conducted 15+ events with a footprint of more than 300+ students and managed a team of 25 students for fundraising and event organization.",
    icon: <Users className="w-4 h-4" />,
    year: "2019-2021",
    link: "https://www.iiitkottayam.ac.in/#!/culturalClub"
  },
  {
    title: "ACM/CSI/IEEE-CS Conference Presentation",
    description: "Author of 'IoT based Smart Medicine Reminder Kit' at ACM/CSI/IEEE-CS Research and Industry Symposium at IIIT Kottayam.",
    icon: <Presentation className="w-4 h-4" />,
    year: "2021",
    link: "https://www.iiitkottayam.ac.in/"
  },
  {
    title: "Grace Hopper Conference 2022",
    description: "Attended Grace Hopper 2022 Conference with University Scholarship from University of Rochester.",
    icon: <BookOpen className="w-4 h-4" />,
    year: "2022",
    link: "https://ghc.anitab.org/"
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-cyber opacity-25"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
      />
      <motion.div 
        className="absolute top-40 left-24 w-48 h-48 bg-gradient-neon rounded-full blur-3xl"
        animate={{ 
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-32 right-16 w-36 h-36 bg-gradient-cosmic rounded-full blur-2xl"
        animate={{ 
          x: [0, 45, 0],
          y: [0, -35, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10 text-center font-display"
        >
          Achievements & Recognition
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.a
              key={index}
              href={achievement.link}
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
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-5 group cursor-pointer hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-neon rounded-lg flex-shrink-0">
                  <div className="text-foreground w-4 h-4 flex items-center justify-center">
                    {achievement.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold text-foreground font-display group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <span className="px-2 py-1 bg-gradient-cosmic/30 text-accent-light rounded-full text-xs border border-accent/30 w-fit">
                        {achievement.year}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-light transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {achievement.description}
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

export default AchievementsSection;