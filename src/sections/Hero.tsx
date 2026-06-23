import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { siteConfig, getWhatsAppLink } from "../config/siteConfig";
import { customExperience } from "../services/customExperience";
import Button from "../components/Button";
import razorImg from "../assets/navalha.png";

export default function Hero() {
  const targetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const defaultMessage = `Olá! Gostaria de agendar um horário na ${siteConfig.clientName}.`;

  const { greeting, subtext } = customExperience.getWelcomeMessage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <header
      id="inicio"
      ref={targetRef}
      className="relative h-screen flex items-center justify-between px-6 md:px-16 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${siteConfig.hero.bgImage}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-base-bg via-base-bg/85 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-base-bg via-transparent to-transparent z-0"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-xl text-left"
      >
        <motion.span
          variants={itemVariants}
          className="text-brand font-black uppercase tracking-[0.2em] text-xs mb-3 block"
        >
          Tradição & Estilo
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 leading-tight select-none"
        >
          {greeting}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand to-amber-600 block mt-1">
            {siteConfig.hero.title}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-zinc-400 mb-8 leading-relaxed font-light max-w-md"
        >
          {subtext}
        </motion.p>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            href={getWhatsAppLink(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-[0_4px_15px_rgba(245,158,11,0.15)] hover:shadow-[0_4px_20px_rgba(245,158,11,0.25)] transition-all duration-300 py-3 px-6 text-sm"
          >
            {siteConfig.hero.ctaText}
          </Button>
        </motion.div>
      </motion.div>

      <div className="hidden lg:flex items-center justify-center relative z-10 w-[700px] h-[500px] mr-4">
        <motion.img
          src={razorImg}
          alt="Navalha"
          className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(245,158,11,0.15)]"
          style={{
            originX: 0.50,
            originY: 0.45,
            rotate,
            y,
            opacity,
          }}
        />
      </div>
    </header>
  );
}
