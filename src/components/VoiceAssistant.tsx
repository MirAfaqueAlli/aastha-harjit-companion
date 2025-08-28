import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic, MicOff, MessageCircle } from "lucide-react";

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
            {isEnglish ? 'Ask Aastha' : 'ਆਸਥਾ ਨੂੰ ਪੁੱਛੋ'}
          </h1>
        </div>
      </header>

      <main className="px-4">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Voice Interface Card */}
          <div className="floating-card p-8 text-center space-y-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-full w-fit mx-auto">
                <MessageCircle className="h-12 w-12 text-primary" />
              </div>
              <h2 className="farm-text-xl text-primary">
                {greetingText}
              </h2>
            </div>
            
            {/* Voice Button */}
            <div className="flex justify-center">
              <Button
                variant={isListening ? "destructive" : "glass-accent"}
                className={`rounded-full h-24 w-24 ${isListening ? 'pulse-gentle' : ''}`}
                onClick={isListening ? stopListening : startListening}
              >
                {isListening ? (
                  <MicOff className="h-12 w-12" />
                ) : (
                  <Mic className="h-12 w-12" />
                )}
              </Button>
            </div>
            
            {/* Status Text */}
            <div className="info-card">
              <p className="text-sm font-medium">
                {isListening 
                  ? (isEnglish ? "Listening..." : "ਸੁਣ ਰਿਹਾ ਹੈ...")
                  : (isEnglish ? "Tap to speak" : "ਬੋਲਣ ਲਈ ਦਬਾਓ")
                }
              </p>
            </div>
          </div>

          {/* Conversation History */}
          {messages.length > 0 && (
            <div className="space-y-4">
              <h3 className="farm-text-large">
                {isEnglish ? 'Conversation' : 'ਗੱਲਬਾਤ'}
              </h3>
              
              {messages.map((message, index) => (
                <div key={index} className={`${
                  message.type === 'user' ? 'ml-8' : 'mr-8'
                }`}>
                  <div className={`glass-card p-4 ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-primary/20 to-primary/10' 
                      : 'bg-gradient-to-r from-accent/20 to-accent/10'
                  }`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">
                          {message.type === 'user' 
                            ? (isEnglish ? 'You' : 'ਤੁਸੀਂ')
                            : 'Aastha'
                          }
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="farm-text-large">
              {isEnglish ? 'Quick Actions' : 'ਤੁਰੰਤ ਕਾਰਵਾਈਆਂ'}
            </h3>
            
            <div className="grid grid-cols-1 gap-3">
              <Button
                variant="glass-primary"
                className="h-12 justify-start"
                onClick={() => onNavigate('scan')}
              >
                {isEnglish ? 'Scan Another Crop' : 'ਹੋਰ ਫ਼ਸਲ ਸਕੈਨ ਕਰੋ'}
              </Button>
              
              <Button
                variant="glass"
                className="h-12 justify-start"
                onClick={() => onNavigate('data')}
              >
                {isEnglish ? 'View Farm Data' : 'ਫਾਰਮ ਡਾਟਾ ਦੇਖੋ'}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VoiceAssistant;