import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    technologies: string[];
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
        <section
            id="projects"
            className="py-20 bg-background"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each
                        demonstrates different skills and technologies I've
                        mastered.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
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
        title: "Uleveling",
        description:
            `Uleveling Telegram Bot, brings activity in group chats with words filtering, levels, bonuses, and welcome messages.`,
        technologies: ["Telegraf", "Prisma", "Supabase"],
        liveUrl: "https://t.me/ulevelingbot",
        githubUrl: "https://github.com/IBO-Umbrel/Uleveling"
    },
    {
        title: "Umbrella Library",
        description:
            "A mobile app for reading and writing webnovels with a clean, user-friendly interface.",
        technologies: ["React Native", "Expo", "Firebase"],
        liveUrl: "https://umbrella-library.netlify.app/",
        githubUrl: "https://github.com/IBO-Umbrel/umbrella-library"
    },
    {
        title: "Golden Silk Finance Manager - Android app",
        description:
            "This is an app I built for a company. It helps company to manage and analyze workers salary, and income revenue inside their phone.",
        technologies: ["React Native", "Expo", "Firebase"],
        githubUrl: "https://github.com/IBO-Umbrel/Uoffice"
    },
    {
        title: "Manga World",
        description:
            "Platform that allows users to read any manga online with bookmarking and history features.",
        technologies: ["React Native", "Expo", "Manwa Service API"],
    },
    {
        title: "Music Share",
        description:
            "Spotify-like music downloader application for personal use with playlist management.",
        technologies: [
            "React Native",
            "Expo",
            "Firebase",
            "Node.js",
            "Express.js",
        ],
    },
    {
        title: "Umbrella Dictionary Bot",
        description:
            "Telegram bot that provides word definitions and examples in multiple languages.",
        technologies: ["Python", "Telegram API", "Node.js"],
        liveUrl: "https://t.me/umbrella_dictionary_bot",
        githubUrl: "https://github.com/IBO-Umbrel/umbrella_dictionary_bot"
    }
];

export default ProjectsSection;
