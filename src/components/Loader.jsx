import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // ⚡ Faster load (1.5s max)
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#6E1A37] flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: hide ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >

      {/* 🎀 Image (NO infinite rotation now) */}
      <motion.img
        src="/assets/Loader.png" // ✅ use WEBP
        alt="Rakhi Loader"
        className="w-40 h-40 object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* TEXT */}
      <motion.h2
        className="mt-4 text-white text-lg font-bold tracking-widest"
        style={{ fontFamily: "'Cinzel', serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        APHRODITE
      </motion.h2>

    </motion.div>
  );
};

export default Loader;