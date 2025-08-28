import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import yellowRustImage from "@/assets/yellow-rust-disease.jpg";

interface DiagnosisResultsProps {
  language: 'en' | 'pa';
  onNavigate: (screen: string) => void;
  capturedImage?: string;
}

const DiagnosisResults = ({ language, onNavigate, capturedImage }: DiagnosisResultsProps) => {
  const isEnglish = language === 'en';
  
  // Mock diagnosis data
  const diagnosis = {
    name: isEnglish ? 'Yellow Rust' : 'ਪੀਲੀ ਕੰਗੀ',
    severity: isEnglish ? 'Moderate' : 'ਮੱਧਮ',
    confidence: '87%'
  };
  
  const advisory = isEnglish ? [
    'Remove infected leaves immediately',
    'Apply fungicide spray (Propiconazole)',
    'Improve field drainage',
    'Monitor crop regularly for 2 weeks'
  ] : [
    'ਸੰਕਰਮਿਤ ਪੱਤਿਆਂ ਨੂੰ ਤੁਰੰਤ ਹਟਾਓ',
    'ਫੰਗੀਸਾਈਡ ਸਪਰੇ ਕਰੋ (ਪ੍ਰੋਪੀਕੋਨਾਜ਼ੋਲ)',
    'ਖੇਤ ਦੀ ਨਿਕਾਸੀ ਸੁਧਾਰੋ',
    '2 ਹਫ਼ਤਿਆਂ ਤੱਕ ਫ਼ਸਲ ਦੀ ਨਿਯਮਿਤ ਨਿਗਰਾਨੀ ਕਰੋ'
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
            {isEnglish ? 'Diagnosis Results' : 'ਨਿਦਾਨ ਦੇ ਨਤੀਜੇ'}
          </h1>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Diagnosis Card */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3 text-destructive">
              <AlertTriangle className="h-6 w-6" />
              <h2 className="farm-text-xl">{diagnosis.name}</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">
                  {isEnglish ? 'Severity:' : 'ਗੰਭੀਰਤਾ:'}
                </span>
                <p className="font-semibold">{diagnosis.severity}</p>
              </div>
              <div>
                <span className="text-muted-foreground">
                  {isEnglish ? 'Confidence:' : 'ਭਰੋਸਾ:'}
                </span>
                <p className="font-semibold">{diagnosis.confidence}</p>
              </div>
            </div>
          </Card>

          {/* Disease Image */}
          <Card className="p-4">
            <h3 className="farm-text-large mb-4">
              {isEnglish ? 'Disease Reference' : 'ਬਿਮਾਰੀ ਦਾ ਹਵਾਲਾ'}
            </h3>
            <img 
              src={yellowRustImage} 
              alt={diagnosis.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          </Card>

          {/* Advisory Section */}
          <Card className="p-6 space-y-4">
            <h3 className="farm-text-xl text-primary">
              {isEnglish ? 'Treatment Advisory' : 'ਇਲਾਜ ਦੀ ਸਲਾਹ'}
            </h3>
            
            <div className="space-y-3">
              {advisory.map((step, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="farm-text-large flex-1">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="farm-accent"
              size="farm-wide"
              onClick={() => onNavigate('voice')}
              className="w-full"
            >
              {isEnglish ? 'Ask More Questions' : 'ਹੋਰ ਸਵਾਲ ਪੁੱਛੋ'}
            </Button>
            
            <Button
              variant="farm"
              size="farm-wide"
              onClick={() => onNavigate('home')}
              className="w-full"
            >
              {isEnglish ? 'Back to Home' : 'ਘਰ ਵਾਪਸ ਜਾਓ'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiagnosisResults;