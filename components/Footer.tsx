import React from 'react';
import { Logo } from './Logo';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { LINKS } from '../constants';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === '#' || id === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="location" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-start gap-3">
            <a 
              href="#" 
              onClick={(e) => handleScroll(e, '#')} 
              className="block hover:opacity-80 transition-opacity"
              aria-label="Back to top"
            >
              {/* Logo size increased to approx 2x (h-48 mobile, h-64 desktop) */}
              <Logo className="h-48 md:h-64 w-auto" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => handleScroll(e, '#')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#activities" 
                  onClick={(e) => handleScroll(e, '#activities')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Activities
                </a>
              </li>
              <li>
                <a 
                  href="#membership" 
                  onClick={(e) => handleScroll(e, '#membership')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Heart of Jalandhar <span className="text-xs bg-slate-800 text-blue-400 px-2 py-0.5 rounded ml-2">Coming Soon</span></span>
              </li>
              <li>
                <a href={`mailto:${LINKS.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-blue-500" />
                  {LINKS.email}
                </a>
              </li>
              <li>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5 text-blue-500" />
                  @arenax_jal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} ArenaX. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};