"use client"

import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      className="bg-white rounded-xl mt-5 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
                Live
            </a>
        </div>
      </div>
    </motion.div>
  );
}
