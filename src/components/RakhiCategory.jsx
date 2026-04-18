import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const categories = [
    {
        title: "Children Rakhi",
        img: "/assets/rakhi.jpg"
    },
    {
        title: "Brother Rakhi",
        img: "/assets/rakhi.jpg"
    },
    {
        title: "Bhabhi Rakhi",
        img: "/assets/rakhi.jpg"
    }
];

const RevealCard = ({ title, img, reverse }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
    );

    return (
        <motion.div
            ref={ref}
            style={{ clipPath }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`
        flex flex-col md:flex-row 
        bg-[#6E1A37] 
        p-6 sm:p-8 md:p-10
        items-center gap-6 sm:gap-8
        rounded-xl overflow-hidden
        ${reverse ? "md:flex-row-reverse" : ""}
      `}
        >
            {/* Image */}
            <div className="w-full md:w-1/2 bg-secondary p-4 sm:p-6 rounded-2xl shadow-lg">
                <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className="w-full h-40 sm:h-52 md:h-64 object-contain"
                />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h3
                    className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#72BAA9]"
                    style={{
                        fontFamily: "'Cinzel', serif",
                        letterSpacing: "2px"
                    }}
                >
                    {title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#D5E7B5]">
                    Explore beautiful and unique Rakhi designs crafted specially for this category.
                </p>
            </div>
        </motion.div>
    );
};

const RakhiCategory = () => {
    return (
        <section className="w-full bg-light py-16 px-4">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-3xl font-bold text-primary text-center">
                    Rakhi Categories 🎀
                </h2>

                <div className="mt-16 space-y-16 ">

                    {categories.map((cat, i) => (
                        <RevealCard
                            key={i}
                            title={cat.title}
                            img={cat.img}
                            reverse={i % 2 !== 0} // 🔥 alternate left-right
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default RakhiCategory;