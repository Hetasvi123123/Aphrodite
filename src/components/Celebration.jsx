import { motion } from "framer-motion";

const steps = [
  {
    text: "Prepare thali with diya and sweets",
    icon: "🪔"
  },
  {
    text: "Apply tilak on brother’s forehead",
    icon: "🔴"
  },
  {
    text: "Tie Rakhi on wrist",
    icon: "🎀"
  },
  {
    text: "Brother gives gift",
    icon: "🎁"
  },
  {
    text: "Celebrate with family & sweets",
    icon: "🍬"
  }
];

const Celebration = () => {
  return (
    <section className="p-10 bg-[#FFF5F5] text-center">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-[#5E0006]"
      >
        How Rakhi is Celebrated 🎉
      </motion.h2>

      {/* Steps */}
      <div className="mt-12 max-w-4xl mx-auto space-y-6">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex items-center gap-4 p-5 rounded-xl shadow-md bg-white
              ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
            `}
          >
            {/* Icon */}
            <div className="text-3xl">
              {step.icon}
            </div>

            {/* Text */}
            <div className="text-left">
              <p className="text-sm text-gray-500">
                Step {index + 1}
              </p>
              <h3 className="text-lg font-semibold text-[#5E0006]">
                {step.text}
              </h3>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Celebration;