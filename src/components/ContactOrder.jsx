import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook, FaGoogle } from "react-icons/fa";
const ContactOrder = () => {
  return (
    <section className="w-full bg-light py-16 px-4">

      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-primary"
        >
          Order Your Rakhi 🎀
        </motion.h2>

        <p className="mt-4 text-gray-600">
          Connect with us on social media to place your order easily.
        </p>

        {/* 🔥 Cards */}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/aphrodite.in3?utm_source=qr&igsh=MWgyeHQxaTU5aGhrOA=="
            target="_blank"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex justify-center text-center text-[30px]">

                <FaInstagram className="text-pink-500 hover:scale-125 transition" />
              </div>


              <h3 className="mt-4 text-xl font-bold text-[#6E1A37]">
                Instagram
              </h3>



            </motion.div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1Cat7LdGZ3/"
            target="_blank"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex justify-center text-center text-[30px]">

                <FaFacebook className="text-blue-600 hover:scale-125 transition" />
              </div>


              <h3 className="mt-4 text-xl font-bold text-[#6E1A37]">
                Facebook
              </h3>
            </motion.div>
          </a>


          {/* youtube */}
          <a
            href="https://www.youtube.com/@Aphrodite.in3"
            target="_blank"
          >

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex justify-center text-center text-[30px]">
                <FaYoutube className="text-red-500 hover:scale-125 transition" />

              </div>

              <h3 className="mt-4 text-xl font-bold text-[#6E1A37]">
                YouTube
              </h3>
            </motion.div>
          </a>

          {/* google */}
          <a
            href="https://g.co/kgs/vk3TQAh"
            target="_blank"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex justify-center text-center text-[30px]">

                <FaGoogle className="text-yellow-500 hover:scale-125 transition" />
              </div>


              <h3 className="mt-4 text-xl font-bold text-[#6E1A37]">
                Google
              </h3>

            </motion.div>
          </a>


        </div>

      </div>

    </section >
  );
};

export default ContactOrder;