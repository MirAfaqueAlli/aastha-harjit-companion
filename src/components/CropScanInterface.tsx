import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, ArrowLeft } from "lucide-react";

interface CropScanInterfaceProps {
  language: 'en' | 'pa';
  onNavigate: (screen: string) => void;
  onPhotoTaken: (imageData: string) => void;
}

const CropScanInterface = ({ language, onNavigate, onPhotoTaken }: CropScanInterfaceProps) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isEnglish = language === 'en';

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment', // Prefer back camera
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      setStream(mediaStream);
      setIsCapturing(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      // Fallback for demo purposes
      setIsCapturing(true);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCapturing(false);
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);
        
        const imageData = canvas.toDataURL('image/jpeg');
        onPhotoTaken(imageData);
        stopCamera();
        onNavigate('diagnosis');
      }
    } else {
      // Demo mode - simulate taking a photo
      onPhotoTaken('demo-image-data');
      stopCamera();
      onNavigate('diagnosis');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm p-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              stopCamera();
              onNavigate('home');
            }}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="farm-text-large text-primary">
            {isEnglish ? 'Crop Scan' : 'ਫ਼ਸਲ ਸਕੈਨ'}
          </h1>
        </div>
      </header>

      {/* Camera Interface */}
      <main className="p-4">
        <div className="max-w-lg mx-auto">
          {!isCapturing ? (
            <Card className="p-8 text-center space-y-6">
              <Camera className="h-24 w-24 mx-auto text-primary" />
              <div className="space-y-4">
                <h2 className="farm-text-large">
                  {isEnglish ? 'Ready to scan your crop?' : 'ਆਪਣੀ ਫ਼ਸਲ ਸਕੈਨ ਕਰਨ ਲਈ ਤਿਆਰ?'}
                </h2>
                <p className="text-muted-foreground">
                  {isEnglish ? 'Focus on the leaf for best results' : 'ਵਧੀਆ ਨਤੀਜਿਆਂ ਲਈ ਪੱਤੇ ਤੇ ਫੋਕਸ ਕਰੋ'}
                </p>
              </div>
              <Button
                variant="farm-large"
                size="farm-wide"
                onClick={startCamera}
                className="w-full"
              >
                {isEnglish ? 'Start Camera' : 'ਕੈਮਰਾ ਸ਼ੁਰੂ ਕਰੋ'}
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {/* Camera View */}
              <Card className="relative overflow-hidden rounded-2xl">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-96 object-cover bg-muted"
                />
                <canvas ref={canvasRef} className="hidden" />
                
                {/* Guidance Text Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg text-center">
                    <p className="farm-text-large">
                      {isEnglish ? 'Focus on the leaf' : 'ਪੱਤੇ ਤੇ ਫੋਕਸ ਕਰੋ'}
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Capture Button */}
              <div className="flex justify-center">
                <Button
                  variant="farm-voice"
                  size="farm-xl"
                  onClick={takePhoto}
                  className="rounded-full"
                >
                  <Camera className="h-8 w-8" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CropScanInterface;