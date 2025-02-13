// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";

// Define your expertise items
interface Skill {
    id: number;
    concept: string;
    experience: number;
}

const skills: Skill[] = [
    { id: 1, concept: "Angular", experience: 4 },
    { id: 2, concept: "TypeScript", experience: 4 },
    { id: 3, concept: "Java", experience: 5 },
    { id: 4, concept: "Spring Boot", experience: 4 },
    { id: 5, concept: "HTML/SCSS", experience: 5 },
    { id: 6, concept: "C#", experience: 4 },
    { id: 7, concept: "Unity", experience: 4 },
    { id: 8, concept: "Python", experience: 4 },
    { id: 9, concept: "PostgreSQL", experience: 4 },
    { id: 10, concept: "Docker", experience: 1 },
    { id: 11, concept: "React", experience: 1 },
    { id: 12, concept: "Node.js Express", experience: 1 },
];

const About: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center bg-base-200 pt-20 pb-10">
            {/* About Me Card with Avatar */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card w-full max-w-3xl bg-base-100 shadow-xl mb-8"
            >
                <div className="card-body flex flex-col md:flex-row items-center">
                    {/* Text Section */}
                    <div className="flex-1">
                        <h2 className="card-title text-white">About Me</h2>
                        <p className="text-white">
                            Hi, I'm Gustyff – a passionate web & game developer specializing in building exceptional digital experiences.
                            I enjoy working with modern technologies and creating responsive, interactive websites and fascinating game development concepts.
                            I am also fascinated by the use of Large Language Models (LLMs) within applications for different use-cases.
                            <br /><br />
                            In my free time, I'm accepting freelance jobs with mostly creating full-stack web applications.
                        </p>
                    </div>
                    {/* Avatar Section */}
                    <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {/* Replace the URL below with your actual avatar image */}
                                <img src="WJ0Z5RCQ.jpg" alt="Avatar of Gustyff" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Expertise Section */}
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold text-white mb-4">Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: skill.id * 0.2 }}
                            className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="card-body">
                                <h4 className="card-title text-primary">{skill.concept}</h4>
                                <p className="text-white">
                                    {skill.experience} {skill.experience === 1 ? "year" : "years"} experience
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
