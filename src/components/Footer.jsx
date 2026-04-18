import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#6E1A37] text-white py-6 text-center">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Made with ❤️ for Raksha Bandhan
      </motion.p>

      <p className="mt-2 text-sm">
        © 2026 Rakhi Website | All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;