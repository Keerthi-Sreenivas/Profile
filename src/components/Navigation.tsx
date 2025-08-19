import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "featured", label: "Featured" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" }
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center">
            <ThemeToggle />
          </div>
          <div className="flex flex-wrap items-center justify-center space-x-1 bg-background/5 backdrop-blur-sm rounded-full p-1 border border-border/10 max-w-full overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-2 md:px-3 py-1.5 md:py-2 text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap
                  ${activeSection === item.id 
                    ? "text-foreground bg-gradient-cosmic shadow-neon" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }
                `}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-cosmic rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="w-9 h-9"></div> {/* Spacer for balance */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;