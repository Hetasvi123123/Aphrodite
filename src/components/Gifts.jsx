import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// ✅ Data
const gifts = [
  { name: "Watches", img: "/assets/watch.jpg" },
  { name: "Clothes", img: "/assets/Clothes.jpg" },
  { name: "Chocolates", img: "/assets/chocolate.jpg" },
  { name: "Personalized Gifts", img: "/assets/gift.jpg" },
];

const RevealGift = ({ item, delay }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(20% 40% 20% 40%)", "inset(0% 0% 0% 0%)"]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ clipPath, scale }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-48 sm:h-56 md:h-64 object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3
          className="text-white text-lg md:text-xl font-bold tracking-wide"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {item.name}
        </h3>
      </div>
    </motion.div>
  );
};

const Gifts = () => {
  return (
    <section className="w-full bg-[#FFF5F5] py-12 sm:py-16 px-4 text-center">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5E0006]"
        >
          Gift Ideas for Rakhi 🎁
        </motion.h2>

        {/* Grid */}
        <div className="
          mt-10
          grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6
        ">
          {gifts.map((gift, index) => (
            <RevealGift
              key={index}
              item={gift}
              delay={index * 0.15}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Gifts;