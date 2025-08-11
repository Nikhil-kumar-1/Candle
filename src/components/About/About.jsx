import { motion } from "framer-motion";
import { FiAward, FiUsers, FiHeart, FiCheck } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stats = [
    { icon: <FiAward size={32} />, value: "100+", label: "Awards Won" },
    { icon: <FaLeaf size={32} />, value: "Eco-Friendly", label: "Materials" },
    { icon: <FiUsers size={32} />, value: "50k+", label: "Happy Customers" },
    { icon: <FiHeart size={32} />, value: "5-Star", label: "Reviews" },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf1] font-poppins overflow-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
      `}</style>

      {/* Hero Section */}
      <section className="relative h-100 flex items-center justify-center bg-[#152336] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592155296151-947a1b18843c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhbmdlciUyMGNhbmRsZSUyMGJsYWNrfGVufDB8fDB8fHww')] bg-cover bg-center opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#f1ead8] mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-xl text-[#f1ead8]/90 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting moments of serenity through the art of fragrance
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto"></div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            className="w-8 h-8 text-[#f1ead8]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Why Ravangi Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1ead8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={slideUp}
              className="text-3xl md:text-4xl font-bold text-[#152336] mb-4"
            >
              Why <span className="text-[#f4aa2d]">Ravangi</span>?
            </motion.h2>
            <motion.div
              variants={slideUp}
              className="w-24 h-1 bg-[#f4aa2d] mx-auto mb-8"
            ></motion.div>
            <motion.p
              variants={slideUp}
              className="text-xl text-[#152336]/90 max-w-12xl mx-auto"
            >
              Ravangi candles are crafted using high-quality natural waxes like soy, soy-coconut, and beeswax, combined with premium fragrance oils and 100% cotton wicks to ensure a clean, long-lasting burn. Each candle is handcrafted with care for a personal touch and made from safe, non-toxic ingredients. They feature stylish designs that complement any home decor and offer a wide variety of scents suited for different moods and seasons. Committed to eco-friendliness, Ravangi uses cruelty-free, recyclable materials. They also provide customizable options and gift sets for special occasions, along with refill services for glass containers. Additionally, white labeling services are available for businesses wanting their own candle line.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Unparalleled Quality",
                description:
                  "We source only the finest natural ingredients and handcraft each candle with meticulous attention to detail.",
                icon: "✨",
              },
              {
                title: "Signature Scents",
                description:
                  "Our perfumers create unique, complex fragrances you won't find anywhere else, designed to evoke emotion and memory.",
                icon: "👃",
              },
              {
                title: "Conscious Craft",
                description:
                  "From sustainable sourcing to eco-friendly packaging, we're committed to minimizing our environmental footprint.",
                icon: "🌍",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#152336] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#152336]/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={slideUp} className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544439651-82a50b48f9cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRhbmdlciUyMGNhbmRsZSUyMGJsYWNrfGVufDB8fDB8fHww"
                  alt="Candle making process"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#152336] rounded-full opacity-20 z-0"></div>
            </motion.div>

            <motion.div variants={slideUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#152336] mb-6">
                The <span className="text-[#f4aa2d]">Ravangi</span> Story
              </h2>
              <p className="text-lg text-[#152336]/90 mb-6">
                Founded in 2015 by Priya Sharma, Ravangi began as a small
                passion project in a Mumbai apartment. Priya, a self-taught
                perfumer, started blending essential oils to create candles that
                reminded her of childhood memories - her grandmother's spice
                cupboard, monsoon rains on warm earth, and jasmine flowers at
                twilight.
              </p>
              <p className="text-lg text-[#152336]/90 mb-6">
                What began with hand-pouring candles for friends and family
                quickly grew into a beloved local brand. Today, while we've
                expanded our operations, each Ravangi candle is still
                handcrafted using the same careful techniques Priya developed in
                those early days.
              </p>
              <p className="text-lg text-[#152336]/90 mb-8">
                Our name "Ravangi" comes from the Hindi word for fragrance,
                reflecting our deep connection to Indian heritage while creating
                scents that resonate globally.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#2d526e] hover:bg-[#152336] text-white font-medium rounded-lg shadow-lg transition-colors duration-300"
              >
                Read Founder's Story
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[#152336] text-[#f1ead8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#f4aa2d]">Mission</span>
            </h2>
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-12xl mx-auto text-center"
          >
            <motion.p
              variants={slideUp}
              className="text-2xl md:text-3xl font-light italic mb-12"
            >
              "At Ravangi, our mission is to craft more than just candles—we
              create immersive, sensory experiences that brighten your space and
              your spirit. Through the art of candle-making, we blend color,
              scent, and craftsmanship to transform everyday moments into
              inspiring, peaceful, and creative ones. Each candle is made with
              intention, passion, and eco-conscious materials to ensure
              sustainability without compromising on quality. We use natural
              wax, high-quality fragrance oil and 100% cotton wick in our every
              candle . We are committed to delivering a satisfying experience
              for every customer, creating candles that not only enhance your
              home but also align with your values."
            </motion.p>

            <motion.div
              variants={slideUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
            >
              <div className="bg-[#2d526e]/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#f4aa2d] mb-3">
                  Purpose
                </h3>
                <p>
                  To create products that enhance wellbeing through thoughtful
                  scent experiences
                </p>
              </div>
              <div className="bg-[#2d526e]/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#f4aa2d] mb-3">
                  Promise
                </h3>
                <p>
                  To never compromise on quality, ethics, or the artistry of our
                  craft
                </p>
              </div>
              <div className="bg-[#2d526e]/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#f4aa2d] mb-3">
                  Vision
                </h3>
                <p>
                  To become the most trusted name in artisanal fragrance
                  worldwide
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#f1ead8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-[#f4aa2d] mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#152336] mb-2">
                  {stat.value}
                </h3>
                <p className="text-[#152336]/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Candle Safety */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#152336] mb-4">
              Candle <span className="text-[#f4aa2d]">Safety</span>
            </h2>
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto mb-8"></div>
            <p className="text-xl text-[#152336]/90 max-w-3xl mx-auto">
              Enjoy your Ravangi candles safely with these important guidelines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#152336] mb-6">
                Safety Tips
              </h3>
              <ul className="space-y-4">
                {[
                  "Always keep burning candles within sight",
                  "Never burn a candle on or near flammable materials",
                  "Keep out of reach of children and pets",
                  "Trim wick to 1/4 inch before each use",
                  "Allow candle to pool completely on first burn (2-3 hours)",
                  "Discontinue use when 1/2 inch of wax remains",
                  "Never move a burning candle",
                  "Burn in well-ventilated area away from drafts",
                ].map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-[#f4aa2d] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[#152336]/90">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f1ead8] p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-[#152336] mb-6">
                Our Safety Commitment
              </h3>
              <p className="text-[#152336]/90 mb-6">
                At Ravangi, safety is built into every product. Our candles
                feature:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Lead-free, braided cotton wicks for clean burning",
                  "Premium soy wax with no harmful additives",
                  "Heat-resistant glass containers tested for durability",
                  "Stable bases to prevent tipping",
                  "Clear safety instructions on all packaging",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-[#f4aa2d] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[#152336]/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#152336]/90">
                For complete safety information, download our{" "}
                <a href="#" className="text-[#2d526e] hover:underline">
                  Candle Care Guide
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1ead8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#152336] mb-4">
              Our Core <span className="text-[#f4aa2d]">Values</span>
            </h2>
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                description:
                  "We use 100% natural soy wax, lead-free cotton wicks, and recyclable packaging to minimize our environmental impact.",
                icon: "🌱",
              },
              {
                title: "Craftsmanship",
                description:
                  "Each candle is hand-poured with care by our skilled artisans who take pride in every detail.",
                icon: "✨",
              },
              {
                title: "Innovation",
                description:
                  "Our perfumers constantly experiment with unique fragrance combinations to create unforgettable scents.",
                icon: "🔮",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#152336] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#152336]/90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#152336] text-[#f1ead8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet The <span className="text-[#f4aa2d]">Team</span>
            </h2>
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & Master Perfumer",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&auto=format&fit=crop&w=634&q=80",
              },
              {
                name: "Arjun Patel",
                role: "Head of Production",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&auto=format&fit=crop&w=634&q=80",
              },
              {
                name: "Neha Gupta",
                role: "Creative Director",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&auto=format&fit=crop&w=634&q=80",
              },
              {
                name: "Rahul Joshi",
                role: "Sustainability Lead",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=634&q=80",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-[#f4aa2d]">{member.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#f4aa2d]/10 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#152336] mb-6">
            Ready to transform your space?
          </h2>
          <p className="text-xl text-[#152336]/90 mb-8 max-w-2xl mx-auto">
            Discover the Ravangi difference with our handcrafted, aromatic
            candles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#2d526e] hover:bg-[#152336] text-white font-medium rounded-lg shadow-lg transition-colors duration-300"
            >
              Shop Collection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#2d526e] text-[#2d526e] hover:bg-[#2d526e]/10 font-medium rounded-lg transition-colors duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
