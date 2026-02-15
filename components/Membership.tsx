import React from 'react';
import { MEMBERSHIPS } from '../constants';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-24 bg-slate-900 relative overflow-hidden scroll-mt-28">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Exclusive Membership</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Unlock premium perks and priority access with our annual plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {MEMBERSHIPS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-3xl p-8 border ${
                plan.recommended 
                  ? 'bg-slate-800/50 border-blue-500 shadow-2xl shadow-blue-500/10' 
                  : 'bg-slate-950 border-slate-800'
              } flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.recommended ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.recommended ? 'text-blue-400' : 'text-slate-500'}`} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.recommended ? 'primary' : 'outline'}
                className="w-full"
              >
                Join Waitlist
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};