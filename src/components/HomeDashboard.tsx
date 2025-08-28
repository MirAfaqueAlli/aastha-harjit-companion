import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Mic, BarChart3 } from "lucide-react";
import aasthaLogo from "@/assets/aastha-logo.png";

interface HomeDashboardProps {
  language: 'en' | 'pa';
  onNavigate: (screen: string) => void;
}

const HomeDashboard = ({ language, onNavigate }: HomeDashboardProps) => {
  const isEnglish = language === 'en';
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm p-4">
        <div className="flex items-center justify-center gap-3">
          <img src={aasthaLogo} alt="Aastha" className="h-8 w-8" />
          <h1 className="farm-text-xl text-primary">Aastha</h1>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {/* Scan Crop Button */}
            <Card className="p-6">
              <Button
                variant="farm-large"
                size="farm-wide"
                onClick={() => onNavigate('scan')}
                className="w-full flex flex-col items-center gap-4 py-8"
              >
                <Camera className="h-12 w-12" />
                <div className="text-center">
                  <div className="farm-text-large">
                    {isEnglish ? 'Scan Crop' : 'ਫ਼ਸਲ ਸਕੈਨ ਕਰੋ'}
                  </div>
                </div>
              </Button>
            </Card>
            
            {/* Ask Aastha Button */}
            <Card className="p-6">
              <Button
                variant="farm-accent"
                size="farm-wide"
                onClick={() => onNavigate('voice')}
                className="w-full flex flex-col items-center gap-4 py-8"
              >
                <Mic className="h-12 w-12" />
                <div className="text-center">
                  <div className="farm-text-large">
                    {isEnglish ? 'Ask Aastha' : 'ਆਸਥਾ ਨੂੰ ਪੁੱਛੋ'}
                  </div>
                </div>
              </Button>
            </Card>
            
            {/* My Farm Data Button */}
            <Card className="p-6">
              <Button
                variant="farm"
                size="farm-wide"
                onClick={() => onNavigate('data')}
                className="w-full flex flex-col items-center gap-4 py-8"
              >
                <BarChart3 className="h-12 w-12" />
                <div className="text-center">
                  <div className="farm-text-large">
                    {isEnglish ? 'My Farm Data' : 'ਮੇਰਾ ਫਾਰਮ ਡਾਟਾ'}
                  </div>
                </div>
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeDashboard;