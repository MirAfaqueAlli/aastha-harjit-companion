import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Camera, ArrowLeft, Focus } from "lucide-react";

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
          facingMode: 'environment',
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
      onPhotoTaken('demo-image-data');
      stopCamera();
      onNavigate('diagnosis');
    }
  };

  return (
    <div className="min-h-screen mobile-safe">
      {/* Header */}
      <header className="glass-card mx-4 mt-4 p-4 mb-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              stopCamera();
              onNavigate('home');
            }}
            className="rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="farm-text-large">
            {isEnglish ? 'Crop Scan' : 'ਫ਼ਸਲ ਸਕੈਨ'}
          </h1>
        </div>
      </header>

      <main className="px-4">
        <div className="max-w-lg mx-auto">
          {!isCapturing ? (
            <div className="space-y-6">
              {/* Instructions Card */}
              <div className="floating-card p-8 text-center space-y-6">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-6 rounded-full w-fit mx-auto">
                  <Camera className="h-16 w-16 text-primary" />
                </div>
                <div className="space-y-4">
                  <h2 className="farm-text-xl">
                    {isEnglish ? 'Ready to scan your crop?' : 'ਆਪਣੀ ਫ਼ਸਲ ਸਕੈਨ ਕਰਨ ਲਈ ਤਿਆਰ?'}
                  </h2>
                  <div className="info-card">
                    <div className="flex items-center gap-3">
                      <Focus className="h-5 w-5 text-primary" />
                      <p className="text-sm">
                        {isEnglish ? 'Focus on the leaf for best results' : 'ਵਧੀਆ ਨਤੀਜਿਆਂ ਲਈ ਪੱਤੇ ਤੇ ਫੋਕਸ ਕਰੋ'}
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="glass-primary"
                  className="w-full h-14 text-lg"
                  onClick={startCamera}
                >
                  <Camera className="h-6 w-6 mr-3" />
                  {isEnglish ? 'Start Camera' : 'ਕੈਮਰਾ ਸ਼ੁਰੂ ਕਰੋ'}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Camera View */}
              <div className="relative overflow-hidden rounded-3xl floating-card">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-96 object-cover bg-muted"
                />
                <canvas ref={canvasRef} className="hidden" />
                
                {/* Guidance Overlay */}
                <div className="absolute top-6 left-6 right-6">
                  <div className="glass-card p-4 text-center border border-white/30">
                    <p className="text-white font-semibold">
                      {isEnglish ? 'Focus on the leaf' : 'ਪੱਤੇ ਤੇ ਫੋਕਸ ਕਰੋ'}
                    </p>
                  </div>
                </div>

                {/* Focus Frame */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-4 border-white/50 rounded-2xl border-dashed"></div>
                </div>
              </div>
              
              {/* Capture Button */}
              <div className="flex justify-center">
                <Button
                  variant="glass-accent"
                  className="rounded-full h-20 w-20 pulse-gentle"
                  onClick={takePhoto}
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