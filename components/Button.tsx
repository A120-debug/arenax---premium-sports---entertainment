import React from 'react';
import { WAITLIST_URL } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 via-teal-500 to-yellow-500 text-white shadow-lg hover:shadow-blue-500/25 border border-transparent",
    secondary: "bg-white text-slate-900 hover:bg-gray-100 shadow-md",
    outline: "bg-transparent border-2 border-slate-700 text-slate-300 hover:border-blue-400 hover:text-white"
  };

  // Determine if the link is external (starts with http)
  const isExternal = href?.startsWith('http');
  const Component = href ? 'a' : 'button';
  
  const props: any = {};
  
  if (href) {
    props.href = href;
    // Only open external links in a new tab
    if (isExternal) {
      props.target = "_blank";
      props.rel = "noopener noreferrer";
    } else {
      // Internal links (starting with #) - use programmatic scroll
      props.onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        
        if (href === '#' || href === '') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          try {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          } catch (err) {
            // Fallback if selector is invalid or not found
            console.warn('Could not scroll to element:', href);
          }
        }
        
        if (onClick) onClick();
      };
    }
  } else {
    // Default action for non-href buttons (Join Waitlist)
    props.onClick = onClick || (() => window.open(WAITLIST_URL, '_blank', 'noopener,noreferrer'));
  }

  return (
    // @ts-ignore
    <Component 
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};