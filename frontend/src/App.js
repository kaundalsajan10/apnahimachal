import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Toaster } from "./components/ui/sonner";
import { mockData } from "./components/mockData";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header logoUrl={mockData.hero.logoUrl} />
      <main>
        <HeroSection 
          heroData={mockData.hero} 
          contactData={mockData.contact} 
        />
        <AboutSection aboutData={mockData.about} />
        <ContactSection contactData={mockData.contact} />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src={mockData.hero.logoUrl} 
              alt="Apna Himachal Logo" 
              className="h-8 w-8 object-contain"
            />
            <h3 className="text-xl font-bold">Apna Himachal</h3>
          </div>
          <p className="text-gray-400">
            © 2025 Apna Himachal. All rights reserved. Your trusted partner for taxi driver's search.
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
