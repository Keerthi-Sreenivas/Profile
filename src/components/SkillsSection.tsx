
import { motion } from "framer-motion";
import { Code2, Database, PenTool, Users } from "lucide-react";

const skills = [
  {
    category: "AWS Services",
    icon: <Code2 className="w-6 h-6" />,
    items: "AWS OpenSearch, AWS Bedrock, AWS Q Business, AWS CloudFormation, AWS S3, AWS CloudWatch, AWS X-Ray"
  },
  {
    category: "Programming",
    icon: <Database className="w-6 h-6" />,
    items: "Python, R, SQL, JavaScript, Ruby, HTML/CSS, KQL, SPL"
  },
  {
    category: "Data & Analytics",
    icon: <PenTool className="w-6 h-6" />,
    items: "Elasticsearch, Kibana, Logstash, Kafka, Splunk, APM, R Shiny"
  },
  {
    category: "Professional",
    icon: <Users className="w-6 h-6" />,
    items: "Mentorship, Team Player, DEI Advocate, Technical Leadership"
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
        <div className="space-y-6">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0"
            >
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{category.category}</h3>
                <p className="text-gray-600">{category.items}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
