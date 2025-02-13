// src/components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    githubLink?: string;
    tags: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Foxrest",
        description: "A full-stack web application enabling the creation, sharing, and analysis of dynamic forms.  Users can easily build and distribute forms, while administrators gain access to collected data for comprehensive analysis. Developed for freelance clients.",
        tags: ["React", "Node.js Express", "MongoDB", "Docker"],
    },
    {
        id: 2,
        title: "AIstagram",
        description: "A full-stack, hobby project reimagining Instagram with AI-powered content.  LLM multimodal models act as \"users,\" generating posts for human consumption.",
        tags: ["Python", "Spring Boot", "React"],
    },
    {
        id: 3,
        title: "Terrors of Infinity",
        description: "Terrors of Infinity is a chilling horror game developed as a university thesis project.  Navigate an ever-shifting, procedurally generated maze while evading \"The Shifter,\" a terrifying and unpredictable entity.  Experience the dread of infinite pursuit in this unique survival horror experience.",
        githubLink: "https://github.com/denisz-becskei/terrors_of_infinity",
        tags: ["Unity", "C#"],
    },
    {
        id: 4,
        title: "Boids",
        description: "A visually captivating simulation of flocking behavior. Experience the emergent patterns of simplified bird-like agents (\"Boids\") as they interact and move according to a classic flocking algorithm.  More of a dynamic art piece than a traditional game.",
        githubLink: "https://github.com/denisz-becskei/boids",
        tags: ["Unity", "C#"],
    },
    {
        id: 5,
        title: "Multispectral QR Codes",
        description: "A novel application generating multi-colored QR codes for enhanced data capacity.  Utilizing red, green, and blue layers, this system effectively triples the data density of traditional QR codes, read by a dedicated multispectral scanner.",
        githubLink: "https://github.com/denisz-becskei/multispectral-qr-code",
        tags: ["Python"],
    },
    {
        id: 6,
        title: "Adventures of the Blobs",
        description: "A vibrant MMORPG where players control customizable \"Blob\" characters, each with unique classes, abilities, and spells.  Engage in epic battles against challenging raid bosses to earn valuable loot and forge your legend.",
        tags: ["Unity", "C#"],
    },
    {
        id: 7,
        title: "Blockify",
        description: "Transform your images into Minecraft-style block art.  This application analyzes your image, comparing each pixel's color to a user-defined block palette.  It then replaces each pixel with the closest matching block color, creating a blockified version of your image.",
        githubLink: "https://github.com/denisz-becskei/blockify",
        tags: ["Python"],
    },
    {
        id: 8,
        title: "CodeForge",
        description: "A full-stack web application leveraging locally run Large Language Models (LLMs) to deliver valuable insights and assistance to programmers.",
        tags: ["React", "Node.js Express", "SQLite", "Docker"],
    },
    {
        id: 9,
        title: "Insight & Insight Woe",
        description: "A mobile face-swapping app using InSwapper and Codeformer AI models for realistic face replacement and restoration.",
        tags: ["Python", "Kotlin"],
    },
    {
        id: 10,
        title: "RAGStage",
        description: "A full-stack application leveraging Retrieval Augmented Generation (RAG) to provide accurate answers to user questions based on uploaded document content.",
        tags: ["Spring Boot", "Angular", "Typescript", "PostgreSQL", "Docker"],
    },
    {
        id: 11,
        title: "Dark Graph",
        description: "A full-stack application for exploring the Deep Web.  Leveraging GraphScraper, GraphStore, and GraphEvaluator modules, Dark Graph scrapes and visualizes Deep Web content in an interactive, chart-based system, enabling one-click exploration.",
        tags: ["Python", "MongoDB", "Docker"],
    },
    {
        id: 12,
        title: "Conway's Game of Life",
        description: "A classic implementation of Conway's Game of Life cellular automaton.",
        githubLink: "https://github.com/denisz-becskei/conwaysgameoflife",
        tags: ["HTML/CSS", "JavaScript"],
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="min-h-screen py-16 bg-base-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: project.id * 0.2 }}
                            className="card bg-base-200 shadow-md"
                        >
                            <div className="card-body">
                                <h3 className="card-title text-white">{project.title}</h3>
                                <p className="text-white">{project.description}</p>
                                {/* Tags displayed as chips */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="badge badge-outline">
                      {tag}
                    </span>
                                    ))}
                                </div>
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary mt-4"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
