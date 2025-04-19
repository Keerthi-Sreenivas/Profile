
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Generative AI Specialist Solutions Architect",
    company: "Amazon Web Services (AWS)",
    period: "June 2024 - Present",
    description: "Specializing in Amazon Q Developer, promoting AI adoption best practices and facilitating AWS customers in utilizing AI to boost developer productivity."
  },
  {
    title: "Enterprise Account Engineer II",
    company: "Amazon Web Services (AWS)",
    period: "June 2024 - March 2025",
    description: "Led operations for GovCloud implementations and AI feature launches for AWS ISV executive customers. Conducted workshops for Amazon OpenSearch, Amazon Q-developer, and Amazon Bedrock."
  },
  {
    title: "Cloud and Infrastructure Engineer",
    company: "Barclays",
    period: "January 2023 - June 2024",
    description: "Implemented end-to-end observability data pipelines and championed data-driven conversations through orchestration of data proof of concepts."
  },
  {
    title: "Founder",
    company: "QriosityByKeerthi",
    period: "March 2015 - Present",
    description: "Established a community of 13,000 AI learners on Instagram. Developed audio-visual content that simplifies complex technical concepts."
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
