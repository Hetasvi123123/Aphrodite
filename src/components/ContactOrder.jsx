import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook, FaGoogle } from "react-icons/fa";

const contacts = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/aphrodite.in3?utm_source=qr&igsh=MWgyeHQxaTU5aGhrOA==",
    color: "from-pink-500 to-purple-500"
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/share/1Cat7LdGZ3/",
    color: "from-blue-500 to-indigo-500"
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@Aphrodite.in3",
    color: "from-red-500 to-red-700"
  },
  {
    name: "Google",
    icon: <FaGoogle />,
    link: "https://g.co/kgs/vk3TQAh",
    color: "from-yellow-400 to-orange-500"
  }
];

const ContactOrder = () => {
  return (
    <section className="w-full bg-[#FFF5F5] py-16 px-4">

      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-[#5E0006]"
        >
          Order Your Rakhi 🎀
        </motion.h2>

        <p className="mt-4 text-gray-600">
          Connect with us on your favorite platform and place your order بسهولة ✨
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {contacts.map((item, index) => (
            <a href={item.link} target="_blank" key={index}>

              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl shadow-lg bg-white overflow-hidden group cursor-pointer"
              >
                {/* Gradient Hover Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br ${item.color}`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">

                  {/* Icon */}
                  <div className="text-3xl mb-3 text-[#6E1A37] group-hover:text-white transition">
                    {item.icon}
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-[#5E0006] group-hover:text-white">
                    {item.name}
                  </h3>

                  {/* CTA */}
                  <p className="text-sm mt-2 text-gray-500 group-hover:text-white/80">
                    Open Now →
                  </p>

                </div>

              </motion.div>

            </a>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ContactOrder;