import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const nameParts = siteConfig.clientName.split(" ");

  const navVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto max-w-5xl mx-auto bg-base-bg/60 border border-white/[0.06] rounded-2xl backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.7)] overflow-hidden"
      >
        <div className="px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <a
                href="#inicio"
                className="flex items-center gap-3 group relative py-1.5 select-none"
              >
                <div className="w-[2px] h-4 bg-brand rounded-full hidden sm:block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-y-125 group-hover:bg-brand-light" />

                <h1 className="text-base md:text-lg font-black uppercase tracking-[0.22em] text-brand relative flex items-center">
                  {nameParts[0]}
                  <span className="text-zinc-300 font-light tracking-[0.18em] ml-2 transition-colors duration-300 group-hover:text-white">
                    {nameParts[1] || ""}
                  </span>
                </h1>

                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand/60 to-transparent transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-full opacity-0 group-hover:opacity-100" />
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              className="hidden md:flex space-x-8"
            >
              {siteConfig.navigation.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={navVariants}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -1 }}
                  className="text-zinc-400 hover:text-brand font-medium text-xs uppercase tracking-widest transition-colors duration-300 relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full rounded-full" />
                </motion.a>
              ))}
            </motion.div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-400 hover:text-white focus:outline-none p-2 transition-colors"
                aria-label="Menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-base-card/95 border-t border-white/[0.04] px-4 pt-2 pb-6 space-y-1 overflow-hidden"
            >
              {siteConfig.navigation.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-base-border/50 hover:text-brand rounded-xl transition-all duration-200"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
