import React from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle, MapPin, Clock, DollarSign, Mountain } from 'lucide-react';

export const AboutSection = ({ aboutData }) => {
  const featureIcons = {
    "Verified Local Drivers": CheckCircle,
    "24/7 Service Availability": Clock,
    "Competitive Pricing": DollarSign,
    "Mountain Route Specialists": Mountain
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {aboutData.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {aboutData.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.features.map((feature, index) => {
            const IconComponent = featureIcons[feature] || CheckCircle;
            return (
              <Card key={index} className="border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};