
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import PublicationsSection from "@/components/PublicationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";

const Index = () => {
  return (
    <>
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20" // Add padding to account for fixed navigation
      >
        <section id="home">
          <HeroSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="featured">
          <FeaturedInSection />
        </section>
        <section id="publications">
          <PublicationsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="certifications">
          <CertificationsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="achievements">
          <AchievementsSection />
        </section>
      </motion.div>
    </>
  );
};

export default Index;
