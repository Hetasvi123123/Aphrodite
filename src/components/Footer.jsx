import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#6E1A37] text-white py-10 px-4">

      <div className="max-w-6xl mx-auto text-center">

        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-bold tracking-wide"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Aphrodite 🎀
        </motion.h2>

        {/* Tagline */}
        <p className="mt-3 text-sm text-white/80">
          Celebrating the bond of love & tradition ❤️
        </p>

        {/* Social Icons */}
        <div className="mt-5 flex justify-center gap-6 text-xl">

          <a
            href="https://www.instagram.com/aphrodite.in3"
            target="_blank"
          >
            <FaInstagram className="hover:scale-125 transition cursor-pointer" />
          </a>

          <a
            href="https://www.facebook.com/share/1Cat7LdGZ3/"
            target="_blank"
          >
            <FaFacebook className="hover:scale-125 transition cursor-pointer" />
          </a>

          <a
            href="https://www.youtube.com/@Aphrodite.in3"
            target="_blank"
          >
            <FaYoutube className="hover:scale-125 transition cursor-pointer" />
          </a>

        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-white/20"></div>

        {/* Bottom */}
        <div className="mt-4 text-sm text-white/70">
          <p>Made with ❤️ for Raksha Bandhan</p>
          <p className="mt-1">
            © 2026 Aphrodite | All Rights Reserved
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;