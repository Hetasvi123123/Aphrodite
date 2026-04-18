import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 w-full z-50 ${scrolled
                ? "bg-[#6E1A37]/60 backdrop-blur-md shadow-lg"
                : "bg-transparent"
                }`}
        >
            {/* Inner Container */}
            <div className="max-w-7xl  mx-auto flex items-center justify-between px-6 md:px-16 py-4">

                {/* Logo */}
                <h1 className="text-white font-bold text-xl md:text-2xl tracking-widest font-aphrodite">
                    Aphrodite
                </h1>

                {/* Button */}
                <button
                    onClick={() => {
                        document.getElementById("RakhiGallery")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    className="text-white text-sm tracking-wider uppercase border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                >
                    Rakhi
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;