
import { motion } from "framer-motion";
import { Code2, Database, PenTool, Users } from "lucide-react";

const skills = [
  {
    category: "AWS Services",
    icon: <Code2 className="w-6 h-6" />,
    items: ["AWS OpenSearch", "AWS Bedrock", "AWS Q Business", "AWS CloudFormation", "AWS S3", "AWS CloudWatch", "AWS X-Ray"]
  },
  {
    category: "Programming",
    icon: <Database className="w-6 h-6" />,
    items: ["Python", "R", "SQL", "JavaScript", "Ruby", "HTML/CSS", "KQL", "SPL"]
  },
  {
    category: "Data & Analytics",
    icon: <PenTool className="w-6 h-6" />,
    items: ["Elasticsearch", "Kibana", "Logstash", "Kafka", "Splunk", "APM", "R Shiny"]
  },
  {
    category: "Professional",
    icon: <Users className="w-6 h-6" />,
    items: ["Mentorship", "Team Player", "DEI Advocate", "Technical Leadership"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-600 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
