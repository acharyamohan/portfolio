import React from 'react';
import { Database, BarChart, Brain } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Data Science Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Aspiring Data Scientist | Python Developer | Machine Learning Enthusiast
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#projects" 
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              View Projects
            </a>
            <a href="#contact"
              className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-6">
            <Database className="h-12 w-12" />
            <div>
              <h3 className="font-semibold text-xl">Data Analysis</h3>
              <p className="text-blue-100">Transforming data into insights</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-6">
            <BarChart className="h-12 w-12" />
            <div>
              <h3 className="font-semibold text-xl">Visualization</h3>
              <p className="text-blue-100">Creating meaningful visualizations</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-6">
            <Brain className="h-12 w-12" />
            <div>
              <h3 className="font-semibold text-xl">Machine Learning</h3>
              <p className="text-blue-100">Building predictive models</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}