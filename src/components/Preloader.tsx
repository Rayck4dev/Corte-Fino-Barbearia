import { motion } from "framer-motion";
import { useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-xl flex items-center justify-center select-none"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{
          scale: 0.9,
          opacity: 0,
          transition: { duration: 0.3 },
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative flex flex-col items-center justify-center p-8 rounded-full shadow-[0_0_60px_40px_rgba(0,0,0,0.4)] bg-black/20"
      >
        <div className="relative w-10 h-32 rounded-full overflow-hidden border-2 border-zinc-700/60 bg-zinc-950 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 left-0 right-0 h-2.5 z-50 bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-600 border-b border-black/40" />
          <div className="absolute bottom-0 left-0 right-0 h-2.5 z-50 bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-600 border-t border-black/40" />

          <div className="absolute inset-x-0 top-2.5 bottom-2.5 overflow-hidden bg-zinc-900 flex flex-col">
            <motion.div
              animate={{
                y: ["0%", "-50%"],
              }}
              transition={{
                duration: 2.2,
                ease: "linear",
                repeat: Infinity,
              }}
              className="w-[200%] h-[200%] absolute left-[-50%] top-0 flex flex-col"
              style={{
                transformOrigin: "center top",
                willChange: "transform",
              }}
            >
              <div
                className="w-full h-1/2"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      -45deg,
                      #dc2626 0px,
                      #dc2626 15px,
                      #ffffff 15px,
                      #ffffff 30px,
                      #2563eb 30px,
                      #2563eb 45px,
                      #ffffff 45px,
                      #ffffff 60px
                    )
                  `,
                }}
              />
              <div
                className="w-full h-1/2"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      -45deg,
                      #dc2626 0px,
                      #dc2626 15px,
                      #ffffff 15px,
                      #ffffff 30px,
                      #2563eb 30px,
                      #2563eb 45px,
                      #ffffff 45px,
                      #ffffff 60px
                    )
                  `,
                }}
              />
            </motion.div>
          </div>

          <div className="absolute inset-x-0 top-2.5 bottom-2.5 z-30 pointer-events-none bg-gradient-to-r from-black/75 via-transparent to-black/75" />

          <div className="absolute top-2.5 bottom-2.5 left-[12%] w-[18%] z-40 pointer-events-none bg-gradient-to-r from-white/20 via-white/10 to-transparent blur-[1px]" />
        </div>

        <div className="absolute top-8 w-10 h-32 rounded-full pointer-events-none z-40 bg-gradient-to-r from-white/15 via-transparent to-transparent" />

        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-5 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400 pl-[0.4em] "
        ></motion.p>
      </motion.div>
    </motion.div>
  );
}
