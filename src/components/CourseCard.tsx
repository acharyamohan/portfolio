import React from 'react';
import { Clock, Users, BookOpen } from 'lucide-react';
import { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={course.imageUrl} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
              course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}`}>
            {course.level}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>{course.modules} modules</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>{course.enrolled.toLocaleString()} enrolled</span>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          Start Learning
        </button>
      </div>
    </div>
  );
}