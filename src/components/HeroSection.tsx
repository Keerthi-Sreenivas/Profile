
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";
import keerthiProfile from "/lovable-uploads/634d3fe4-37c8-4d9d-b55b-3fcd08dc66af.png";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 font-display leading-tight"
            >
              Keerthi Sreenivas
            </motion.h1>
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl text-primary-light mb-6 font-sans font-light leading-relaxed"
            >
              Gen AI Solutions Architect at AWS • Creator at QriositybyKeerthi
            </motion.h2>
            <motion.p 
              className="text-white/70 mb-8 text-base md:text-lg leading-relaxed"
            >
              Trusted AWS Solutions Architect specializing in Gen AI and Developer Experience. Master's in Data Science with expertise in AI-driven business solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
                  className="flex items-center justify-center sm:justify-start gap-2 text-white/60 hover:text-primary-light transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{text}</span>
                </a>
              ))}
            </motion.div>
          </div>
          <motion.div 
            className="order-1 md:order-2 flex justify-center mb-6 md:mb-0"
          >
            <img
              src={keerthiProfile}
              alt="Keerthi Sreenivas"
              className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover border-4 border-primary-dark/50 shadow-neon"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
