import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, TrendingUp, AlertCircle } from "lucide-react";

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
      status: isEnglish ? 'Treated' : 'ਇਲਾਜ ਕੀਤਾ ਗਿਆ'
    },
    {
      crop: isEnglish ? 'Maize' : 'ਮੱਕੀ',
      diagnosis: isEnglish ? 'Blight' : 'ਝੁਲਸਾ ਰੋਗ',
      date: isEnglish ? 'June 15, 2025' : '15 ਜੂਨ, 2025',
      status: isEnglish ? 'Monitoring' : 'ਨਿਗਰਾਨੀ ਹੇਠ'
    },
    {
      crop: isEnglish ? 'Rice' : 'ਚਾਵਲ',
      diagnosis: isEnglish ? 'Healthy' : 'ਸਿਹਤਮੰਦ',
      date: isEnglish ? 'May 30, 2025' : '30 ਮਈ, 2025',
      status: isEnglish ? 'Good' : 'ਚੰਗਾ'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm p-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="farm-text-large text-primary">
            {isEnglish ? 'My Farm Data' : 'ਮੇਰਾ ਫਾਰਮ ਡਾਟਾ'}
          </h1>
        </div>
      </header>

      <main className="p-4">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'Total Scans' : 'ਕੁੱਲ ਸਕੈਨ'}
              </p>
            </Card>
            
            <Card className="p-4 text-center">
              <AlertCircle className="h-8 w-8 mx-auto text-accent mb-2" />
              <p className="text-2xl font-bold text-accent">3</p>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'Issues Found' : 'ਸਮੱਸਿਆਵਾਂ ਮਿਲੀਆਂ'}
              </p>
            </Card>
          </div>

          {/* Recent Diagnoses */}
          <div className="space-y-4">
            <h2 className="farm-text-xl">
              {isEnglish ? 'Recent Diagnoses' : 'ਹਾਲ ਦੇ ਨਿਦਾਨ'}
            </h2>
            
            {mockData.map((record, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="farm-text-large font-semibold">{record.crop}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    record.status === 'Good' || record.status === 'ਚੰਗਾ'
                      ? 'bg-primary/10 text-primary'
                      : record.status === 'Treated' || record.status === 'ਇਲਾਜ ਕੀਤਾ ਗਿਆ'
                      ? 'bg-accent/10 text-accent-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {record.status}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    <span>{record.diagnosis}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{record.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Mockup Notice */}
          <Card className="p-6 bg-muted/50 border-dashed border-2">
            <div className="text-center space-y-3">
              <h3 className="farm-text-large text-primary">
                {isEnglish ? 'Future Feature' : 'ਭਵਿੱਖ ਦੀ ਸੁਵਿਧਾ'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isEnglish 
                  ? 'This data dashboard will track your farm\'s health over time, providing insights and trends to help improve your crop management.'
                  : 'ਇਹ ਡਾਟਾ ਡੈਸ਼ਬੋਰਡ ਸਮੇਂ ਦੇ ਨਾਲ ਤੁਹਾਡੇ ਖੇਤ ਦੀ ਸਿਹਤ ਨੂੰ ਟਰੈਕ ਕਰੇਗਾ, ਤੁਹਾਡੇ ਫ਼ਸਲ ਪ੍ਰਬੰਧਨ ਨੂੰ ਬੇਹਤਰ ਬਣਾਉਣ ਲਈ ਸਮਝ ਅਤੇ ਰੁਝਾਨ ਪ੍ਰਦਾਨ ਕਰੇਗਾ।'
                }
              </p>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="farm"
              size="farm-wide"
              onClick={() => onNavigate('scan')}
              className="w-full"
            >
              {isEnglish ? 'Scan New Crop' : 'ਨਈ ਫ਼ਸਲ ਸਕੈਨ ਕਰੋ'}
            </Button>
            
            <Button
              variant="farm-accent"
              size="farm-wide"
              onClick={() => onNavigate('voice')}
              className="w-full"
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