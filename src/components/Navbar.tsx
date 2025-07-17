import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Github, Linkedin, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">Mohan Acharya</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <div className="flex items-center space-x-2">
              <a href="https://github.com/acharyamohan" target="_blank" rel="noopener noreferrer" 
                className="p-2 text-gray-600 hover:text-blue-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/mooohanacharya/" target="_blank" rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:acharyamooohan@gmail.com"
                className="p-2 text-gray-600 hover:text-blue-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}