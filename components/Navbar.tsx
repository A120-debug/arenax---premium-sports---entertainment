import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Activities', href: '#activities' },
    { name: 'Membership', href: '#membership' },
    { name: 'Location', href: '#location' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-4 md:py-6 bg-transparent">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleScrollToSection(e, '#')}
          className="flex items-center group select-none"
        >
          {/* Logo with enhanced styling */}
          <div className="relative flex items-center justify-center">
            {/* Subtle backlight glow behind logo on hover */}
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Logo className="relative z-10 h-16 md:h-24 w-auto transition-transform duration-300 group-hover:scale-105 filter drop-shadow-lg" />
          </div>
          
          {/* Stylish Divider */}
          <div className="h-10 md:h-14 w-px bg-gradient-to-b from-transparent via-slate-600/50 to-transparent mx-5 md:mx-6"></div>
          
          {/* Brand Text */}
          <span className="text-2xl md:text-4xl font-black tracking-tighter text-white">
            ARENA<span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">X</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="!py-2 !px-6 text-sm shadow-blue-500/20">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-lg font-medium text-slate-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-2">Join Waitlist</Button>
        </div>
      )}
    </nav>
  );
};