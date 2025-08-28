import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import aasthaLogo from "@/assets/aastha-logo.png";

interface LanguageSelectionProps {
  onLanguageSelect: (language: 'en' | 'pa') => void;
}

const LanguageSelection = ({ onLanguageSelect }: LanguageSelectionProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-md mx-auto">
        {/* App Logo */}
        <div className="space-y-4">
          <img 
            src={aasthaLogo} 
            alt="Aastha Logo" 
            className="h-24 w-24 mx-auto"
          />
          <h1 className="farm-text-xl text-primary">Aastha</h1>
        </div>
        
        {/* Language Selection */}
        <Card className="p-8 space-y-6">
          <div className="space-y-2">
            <p className="farm-text-large text-foreground">Select your language</p>
            <p className="farm-text-large text-foreground">ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ</p>
          </div>
          
          <div className="space-y-4">
            <Button
              variant="farm-large"
              size="farm-wide"
              onClick={() => onLanguageSelect('en')}
              className="w-full flex items-center gap-3"
            >
              <span className="text-2xl">🇬🇧</span>
              <span>English</span>
            </Button>
            
            <Button
              variant="farm-large"
              size="farm-wide"
              onClick={() => onLanguageSelect('pa')}
              className="w-full flex items-center gap-3"
            >
              <span className="text-2xl">🇮🇳</span>
              <span>ਪੰਜਾਬੀ</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LanguageSelection;