import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// 🔥 Add image + text
const gifts = [
  {
    name: "Watches",
    img: "/assets/watch.jpg"
  },
  {
    name: "Clothes",
    img: "/assets/Clothes.jpg"
  },
  {
    name: "Chocolates",
    img: "/assets/chocolate.jpg"
  },
  {
    name: "Personalized Gifts",
    img: "/assets/gift.jpg"
  },
];

const RevealGift = ({ item, delay }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ clipPath, scale }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className="
        p-4 sm:p-6 md:p-8
        bg-[#6E1A37]
        rounded-xl shadow cursor-pointer overflow-hidden
        flex flex-col sm:flex-row items-center
        gap-3 sm:gap-5
        text-center sm:text-left
      "
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.name}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
      />

      {/* Text */}
      <h3
        className="text-sm sm:text-base md:text-lg font-extrabold text-[#cabac0]"
        style={{
          fontFamily: "'Cinzel', serif",
          letterSpacing: "1px"
        }}
      >
        {item.name}
      </h3>
    </motion.div>
  );
};

const Gifts = () => {
  return (
    <section className="w-full bg-light py-10 sm:py-14 md:py-16 px-4 text-center">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-primary"
        >
          Gift Ideas for Rakhi 🎁
        </motion.h2>

        <div className="
      mt-8
      grid grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      gap-4 sm:gap-6
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