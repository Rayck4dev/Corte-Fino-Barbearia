import { motion, type Variants } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export default function About() {
  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const galleryVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  return (
    <section
      id="sobre"
      className="bg-base-bg text-white py-28 px-6 relative overflow-hidden border-t border-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
          className="md:col-span-5 text-left"
        >
          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-2 block">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-zinc-100 mb-6 leading-tight">
            {siteConfig.about.title}
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed mb-4 font-light">
            {siteConfig.about.text1}
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed font-light border-l-2 border-brand pl-4 italic">
            {siteConfig.about.text2}
          </p>
        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={galleryVariants}
          className="md:col-span-7 grid grid-cols-12 gap-4 h-[500px] md:h-[550px]"
        >
  
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="col-span-6 h-full rounded-2xl overflow-hidden border border-white/[0.05] shadow-lg group relative"
          >
            <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors duration-300 z-10 mix-blend-overlay" />
            <img
              src={siteConfig.about.images[1]} 
              alt="Produtos Premium"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </motion.div>

          <div className="col-span-6 grid grid-rows-12 gap-4 h-full">

            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="row-span-7 rounded-2xl overflow-hidden border border-white/[0.05] shadow-lg group relative"
            >
              <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors duration-300 z-10 mix-blend-overlay" />
              <img
                src={siteConfig.about.images[0]}
                alt="Nossa Cadeira"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, y: 2 }}
              className="row-span-5 rounded-2xl overflow-hidden border border-white/[0.05] shadow-lg group relative"
            >
              <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors duration-300 z-10 mix-blend-overlay" />
              <img
                src={siteConfig.about.images[2]} 
                alt="Detalhes do Ambiente"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
