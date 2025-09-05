import React from 'react';
import { Button } from './ui/button';
import { Phone, MessageCircle } from 'lucide-react';

export const HeroSection = ({ heroData, contactData }) => {
  const handleCall = () => {
    window.location.href = `tel:${contactData.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <section 
      className="relative py-20 min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/33779030/pexels-photo-33779030.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {heroData.title}
          </h1>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {heroData.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={handleCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};