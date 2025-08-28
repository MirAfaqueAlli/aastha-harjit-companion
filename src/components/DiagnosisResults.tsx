import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import yellowRustImage from "@/assets/yellow-rust-disease.jpg";

interface DiagnosisResultsProps {
  language: 'en' | 'pa';
  onNavigate: (screen: string) => void;
  capturedImage?: string;
}

const DiagnosisResults = ({ language, onNavigate, capturedImage }: DiagnosisResultsProps) => {
  const isEnglish = language === 'en';
  
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
            {isEnglish ? 'Diagnosis Results' : 'ਨਿਦਾਨ ਦੇ ਨਤੀਜੇ'}
          </h1>
        </div>
      </header>

      <main className="px-4 space-y-6">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Diagnosis Status Card */}
          <div className="floating-card p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-destructive/10 p-3 rounded-full">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <div className="flex-1">
                <h2 className="farm-text-xl text-destructive">{diagnosis.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {isEnglish ? 'Disease detected in your crop' : 'ਤੁਹਾਡੀ ਫ਼ਸਲ ਵਿੱਚ ਬਿਮਾਰੀ ਮਿਲੀ'}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="info-card text-center">
                <div className="text-lg font-bold text-destructive">{diagnosis.severity}</div>
                <div className="text-xs text-muted-foreground">
                  {isEnglish ? 'Severity' : 'ਗੰਭੀਰਤਾ'}
                </div>
              </div>
              <div className="info-card text-center">
                <div className="text-lg font-bold text-primary">{diagnosis.confidence}</div>
                <div className="text-xs text-muted-foreground">
                  {isEnglish ? 'Confidence' : 'ਭਰੋਸਾ'}
                </div>
              </div>
            </div>
          </div>

          {/* Disease Reference Image */}
          <div className="floating-card p-6 space-y-4">
            <h3 className="farm-text-large">
              {isEnglish ? 'Disease Reference' : 'ਬਿਮਾਰੀ ਦਾ ਹਵਾਲਾ'}
            </h3>
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={yellowRustImage} 
                alt={diagnosis.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">{diagnosis.name}</p>
              </div>
            </div>
          </div>

          {/* Treatment Advisory */}
          <div className="floating-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="farm-text-xl text-primary">
                {isEnglish ? 'Treatment Plan' : 'ਇਲਾਜ ਦੀ ਯੋਜਨਾ'}
              </h3>
            </div>
            
            <div className="space-y-4">
              {advisory.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="info-card mt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">
                  {isEnglish ? 'Expected recovery: 2-3 weeks' : 'ਰਿਕਵਰੀ ਦਾ ਸਮਾਂ: 2-3 ਹਫ਼ਤੇ'}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="glass-accent"
              className="w-full h-14"
              onClick={() => onNavigate('voice')}
            >
              {isEnglish ? 'Ask More Questions' : 'ਹੋਰ ਸਵਾਲ ਪੁੱਛੋ'}
            </Button>
            
            <Button
              variant="glass-primary"
              className="w-full h-14"
              onClick={() => onNavigate('home')}
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