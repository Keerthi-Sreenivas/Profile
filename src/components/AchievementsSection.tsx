import { motion } from "framer-motion";
import { Trophy, Users, BookOpen, Presentation, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Creative Collision Challenge 2022",
    description: "Won 1st Place at the University of Rochester AIN Entrepreneurship cell's yearly pitching competition.",
    icon: <Trophy className="w-6 h-6" />,
    year: "2022",
    link: "https://www.rochester.edu/entrepreneurship/"
  },
  {
    title: "Smart India Hackathon 2020",
    description: "Won 2nd place All India for developing a Smart Yoga Instructor with feedback using Deep Learning.",
    icon: <Trophy className="w-6 h-6" />,
    year: "2020",
    link: "https://www.sih.gov.in/"
  },
  {
    title: "Women Entrepreneurship Week Candidate",
    description: "Selected to meet a Senior Director from Jio Industries for discussion about the Smart Yoga Instructor application at AIC Incubation Center.",
    icon: <Users className="w-6 h-6" />,
    year: "2020",
    link: "https://www.iiitkottayam.ac.in/"
  },
  {
    title: "Elected Cultural Secretary",
    description: "Conducted 15+ events with a footprint of more than 300+ students and managed a team of 25 students for fundraising and event organization.",
    icon: <Users className="w-6 h-6" />,
    year: "2019-2021",
    link: "https://www.iiitkottayam.ac.in/#!/culturalClub"
  },
  {
    title: "ACM/CSI/IEEE-CS Conference Presentation",
    description: "Author of 'IoT based Smart Medicine Reminder Kit' at ACM/CSI/IEEE-CS Research and Industry Symposium at IIIT Kottayam.",
    icon: <Presentation className="w-6 h-6" />,
    year: "2021",
    link: "https://www.iiitkottayam.ac.in/"
  },
  {
    title: "Grace Hopper Conference 2022",
    description: "Attended Grace Hopper 2022 Conference with University Scholarship from University of Rochester.",
    icon: <BookOpen className="w-6 h-6" />,
    year: "2022",
    link: "https://ghc.anitab.org/"
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center font-display"
        >
          Achievements & Recognition
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.a
              key={index}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
                  <div className="text-primary-light">
                    {achievement.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-white font-display group-hover:text-primary-light transition-colors">{achievement.title}</h3>
                      <span className="px-2 py-1 bg-primary/20 text-primary-light rounded-full text-xs">
                        {achievement.year}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-primary-light transition-colors" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{achievement.description}</p>
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