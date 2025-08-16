import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Colorizer - Deep Learning",
    description: "A Deep learning based application that converts a Black and White (Grayscale) Image/Video into a Colour video without human guidance.",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&h=300&fit=crop",
    link: "https://docs.google.com/presentation/d/193X-n0sXoFbMR9dD7rxJxwM8n_GpOwNQ/edit?usp=sharing&ouid=116008293600462184270&rtpof=true&sd=true",
    tags: ["Deep Learning", "Computer Vision", "Python"]
  },
  {
    title: "Elon Musk Dogecoin Tweet Analysis - NLP",
    description: "Analyzed the sentiments around Elon's tweets about Dogecoin and impact of his tweets on the price of Doge coin.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
    link: "https://github.com/Keerthi-Sreenivas/Elon_Musk-Doge-Tweet_Analysis/blob/main/Facts_derived_from_the_study.pdf",
    tags: ["NLP", "Sentiment Analysis", "Data Science"]
  },
  {
    title: "Marketing Insights - Statistics",
    description: "Digging through data and finding significant insights to advertise better products to customers of different backgrounds.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    link: "https://github.com/Keerthi-Sreenivas/statistics/blob/main/Project.pdf",
    tags: ["Statistics", "Marketing Analytics", "Data Visualization"]
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-12 text-center font-display"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-display">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;