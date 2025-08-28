import { useState } from "react";
import { Button } from "@/components/ui/button";
import aasthaLogo from "@/assets/aastha-logo.png";

interface LanguageSelectionProps {
  onLanguageSelect: (language: 'en' | 'pa') => void;
}

const LanguageSelection = ({ onLanguageSelect }: LanguageSelectionProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-md mx-auto">
        {/* App Logo with floating animation */}
        <div className="space-y-6 float-animation">
          <div className="floating-card p-8 mx-auto w-fit">
            <img 
              src={aasthaLogo} 
              alt="Aastha Logo" 
              className="h-20 w-20 mx-auto mb-4"
            />
            <h1 className="farm-text-hero">Aastha</h1>
            <p className="text-sm text-muted-foreground mt-2">Your Farming Companion</p>
          </div>
        </div>
        
        {/* Language Selection Card */}
        <div className="glass-card p-8 space-y-6">
          <div className="space-y-3">
            <h2 className="farm-text-xl">Select your language</h2>
            <p className="farm-text-xl">ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ</p>
          </div>
          
          <div className="space-y-4">
            <Button
              variant="glass-large"
              className="w-full flex items-center gap-4 h-16"
              onClick={() => onLanguageSelect('en')}
            >
              <span className="text-3xl">🇬🇧</span>
              <span className="text-xl font-semibold">English</span>
            </Button>
            
            <Button
              variant="glass-accent"
              className="w-full flex items-center gap-4 h-16"
              onClick={() => onLanguageSelect('pa')}
            >
              <span className="text-3xl">🇮🇳</span>
              <span className="text-xl font-semibold">ਪੰਜਾਬੀ</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;