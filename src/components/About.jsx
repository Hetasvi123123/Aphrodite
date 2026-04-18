import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="p-10 bg-white text-center">

      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#5E0006]"
      >
        What is Raksha Bandhan?
      </motion.h2>

      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-4 max-w-2xl mx-auto text-gray-700"
      >
        Raksha Bandhan is a traditional Indian festival that celebrates the bond 
        between brothers and sisters. On this day, a sister ties a sacred thread 
        called Rakhi on her brother’s wrist, symbolizing love, care, and protection.
      </motion.p>

    </section>
  );
};

export default About;