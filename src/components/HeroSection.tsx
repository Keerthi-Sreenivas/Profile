
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";
import keerthiProfile from "/lovable-uploads/634d3fe4-37c8-4d9d-b55b-3fcd08dc66af.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.h1 
              className="text-4xl md:text-5xl text-white mb-4 font-display"
            >
              Keerthi Sreenivas
            </motion.h1>
            <motion.h2 
              className="text-2xl text-primary-light mb-6 font-sans font-light"
            >
              Gen AI Solutions Architect at AWS • Creator at QriositybyKeerthi
            </motion.h2>
            <motion.p 
              className="text-white/70 mb-8 text-lg"
            >
              Trusted technical advisor for AWS customers with expertise in Developer experience & AI. Master's in Data Science with strong interest in Technology and Business intersection.
            </motion.p>
            <motion.div 
              className="flex gap-4"
            >
              {[
                { 
                  Icon: Mail, 
                  text: "Email", 
                  href: "mailto:keerthikonjety7@gmail.com" 
                },
                { 
                  Icon: Linkedin, 
                  text: "LinkedIn", 
                  href: "https://www.linkedin.com/in/keerthi-sreenivas" 
                },
                { 
                  Icon: Instagram, 
                  text: "@qriositybykeerthi", 
                  href: "https://www.instagram.com/qriositybykeerthi" 
                }
              ].map(({ Icon, text, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex items-center gap-2 text-white/60 hover:text-primary-light transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{text}</span>
                </a>
              ))}
            </motion.div>
          </div>
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src={keerthiProfile}
              alt="Keerthi Sreenivas"
              className="rounded-full w-64 h-64 object-cover border-4 border-primary-dark/50 shadow-neon"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
