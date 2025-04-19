
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Data Engineer Associate",
    issuer: "Amazon Web Services (AWS)",
    validity: "December 2024 - December 2027",
    link: "https://www.credly.com/earner/earned/badge/a60a7cf1-eab2-4a46-9ca8-610c30f64c96"
  },
  {
    title: "AWS Certified Solutions Architect Professional",
    issuer: "Amazon Web Services (AWS)",
    validity: "December 2024 - December 2027",
    link: "https://www.credly.com/badges/ead2b9a9-1aab-4b9a-9301-64d07b8548f4/public_url"
  },
  {
    title: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services (AWS)",
    validity: "August 2022 - December 2027",
    link: "https://www.credly.com/badges/6dc6453b-42d0-42b2-8664-4f61d376cc58/public_url"
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-12 text-center"
        >
          AWS Certifications
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.validity}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
