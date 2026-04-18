import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setZoom(true), 2000);
    const timer2 = setTimeout(() => onFinish(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#6E1A37] flex flex-col items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: zoom ? 0 : 1 }}
      transition={{ duration: 1 }}
    >

      {/* 🔥 Glow */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, #AE2448, transparent)"
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
      />

      {/* 🎀 Rakhi */}
      <motion.img
        src="/assets/Loader.png"
        alt="rakhi"
        className="relative w-60 h-60 object-contain z-10"
        initial={{ rotate: 0, scale: 1 }}
        animate={{
          rotate: 360,
          scale: zoom ? 6 : 1,
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          },
          scale: {
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
      />

      {/* ✨ TEXT */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: zoom ? 0 : 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
className="mt-6 text-white text-xl font-extrabold tracking-widest uppercase drop-shadow-[0_0_15px_#AE2448] drop-shadow-[0_0_30px_#6E1A37]"      >
        APHRODITE
      </motion.h2>

    </motion.div>
  );
};

export default Loader;