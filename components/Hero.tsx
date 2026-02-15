import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ArrowRight, MapPin } from 'lucide-react';

const CAROUSEL_WORDS = [
  { text: "SPEED.", color: "text-blue-500" },
  { text: "SMASH.", color: "text-green-400" },
  { text: "SCORE.", color: "text-yellow-400" },
];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAROUSEL_WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentWord = CAROUSEL_WORDS[index];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Coming Soon to Jalandhar
        </div>

        {/* Text Carousel */}
        <div 
          className="h-24 md:h-32 mb-8 flex items-center justify-center animate-fade-in-up opacity-0" 
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
            <span 
              key={currentWord.text} 
              className={`text-6xl md:text-7xl lg:text-8xl font-black italic tracking-tighter ${currentWord.color} drop-shadow-2xl animate-fade-in-up`}
            >
              {currentWord.text}
            </span>
        </div>

        {/* Subheading */}
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8 text-white/90 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400">Sports & Thrills</span>
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          The ultimate destination for next-gen sports and entertainment.
          Go-karting, Pickleball, Turf Cricket and more.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full animate-fade-in-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <Button className="w-full sm:w-auto h-14 text-lg">
            Join the Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" className="w-full sm:w-auto h-14 text-lg" href="#activities">
            Explore Activities
          </Button>
        </div>

        {/* Location Indicator */}
        <div className="mt-16 flex items-center justify-center gap-2 text-slate-500 text-sm font-medium animate-fade-in-up opacity-0" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <MapPin className="w-4 h-4 text-blue-500" />
          Located in the heart of Jalandhar
        </div>
      </div>
    </section>
  );
};