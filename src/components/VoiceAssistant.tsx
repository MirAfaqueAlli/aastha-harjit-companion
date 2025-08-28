import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mic, MicOff } from "lucide-react";

interface VoiceAssistantProps {
  language: 'en' | 'pa';
  onNavigate: (screen: string) => void;
}

interface Message {
  type: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

const VoiceAssistant = ({ language, onNavigate }: VoiceAssistantProps) => {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const isEnglish = language === 'en';

  const greetingText = isEnglish 
    ? "I am Aastha. How can I help you?" 
    : "ਮੈਂ ਆਸਥਾ ਹਾਂ। ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੀ ਹਾਂ?";

  const startListening = () => {
    setIsListening(true);
    
    // Mock voice interaction for demo
    setTimeout(() => {
      const userMessage: Message = {
        type: 'user',
        text: isEnglish ? "How do I treat yellow rust in wheat?" : "ਕਣਕ ਵਿੱਚ ਪੀਲੀ ਕੰਗੀ ਦਾ ਇਲਾਜ ਕਿਵੇਂ ਕਰਾਂ?",
        timestamp: new Date()
      };
      
      const assistantMessage: Message = {
        type: 'assistant',
        text: isEnglish 
          ? "For yellow rust treatment, spray fungicide containing Propiconazole early morning. Remove infected leaves and ensure good field drainage. Monitor your crop daily for 2 weeks."
          : "ਪੀਲੀ ਕੰਗੀ ਦੇ ਇਲਾਜ ਲਈ, ਸਵੇਰੇ ਪ੍ਰੋਪੀਕੋਨਾਜ਼ੋਲ ਵਾਲਾ ਫੰਗੀਸਾਈਡ ਸਪਰੇ ਕਰੋ। ਸੰਕਰਮਿਤ ਪੱਤੇ ਹਟਾਓ ਅਤੇ ਖੇਤ ਦੀ ਚੰਗੀ ਨਿਕਾਸੀ ਯਕੀਨੀ ਬਣਾਓ। 2 ਹਫ਼ਤਿਆਂ ਤੱਕ ਰੋਜ਼ਾਨਾ ਆਪਣੀ ਫ਼ਸਲ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ।",
        timestamp: new Date()
      };
      
      setMessages([userMessage, assistantMessage]);
      setIsListening(false);
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

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
            {isEnglish ? 'Ask Aastha' : 'ਆਸਥਾ ਨੂੰ ਪੁੱਛੋ'}
          </h1>
        </div>
      </header>

      <main className="p-4">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Greeting Card */}
          <Card className="p-6 text-center">
            <p className="farm-text-large text-primary mb-4">
              {greetingText}
            </p>
            
            {/* Voice Button */}
            <div className="flex justify-center mb-6">
              <Button
                variant={isListening ? "destructive" : "farm-voice"}
                size="farm-xl"
                onClick={isListening ? stopListening : startListening}
                className="rounded-full"
              >
                {isListening ? (
                  <MicOff className="h-12 w-12" />
                ) : (
                  <Mic className="h-12 w-12" />
                )}
              </Button>
            </div>
            
            {/* Status Text */}
            <p className="text-muted-foreground">
              {isListening 
                ? (isEnglish ? "Listening..." : "ਸੁਣ ਰਿਹਾ ਹੈ...")
                : (isEnglish ? "Tap to speak" : "ਬੋਲਣ ਲਈ ਦਬਾਓ")
              }
            </p>
          </Card>

          {/* Conversation History */}
          {messages.length > 0 && (
            <div className="space-y-4">
              <h3 className="farm-text-large">
                {isEnglish ? 'Conversation' : 'ਗੱਲਬਾਤ'}
              </h3>
              
              {messages.map((message, index) => (
                <Card key={index} className={`p-4 ${
                  message.type === 'user' 
                    ? 'bg-primary text-primary-foreground ml-8' 
                    : 'bg-accent text-accent-foreground mr-8'
                }`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {message.type === 'user' 
                          ? (isEnglish ? 'You' : 'ਤੁਸੀਂ')
                          : 'Aastha'
                        }
                      </span>
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}
          
          {/* Quick Actions */}
          <div className="space-y-3">
            <h3 className="farm-text-large">
              {isEnglish ? 'Quick Actions' : 'ਤੁਰੰਤ ਕਾਰਵਾਈਆਂ'}
            </h3>
            
            <Button
              variant="farm"
              size="farm-wide"
              onClick={() => onNavigate('scan')}
              className="w-full"
            >
              {isEnglish ? 'Scan Another Crop' : 'ਹੋਰ ਫ਼ਸਲ ਸਕੈਨ ਕਰੋ'}
            </Button>
            
            <Button
              variant="farm-accent"
              size="farm-wide"
              onClick={() => onNavigate('data')}
              className="w-full"
            >
              {isEnglish ? 'View Farm Data' : 'ਫਾਰਮ ਡਾਟਾ ਦੇਖੋ'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VoiceAssistant;