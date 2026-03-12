import { useEffect } from 'react';
import logo from '../../assets/logo.svg';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-[#8B1A2B] to-[#D72638] px-8 overflow-hidden">
      {/* Logo in dark rounded square */}
      <div className="w-[180px] h-[180px] bg-[#1A1A1A] rounded-[32px] flex items-center justify-center mb-8 shadow-2xl">
        <img src={logo} alt="UrgentCareX Logo" width={140} height={140} />
      </div>

      {/* App Name */}
      <h1
        className="text-[32px] font-bold text-white"
        style={{ fontFamily: "'Alice', serif" }}
      >
        UrgentCareX
      </h1>
    </div>
  );
}
