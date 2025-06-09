import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = defaultProjects,
}) => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each demonstrates
            different skills and technologies I've mastered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Umbrella Library",
    description:
      "A mobile app for reading and writing webnovels with a clean, user-friendly interface.",
    technologies: ["React Native", "Expo", "Firebase"],
    imageUrl:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    liveUrl: "https://umbrella-library.netlify.app/",
  },
  {
    id: "2",
    title: "Golden Silk Finance Manager",
    description:
      "Application for managing company salaries and revenue with detailed analytics.",
    technologies: ["React Native", "Expo", "Firebase"],
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    id: "3",
    title: "Manga World",
    description:
      "Platform that allows users to read any manga online with bookmarking and history features.",
    technologies: ["React Native", "Expo"],
    imageUrl:
      "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&q=80",
  },
  {
    id: "4",
    title: "Music Share",
    description:
      "Spotify-like music downloader application for personal use with playlist management.",
    technologies: ["React Native", "Expo", "Firebase", "Node.js", "Express.js"],
    imageUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
  },
  {
    id: "5",
    title: "Umbrella Dictionary Bot",
    description:
      "Telegram bot that provides word definitions and examples in multiple languages.",
    technologies: ["Python", "Telegram API", "Node.js"],
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    liveUrl: "https://t.me/umbrella_dictionary_bot",
  },
  {
    id: "6",
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects and skills with modern design.",
    technologies: ["Vite", "React", "Tailwind CSS", "Framer Motion"],
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    liveUrl: "https://ibo-umbrel.netlify.app/",
  },
];

export default ProjectsSection;
