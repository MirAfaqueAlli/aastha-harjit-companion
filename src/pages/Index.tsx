import { useState } from "react";
import LanguageSelection from "@/components/LanguageSelection";
import HomeDashboard from "@/components/HomeDashboard";
import CropScanInterface from "@/components/CropScanInterface";
import DiagnosisResults from "@/components/DiagnosisResults";
import VoiceAssistant from "@/components/VoiceAssistant";
import FarmDataMockup from "@/components/FarmDataMockup";

type Language = 'en' | 'pa';
type Screen = 'language' | 'home' | 'scan' | 'diagnosis' | 'voice' | 'data';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('language');
  const [language, setLanguage] = useState<Language>('en');
  const [capturedImage, setCapturedImage] = useState<string>('');

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setCurrentScreen('home');
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handlePhotoTaken = (imageData: string) => {
    setCapturedImage(imageData);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'language':
        return <LanguageSelection onLanguageSelect={handleLanguageSelect} />;
      case 'home':
        return <HomeDashboard language={language} onNavigate={handleNavigate} />;
      case 'scan':
        return (
          <CropScanInterface 
            language={language} 
            onNavigate={handleNavigate}
            onPhotoTaken={handlePhotoTaken}
          />
        );
      case 'diagnosis':
        return (
          <DiagnosisResults 
            language={language} 
            onNavigate={handleNavigate}
            capturedImage={capturedImage}
          />
        );
      case 'voice':
        return <VoiceAssistant language={language} onNavigate={handleNavigate} />;
      case 'data':
        return <FarmDataMockup language={language} onNavigate={handleNavigate} />;
      default:
        return <LanguageSelection onLanguageSelect={handleLanguageSelect} />;
    }
  };

  return renderScreen();
};

export default Index;
