import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";

interface Project {
  id: number;
  title: string;
  description: string;
  githubLink?: string;
  tags: string[];
  isOrder: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Foxrest",
    description: "A full-stack web application enabling the creation, sharing, and analysis of dynamic forms.  Users can easily build and distribute forms, while administrators gain access to collected data for comprehensive analysis. Developed for freelance clients.",
    tags: ["React", "Node.js Express", "MongoDB", "Docker"],
    isOrder: true,
  },
  {
    id: 2,
    title: "AIstagram",
    description: 'A full-stack, hobby project reimagining Instagram with AI-powered content.  LLM multimodal models act as "users," generating posts for human consumption.',
    tags: ["Python", "Spring Boot", "React"],
    isOrder: false,
  },
  {
    id: 3,
    title: "Terrors of Infinity",
    description: 'Terrors of Infinity is a chilling horror game developed as a university thesis project.  Navigate an ever-shifting, procedurally generated maze while evading "The Shifter," a terrifying and unpredictable entity.  Experience the dread of infinite pursuit in this unique survival horror experience.',
    githubLink: "https://github.com/denisz-becskei/terrors_of_infinity",
    tags: ["Unity", "C#"],
    isOrder: false,
  },
  {
    id: 4,
    title: "Boids",
    description: 'A visually captivating simulation of flocking behavior. Experience the emergent patterns of simplified bird-like agents ("Boids") as they interact and move according to a classic flocking algorithm.  More of a dynamic art piece than a traditional game.',
    githubLink: "https://github.com/denisz-becskei/boids",
    tags: ["Unity", "C#"],
    isOrder: false,
  },
  {
    id: 5,
    title: "Multispectral QR Codes",
    description: "A novel application generating multi-colored QR codes for enhanced data capacity.  Utilizing red, green, and blue layers, this system effectively triples the data density of traditional QR codes, read by a dedicated multispectral scanner.",
    githubLink: "https://github.com/denisz-becskei/multispectral-qr-code",
    tags: ["Python"],
    isOrder: false,
  },
  {
    id: 6,
    title: "Adventures of the Blobs",
    description: 'A vibrant MMORPG where players control customizable "Blob" characters, each with unique classes, abilities, and spells.  Engage in epic battles against challenging raid bosses to earn valuable loot and forge your legend.',
    tags: ["Unity", "C#"],
    isOrder: false,
  },
  {
    id: 7,
    title: "Blockify",
    description: "Transform your images into Minecraft-style block art.  This application analyzes your image, comparing each pixel's color to a user-defined block palette.  It then replaces each pixel with the closest matching block color, creating a blockified version of your image.",
    githubLink: "https://github.com/denisz-becskei/blockify",
    tags: ["Python"],
    isOrder: false,
  },
  {
    id: 8,
    title: "CodeForge",
    description: "A full-stack web application leveraging locally run Large Language Models (LLMs) to deliver valuable insights and assistance to programmers.",
    tags: ["React", "Node.js Express", "SQLite", "Docker"],
    isOrder: false,
  },
  {
    id: 9,
    title: "Insight & Insight Woe",
    description: "A mobile face-swapping app using InSwapper and Codeformer AI models for realistic face replacement and restoration.",
    tags: ["Python", "Kotlin"],
    isOrder: false
  },
  {
    id: 10,
    title: "RAGStage",
    description: "A full-stack application leveraging Retrieval Augmented Generation (RAG) to provide accurate answers to user questions based on uploaded document content.",
    tags: ["Spring Boot", "Angular", "Typescript", "PostgreSQL", "Docker"],
    isOrder: false,
  },
  {
    id: 11,
    title: "Dark Graph",
    description: "A full-stack application for exploring the Deep Web.  Leveraging GraphScraper, GraphStore, and GraphEvaluator modules, Dark Graph scrapes and visualizes Deep Web content in an interactive, chart-based system, enabling one-click exploration.",
    tags: ["Python", "MongoDB", "Docker"],
    isOrder: false,
  },
  {
    id: 12,
    title: "Conway's Game of Life",
    description: "A classic implementation of Conway's Game of Life cellular automaton.",
    githubLink: "https://github.com/denisz-becskei/conwaysgameoflife",
    tags: ["HTML/CSS", "JavaScript"],
    isOrder: false,
  },
  {
    id: 13,
    title: "Grimoire",
    description: "A web application built with React and Node.js Express that streamlines employee leave management. It allows employees to request leaves, and provides HR and project managers with a centralized system to review, approve, or deny these requests, ensuring efficient tracking and notification.",
    tags: ["React", "Node.js Express", "PostgreSQL", "Docker"],
    isOrder: true,
  },
  {
    id: 14,
    title: "VTMv5: Beyond",
    description: "A character management platform for the tabletop game Vampire: The Masquarade. It features character building, management, and physics based dice rolling via Three.js.",
    tags: ["React", "Node.js Express", "PostgreSQL", "Docker"],
    isOrder: false
  },
  {
    id: 15,
    title: "The Zero Engine",
    description: "A Reddit-style forum clone with AI Agents talking to one another. Many things can be configured, such as interaction rate, action type, automatic content creation, etc.",
    tags: ["React", "Node.js Express", "MongoDB", "Docker", "Ollama"],
    isOrder: false,
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
              initial={{ opacity: 0, y: 20, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{
                delay: project.id * 0.2,
                scale: { type: "tween", duration: 0.02 },
              }}
              className="card bg-base-200 shadow-md hover:shadow-2xl cursor-pointer"
              style={{ transformOrigin: "center" }}
            >
              <div className="card-body">
                <div className="flex w-full justify-between">
                  <h3 className="card-title text-white">{project.title}</h3>
                  {project.isOrder && (
                  <Tooltip title="Available for ordering" placement="top" arrow>
                    <span id={"project-" + project.id} data-tooltip-id={"project-" + project.id} data-tooltip-content="Available for ordering" className="flex cursor-crosshair">
                      *
                    </span>
                  </Tooltip>
                  )}
                </div>
                <p className="text-white">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="badge badge-outline">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
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
