import { motion } from "framer-motion";

const History = () => {
  return (
    <section className="p-10 bg-pink-50 text-center">

      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-[#5E0006]"
      >
        History of Rakhi
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 max-w-3xl mx-auto text-gray-700 space-y-4"
      >
        <p>
          Raksha Bandhan has deep roots in Indian history and mythology.
        </p>

        <p>
          One famous story is of Draupadi and Lord Krishna, where Draupadi 
          tied a piece of cloth on Krishna’s wrist, and he promised to protect her.
        </p>

        <p>
          Another story tells how Rani Karnavati sent a Rakhi to Emperor Humayun, 
          seeking protection, and he honored the bond.
        </p>
      </motion.div>

    </section>
  );
};

export default History;