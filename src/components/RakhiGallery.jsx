import { motion } from "framer-motion";
import { useState } from "react";

// 👇 Add name + price also
const rakhiImages = Array.from({ length: 10 }, (_, i) => ({
  img: "/assets/rakhi.jpg",
  name: `Designer Rakhi ${i + 1}`,
  price: `₹${199 + i * 20}`
}));

const RakhiGallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="p-10 bg-white text-center">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-[#5E0006]"
      >
        Beautiful Rakhi Collection 🎀
      </motion.h2>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {rakhiImages.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-secondary p-3 rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelected(item)} 
          >
            <img
              src={item.img}
              alt={`rakhi-${index}`}
              className="w-full h-32 object-contain"
            />
          </motion.div>
        ))}

      </div>

      {/* 🔥 PRODUCT MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-[90%] p-6 relative"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-6 items-center">

              {/* Left → Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-full h-80 object-contain"
                />
              </div>

              {/* Right → Details */}
              <div className="w-full md:w-1/2 text-left">

                <h3 className="text-2xl font-bold text-[#5E0006]">
                  {selected.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  Beautiful handcrafted rakhi perfect for celebrating the bond of love.
                </p>

                <p className="mt-4 text-xl font-semibold text-[#AE2448]">
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