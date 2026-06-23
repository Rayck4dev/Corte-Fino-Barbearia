import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Preloader from "./components/Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#0c0c0e] text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{
          opacity: 0.35,
          scale: 0.98,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: isLoading ? 0.35 : 1,
          scale: isLoading ? 0.98 : 1,
          filter: isLoading ? "blur(8px)" : "blur(0px)",
        }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
          delay: isLoading ? 0 : 0.05,
        }}
      >
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Footer />
      </motion.div>
    </div>
  );
}
