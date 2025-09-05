import React from 'react';

export const Header = ({ logoUrl }) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src={logoUrl} 
              alt="Apna Himachal Logo" 
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-green-700">Apna Himachal</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};