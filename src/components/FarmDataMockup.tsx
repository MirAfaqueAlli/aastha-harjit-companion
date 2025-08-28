import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, TrendingUp, AlertCircle, Leaf, BarChart } from "lucide-react";

interface FarmDataMockupProps {
  language: 'en' | 'pa';
  onNavigate: (screen: string) => void;
}

const FarmDataMockup = ({ language, onNavigate }: FarmDataMockupProps) => {
  const isEnglish = language === 'en';
  
  const mockData = [
    {
      crop: isEnglish ? 'Wheat' : 'ਕਣਕ',
      diagnosis: isEnglish ? 'Yellow Rust' : 'ਪੀਲੀ ਕੰਗੀ',
      date: isEnglish ? 'July 20, 2025' : '20 ਜੁਲਾਈ, 2025',
      status: isEnglish ? 'Treated' : 'ਇਲਾਜ ਕੀਤਾ ਗਿਆ',
      severity: 'moderate'
    },
    {
      crop: isEnglish ? 'Maize' : 'ਮੱਕੀ',
      diagnosis: isEnglish ? 'Blight' : 'ਝੁਲਸਾ ਰੋਗ',
      date: isEnglish ? 'June 15, 2025' : '15 ਜੂਨ, 2025',
      status: isEnglish ? 'Monitoring' : 'ਨਿਗਰਾਨੀ ਹੇਠ',
      severity: 'high'
    },
    {
      crop: isEnglish ? 'Rice' : 'ਚਾਵਲ',
      diagnosis: isEnglish ? 'Healthy' : 'ਸਿਹਤਮੰਦ',
      date: isEnglish ? 'May 30, 2025' : '30 ਮਈ, 2025',
      status: isEnglish ? 'Good' : 'ਚੰਗਾ',
      severity: 'none'
    }
  ];

  return (
    <div className="min-h-screen mobile-safe">
      {/* Header */}
      <header className="glass-card mx-4 mt-4 p-4 mb-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate('home')}
            className="rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="farm-text-large">
            {isEnglish ? 'My Farm Data' : 'ਮੇਰਾ ਫਾਰਮ ਡਾਟਾ'}
          </h1>
        </div>
      </header>

      <main className="px-4">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="info-card text-center">
              <div className="bg-primary/10 p-2 rounded-full w-fit mx-auto mb-2">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground">
                {isEnglish ? 'Total Scans' : 'ਕੁੱਲ ਸਕੈਨ'}
              </p>
            </div>
            
            <div className="info-card text-center">
              <div className="bg-accent/10 p-2 rounded-full w-fit mx-auto mb-2">
                <AlertCircle className="h-6 w-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-accent">3</p>
              <p className="text-xs text-muted-foreground">
                {isEnglish ? 'Issues Found' : 'ਸਮੱਸਿਆਵਾਂ ਮਿਲੀਆਂ'}
              </p>
            </div>

            <div className="info-card text-center">
              <div className="bg-primary/10 p-2 rounded-full w-fit mx-auto mb-2">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">85%</p>
              <p className="text-xs text-muted-foreground">
                {isEnglish ? 'Health Score' : 'ਸਿਹਤ ਸਕੋਰ'}
              </p>
            </div>
          </div>

          {/* Farm Health Chart */}
          <div className="floating-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <BarChart className="h-5 w-5 text-primary" />
              </div>
              <h2 className="farm-text-large">
                {isEnglish ? 'Farm Health Trend' : 'ਫਾਰਮ ਸਿਹਤ ਦਾ ਰੁਝਾਨ'}
              </h2>
            </div>
            
            {/* Simple chart visualization */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground w-16">Jan</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <span className="text-sm font-semibold">75%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground w-16">Feb</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                <span className="text-sm font-semibold">80%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground w-16">Mar</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm font-semibold">85%</span>
              </div>
            </div>
          </div>

          {/* Recent Diagnoses */}
          <div className="space-y-4">
            <h2 className="farm-text-xl">
              {isEnglish ? 'Recent Diagnoses' : 'ਹਾਲ ਦੇ ਨਿਦਾਨ'}
            </h2>
            
            {mockData.map((record, index) => (
              <div key={index} className="glass-card p-4 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="farm-text-large font-semibold">{record.crop}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    record.severity === 'none'
                      ? 'bg-primary/10 text-primary'
                      : record.severity === 'moderate'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-destructive/10 text-destructive'
                  }`}>
                    {record.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className={`p-1 rounded-full ${
                      record.severity === 'none' 
                        ? 'bg-primary/10' 
                        : record.severity === 'moderate'
                        ? 'bg-accent/10'
                        : 'bg-destructive/10'
                    }`}>
                      <AlertCircle className={`h-3 w-3 ${
                        record.severity === 'none' 
                          ? 'text-primary' 
                          : record.severity === 'moderate'
                          ? 'text-accent'
                          : 'text-destructive'
                      }`} />
                    </div>
                    <span>{record.diagnosis}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{record.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Future Feature Notice */}
          <div className="glass-card p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-dashed border-2 border-primary/20">
            <div className="text-center space-y-3">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="farm-text-large text-primary">
                {isEnglish ? 'Future Feature' : 'ਭਵਿੱਖ ਦੀ ਸੁਵਿਧਾ'}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isEnglish 
                  ? 'Advanced analytics, weather predictions, and personalized farming recommendations will be available here.'
                  : 'ਅਡਵਾਂਸ ਐਨਾਲਿਟਿਕਸ, ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ, ਅਤੇ ਵਿਅਕਤਿਗਤ ਖੇਤੀ ਸਿਫਾਰਸ਼ਾਂ ਇੱਥੇ ਉਪਲਬਧ ਹੋਣਗੀਆਂ।'
                }
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="glass-primary"
              className="w-full h-14"
              onClick={() => onNavigate('scan')}
            >
              {isEnglish ? 'Scan New Crop' : 'ਨਈ ਫ਼ਸਲ ਸਕੈਨ ਕਰੋ'}
            </Button>
            
            <Button
              variant="glass-accent"
              className="w-full h-14"
              onClick={() => onNavigate('voice')}
            >
              {isEnglish ? 'Ask Aastha' : 'ਆਸਥਾ ਨੂੰ ਪੁੱਛੋ'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FarmDataMockup;