
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Gen AI Specialist Solutions Architect",
    company: "Amazon Web Services (AWS)",
    period: "Jun 2024 - Current",
    description: "Driving AI driven developer productivity enablement for Amazon Q Developer and Kiro across 50+ customers and 3000+ developers. Led to direct product adoption growth by 150% across multiple ISV customers and partners. Orchestrated multiple PoC's for Q Business and Q for Quicksight for Gen AI enablement for enterprise AWS Customer productivity use cases. Partnered with product teams for negotiating policy exceptions for Aurora MySQL upgrades for customers. Led 10+ resilience reviews, security assessments and business reviews for enterprise AWS customers providing actionable insights and delivered 5+ tailored enablement sessions."
  },
  {
    title: "Cloud/Infrastructure Engineer",
    company: "Barclays - Global Technology Infrastructure Services",
    period: "Jan 2023 - June 2024",
    description: "Implemented 7+ end-to-end Observability PoC's for diverse teams. Executed near-real-time decommissioning insights for Database servers, resulting in substantial resource savings for up to 450 SQL and Oracle Database Servers. Championed the adoption of an Observability Mindset across Barclays, fostering a thriving community of over 2500 technology experts."
  },
  {
    title: "Data Scientist",
    company: "Allogene Therapeutics - Cancer Research",
    period: "May 2022 - Dec 2022",
    description: "Developed a Data Issue tracker dashboard application in R to reduce time in communication issues in data by 70% which replaced existing licensed software thereby saving $80,000 annually. Worked with cross-functional teams to automate object extraction and performed ETL to store it in AWS S3 buckets."
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-12 text-center"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <span>{experience.company}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600">{experience.description}</p>
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
