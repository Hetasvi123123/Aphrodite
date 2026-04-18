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
      className="p-10 bg-[#6E1A37] rounded-xl shadow cursor-pointer overflow-hidden flex items-center gap-6"
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.name}
        className="w-16 h-16 object-contain"
      />

      {/* Text */}
      <h3 className="text-lg font-extrabold text-[#cabac0]"
        style={{
          fontFamily: "'Cinzel', serif",
          letterSpacing: "2px"
        }}>
        {item.name}
      </h3>
    </motion.div>
  );
};

const Gifts = () => {
  return (
    <section className="w-full bg-light py-16 px-4 text-center mb-29">

      <div className="max-w-4xl mx-auto ">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-primary"
        >
          Gift Ideas for Rakhi 🎁
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 gap-6">

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