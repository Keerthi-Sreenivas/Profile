
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Keerthi Sreenivas
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-blue-600 mb-6"
            >
              Generative AI Specialist Solutions Architect
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-8 text-lg"
            >
              Enhancing developer productivity through innovative AI tools at AWS. AWS 3X Certified professional with expertise in cloud solutions and data science.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <a
                href="mailto:keerthikonjety7@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/keerthi-sreenivas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/qriositybykeerthi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@qriositybykeerthi</span>
              </a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQFH7wGO2rS_GA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729110926583?e=1750291200&v=beta&t=x7ibmf3Zwi2C4_mCSUQLIIEXR5OShbTLmpKTaRIydXY"
              alt="Keerthi Sreenivas"
              className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
