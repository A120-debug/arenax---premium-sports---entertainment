import React from 'react';
import { ACTIVITIES } from '../constants';
import { Button } from './Button';

export const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-24 bg-slate-950 relative scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">World-Class Arenas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experience premium facilities designed for pros and enthusiasts alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity) => {
            const Icon = activity.icon;
            return (
              <div 
                key={activity.id} 
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900 animate-pulse"></div>
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Spec Badge */}
                  <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur border border-slate-700 px-3 py-1 rounded-full text-xs font-bold text-blue-400 uppercase tracking-wider">
                    {activity.spec}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {activity.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-400 mb-6 line-clamp-2">
                    {activity.description}
                  </p>

                  <div className="mt-auto">
                    <Button variant="outline" className="w-full text-sm py-2">
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};