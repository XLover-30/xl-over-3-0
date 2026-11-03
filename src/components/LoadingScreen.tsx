import React from 'react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = React.useState(0);
  const [isFading, setIsFading] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05030B] transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center space-y-6 max-w-sm px-6 text-center">
        {/* Glowing Logo Frame */}
        <div className="relative w-24 h-24 rounded-3xl p-1 bg-gradient-to-tr from-[#8B35FF] via-[#246BFF] to-[#65C7FF] shadow-[0_0_50px_rgba(139,53,255,0.6)] animate-pulse">
          <div className="w-full h-full rounded-[22px] bg-[#05030B] p-2 flex items-center justify-center overflow-hidden">
            <img
              src="/logo icon.png"
              alt="XL OVER 3.0"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h1 className="text-xl font-black tracking-widest text-white uppercase">
            XL OVER <span className="text-[#8B35FF]">3.0</span>
          </h1>
          <p className="text-[11px] font-mono tracking-widest text-[#B66BFF]">
            SYNTHESIZING 3D UNIVERSE...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#8B35FF] to-[#65C7FF] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#B8B0C8]">
          <Sparkles className="w-3 h-3 text-[#65C7FF]" />
          <span>INITIALIZING LIQUID PARTICLES {progress}%</span>
        </div>
      </div>
    </div>
  );
};
