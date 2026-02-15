import React, { useState, useRef, useEffect } from 'react';
import { COMPANY_LOGO_URL } from '../constants';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  const [error, setError] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check local storage for a cached logo preview
    try {
      const cached = localStorage.getItem('arenax_logo_preview');
      if (cached) {
        setPreviewSrc(cached);
        setError(false);
      }
    } catch (e) {
      // Ignore storage errors
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewSrc(result);
        setError(false);
        try {
          localStorage.setItem('arenax_logo_preview', result);
        } catch (err) {
          console.warn('Logo too large to save to local storage');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = (e: React.MouseEvent) => {
    // Prevent navigation if inside a link, and trigger file input
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  // Determine if height is provided in className to avoid conflict with default h-10
  const hasHeight = className?.includes('h-');
  const defaultHeight = hasHeight ? '' : 'h-10';
  
  const containerClasses = `relative inline-flex items-center justify-center w-auto ${defaultHeight} ${className || ''}`;

  // Prioritize: 1. Local Preview (Upload) -> 2. Constants URL (Pasted Link) -> 3. Default Local File
  const logoSource = previewSrc || COMPANY_LOGO_URL || "/brand/arenax-logo.png";
  const isDefaultOrConfigured = !!logoSource;

  if (error && !previewSrc && !COMPANY_LOGO_URL) {
    return (
      <div 
        onClick={triggerUpload}
        className={`${containerClasses} group cursor-pointer`}
        title="Logo missing. Click to upload a preview."
        role="button"
        tabIndex={0}
      >
        <span className="text-2xl font-bold tracking-tighter text-white select-none whitespace-nowrap">
          ARENA<span className="text-blue-500">X</span>
        </span>
        
        {/* Hidden File Input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/png,image/jpeg,image/svg+xml,image/webp"
          onChange={handleFileChange}
        />
        
        {/* Hover hint */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-[10px] text-blue-400 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700 z-50 shadow-xl">
          Click to upload logo
        </div>
      </div>
    );
  }

  return (
    <div 
      className={containerClasses}
      onDoubleClick={triggerUpload} 
      title="ArenaX"
    >
      <img 
        src={logoSource} 
        alt="ArenaX Logo" 
        className="h-full w-auto object-contain"
        onError={() => {
            // Only set error if we don't have a manual preview set, 
            // effectively falling back to text if the URL/file fails.
            if (!previewSrc) setError(true);
        }}
      />
      <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/png,image/jpeg,image/svg+xml,image/webp"
          onChange={handleFileChange}
      />
    </div>
  );
};