import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">Let's connect and discuss opportunities</p>
        </div>
        <div className="flex justify-center space-x-8">
          <a href="mailto:your.email@example.com"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Mail className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-gray-900 font-medium">Email</span>
            <span className="text-gray-600">professortate3@gmail.com</span>
          </a>
          <a href="https://github.com/professortate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Github className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-gray-900 font-medium">GitHub</span>
            <span className="text-gray-600">@professortate</span>
          </a>
          <a href="https://linkedin.com/in/professortate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Linkedin className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-gray-900 font-medium">LinkedIn</span>
            <span className="text-gray-600">@professortate</span>
          </a>
        </div>
      </div>
    </section>
  );
}