import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-screen bg-[#6E1A37] flex items-center justify-center overflow-hidden">

            {/* Floating Rakhi */}

            <motion.img
                src="/assets/h1.png"
                className="absolute w-[90px] top-[8%] left-[10%] opacity-80"
                animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
                src="/assets/h2.png"
                className="absolute w-[120px] top-[65%] right-[92%] opacity-70"
                animate={{ y: [0, -30, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />


            <motion.img
                src="/assets/h1.png"
                className="absolute w-[50px] top-[38%] left-[60%] opacity-80"
                animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
                src="/assets/h2.png"
                className="absolute w-[200px] top-[15%] right-[12%] opacity-70"
                animate={{ y: [0, -30, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
                src="/assets/h3.png"
                className="absolute w-[100px] bottom-[12%] left-[12%] opacity-60"
                animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
                src="/assets/h4.png"
                className="absolute w-[110px] bottom-[15%] right-[15%] opacity-75"
                animate={{ y: [0, -35, 0], rotate: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
                src="/assets/h2.png"
                className="absolute w-[100px] top-[55%] right-[8%] opacity-50 blur-[1px]"
                animate={{ y: [0, -20, 0], rotate: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
                src="/assets/h3.png"
                className="absolute w-[60px] top-[65%] left-[8%] opacity-40 blur-[2px]"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* NEW 1 */}
            <motion.img
                src="/assets/h4.png"
                className="absolute w-[95px] top-[5%] left-[40%] opacity-70"
                animate={{ y: [0, -22, 0], rotate: [0, 7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* NEW 2 */}
            <motion.img
                src="/assets/h1.png"
                className="absolute w-[75px] top-[30%] left-[5%] opacity-60"
                animate={{ y: [0, -18, 0], rotate: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* NEW 3 */}
            <motion.img
                src="/assets/h2.png"
                className="absolute w-[100px] bottom-[5%] left-[35%] opacity-75"
                animate={{ y: [0, -28, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* NEW 4 */}
            <motion.img
                src="/assets/h3.png"
                className="absolute w-[65px] top-[45%] right-[5%] opacity-50 blur-[1px]"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* NEW 5 */}
            <motion.img
                src="/assets/h4.png"
                className="absolute w-[85px] bottom-[30%] left-[50%] opacity-65"
                animate={{ y: [0, -20, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* ✨ Main Text */}
            <motion.h1
                className="text-white/70 text-[120px] md:text-[250px] lg:text-[290px] leading-none text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    fontFamily: "'Rouge Script', cursive",
                    textShadow: "0 0 10px #FFD700, 0 0 20px #6E1A37"
                }}
            >
                {"Aphrodite".split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h1>

        </section>
    );
};

export default Hero;