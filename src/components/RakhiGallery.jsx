import { motion } from "framer-motion";
import { useState } from "react";

// ✅ Data
const rakhiImages = Array.from({ length: 10 }, (_, i) => ({
  img: "/assets/rakhi.jpg",
  name: `Designer Rakhi ${i + 1}`,
  price: `₹${199 + i * 20}`,
}));

const RakhiGallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="RakhiGallery" className="p-10 bg-white text-center">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-[#5E0006]"
      >
        Beautiful Rakhi Collection 🎀
      </motion.h2>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {rakhiImages.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group bg-[#FFF5F5] p-4 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            onClick={() => setSelected(item)}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-32 object-contain transition group-hover:scale-105"
            />

            {/* Name */}
            <h3 className="mt-3 text-sm font-semibold text-[#5E0006]">
              {item.name}
            </h3>

            {/* Optional subtle price (can remove if not needed) */}
            <p className="text-[#AE2448] text-sm mt-1 opacity-70">
              {item.price}
            </p>
          </motion.div>
        ))}

      </div>

      {/* 🌟 MODAL (Showcase Style) */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative"
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-center">

              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-full h-80 object-contain"
                />
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 text-left">

                <h3 className="text-2xl font-bold text-[#5E0006]">
                  {selected.name}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  A beautifully handcrafted rakhi designed to celebrate love,
                  tradition, and bonding. Elegant and festive look for special occasions.
                </p>

                {/* Optional Price */}
                <p className="mt-4 text-lg text-[#AE2448] font-medium">
                  {selected.price}
                </p>

              </div>

            </div>

          </motion.div>

        </div>
      )}

    </section>
  );
};

export default RakhiGallery;