import { motion } from "framer-motion";

const steps = [
  "Prepare thali with diya and sweets",
  "Apply tilak on brother’s forehead",
  "Tie Rakhi on wrist",
  "Brother gives gift",
  "Celebrate with family & sweets"
];

const Celebration = () => {
  return (
    <section className="p-10 bg-white text-center">

      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-[#5E0006]"
      >
        How Rakhi is Celebrated
      </motion.h2>

      <div className="mt-8 grid gap-6 max-w-3xl mx-auto">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-4 bg-pink-100 rounded-xl shadow"
          >
            {index + 1}. {step}
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Celebration;