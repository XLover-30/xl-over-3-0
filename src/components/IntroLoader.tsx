import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05030B] select-none"
        >
          {/* Animated Glow Rings */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B35FF] to-[#246BFF] blur-xl opacity-60 animate-pulse" />
              <img
                src="./logo icon.png"
                alt="XL OVER 3.0 Logo"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(139,53,255,0.8)]"
              />
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-widest text-white uppercase text-center"
            >
              XL OVER <span className="text-[#B66BFF]">3.0</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xs sm:text-sm tracking-[0.3em] text-[#65C7FF] uppercase mt-2 text-center"
            >
              ONE IDENTITY. MULTIPLE WORLDS.
            </motion.p>

            {/* Futuristic Progress Line */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-6">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-[#8B35FF] via-[#246BFF] to-[#16B978]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
