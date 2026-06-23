import { motion } from "framer-motion";

interface ServiceCardProps {
  name: string;
  description: string;
  image: string;
  onClick: () => void;
}

export default function ServiceCard({
  name,
  description,
  image,
  onClick,
}: ServiceCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6 }}
      className="bg-base-card rounded-2xl border border-base-border overflow-hidden cursor-pointer group shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-all duration-300 h-full flex flex-col justify-between"
    >
      <div className="flex flex-col">
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-base-card via-transparent to-transparent z-10" />
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out grayscale group-hover:grayscale-0"
          />
        </div>

        <div className="p-6 pb-2">
          <h3 className="text-xl font-bold mb-2 text-zinc-100 group-hover:text-brand transition-colors line-clamp-1">
            {name}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4 min-h-[3rem] line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <span className="text-brand text-xs font-black uppercase tracking-widest inline-flex items-center gap-1">
          Ver detalhes
          <svg
            className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </motion.div>
  );
}
