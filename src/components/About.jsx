import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About"
      className="px-4 sm:px-6 md:px-10 py-8 sm:py-10 bg-white text-center scroll-mt-24"
    >

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5E0006]"
      >
        What is Raksha Bandhan?
      </motion.h2>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-4 max-w-2xl mx-auto text-gray-700 text-sm sm:text-base"
      >
        Raksha Bandhan is a traditional Indian festival that celebrates the bond
        between brothers and sisters...
      </motion.p>

    </section>
  );
};

export default About;