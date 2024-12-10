import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <Github className="h-5 w-5" />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <ExternalLink className="h-5 w-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}