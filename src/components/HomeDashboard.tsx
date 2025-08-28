import { Button } from "@/components/ui/button";
import { Camera, Mic, BarChart3, Sun, Droplets, Wind } from "lucide-react";
import aasthaLogo from "@/assets/aastha-logo.png";
import farmerCharacter from "@/assets/farmer-character.png";

interface HomeDashboardProps {
  language: 'en' | 'pa';
  onNavigate: (screen: string) => void;
}

const HomeDashboard = ({ language, onNavigate }: HomeDashboardProps) => {
  const isEnglish = language === 'en';
  
  return (
    <div className="min-h-screen mobile-safe">
      {/* Header with glassmorphic effect */}
      <header className="glass-card mx-4 mt-4 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={aasthaLogo} alt="Aastha" className="h-8 w-8" />
            <h1 className="farm-text-xl">Aastha</h1>
          </div>
          <div className="text-sm text-muted-foreground">
            {isEnglish ? 'Good Morning, Leonard' : 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਲਿਓਨਾਰਡ'}
          </div>
        </div>
      </header>
      
      <main className="px-4 space-y-6">
        {/* Weather Card - inspired by reference */}
        <div className="weather-card p-6 rounded-3xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-semibold text-white/90">
                {isEnglish ? "Today's Weather" : "ਅੱਜ ਦਾ ਮੌਸਮ"}
              </h2>
              <p className="text-sm text-white/70">{isEnglish ? 'Perfect for farming' : 'ਖੇਤੀ ਲਈ ਚੰਗਾ'}</p>
            </div>
            <Sun className="h-8 w-8 text-yellow-300" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-white">30°C</span>
            <div className="space-y-1 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4" />
                <span>65%</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4" />
                <span>3 km/h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Action Cards */}
        <div className="space-y-4">
          <h3 className="farm-text-xl mb-4">
            {isEnglish ? 'Manage Your Farm' : 'ਆਪਣਾ ਫਾਰਮ ਸੰਭਾਲੋ'}
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Scan Crop Card */}
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <Button
                variant="glass-primary"
                className="w-full h-auto flex flex-col items-center gap-4 p-4"
                onClick={() => onNavigate('scan')}
              >
                <div className="bg-white/20 p-4 rounded-2xl">
                  <Camera className="h-8 w-8" />
                </div>
                <span className="text-center font-semibold">
                  {isEnglish ? 'Scan Crop' : 'ਫ਼ਸਲ ਸਕੈਨ'}
                </span>
              </Button>
            </div>

            {/* Ask Aastha Card */}
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <Button
                variant="glass-accent"
                className="w-full h-auto flex flex-col items-center gap-4 p-4"
                onClick={() => onNavigate('voice')}
              >
                <div className="bg-white/20 p-4 rounded-2xl">
                  <Mic className="h-8 w-8" />
                </div>
                <span className="text-center font-semibold">
                  {isEnglish ? 'Ask Aastha' : 'ਆਸਥਾ ਨੂੰ ਪੁੱਛੋ'}
                </span>
              </Button>
            </div>
          </div>

          {/* Farm Data Card with Character */}
          <div className="floating-card p-6 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h4 className="farm-text-large">
                  {isEnglish ? 'My Farm Data' : 'ਮੇਰਾ ਫਾਰਮ ਡਾਟਾ'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {isEnglish ? 'Track your progress' : 'ਆਪਣੀ ਤਰੱਕੀ ਦੇਖੋ'}
                </p>
                <Button
                  variant="glass"
                  className="mt-3"
                  onClick={() => onNavigate('data')}
                >
                  <BarChart3 className="h-5 w-5 mr-2" />
                  {isEnglish ? 'View Data' : 'ਡਾਟਾ ਦੇਖੋ'}
                </Button>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src={farmerCharacter} 
                  alt="Farmer Character" 
                  className="h-24 w-24 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="info-card text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-xs text-muted-foreground">
              {isEnglish ? 'Scans' : 'ਸਕੈਨ'}
            </div>
          </div>
          <div className="info-card text-center">
            <div className="text-2xl font-bold text-accent">3</div>
            <div className="text-xs text-muted-foreground">
              {isEnglish ? 'Issues' : 'ਸਮੱਸਿਆਵਾਂ'}
            </div>
          </div>
          <div className="info-card text-center">
            <div className="text-2xl font-bold text-primary">85%</div>
            <div className="text-xs text-muted-foreground">
              {isEnglish ? 'Health' : 'ਸਿਹਤ'}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeDashboard;