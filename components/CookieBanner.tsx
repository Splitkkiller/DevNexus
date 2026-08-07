import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onNavigate?: (view: string) => void;
}

export function CookieBanner({ onNavigate }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-[#090d16]/95 backdrop-blur-lg border border-slate-800 p-5 rounded-2xl shadow-2xl text-slate-200">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 font-bold text-white text-base">
          <div className="p-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400">
            <Cookie className="w-5 h-5" />
          </div>
          <span>We value your privacy</span>
        </div>
        <button 
          onClick={handleDecline} 
          className="text-slate-400 hover:text-white p-1 transition-colors"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed mb-4">
        We use cookies and local storage to save your code snippets, manage interactive workspace settings, and improve platform performance.{' '}
        {onNavigate && (
          <button 
            onClick={() => onNavigate('terms')} 
            className="text-blue-400 hover:underline inline font-medium"
          >
            Read Privacy Policy
          </button>
        )}
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition-all text-center"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-bold rounded-xl transition-all text-center"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}