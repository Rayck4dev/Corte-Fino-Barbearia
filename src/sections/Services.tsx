import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, getWhatsAppLink } from "../config/siteConfig";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

interface ServiceType {
  name: string;
  description: string;
  image: string;
  details: string[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null,
  );
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="servicos"
      className="bg-base-bg text-white py-24 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="text-left mb-6 md:mb-0">
            <span className="text-brand font-bold uppercase tracking-widest text-xs mb-2 block">
              Cardápio Especial
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-zinc-100 mb-2">
              {siteConfig.services.title}
            </h2>
            <p className="text-zinc-400 max-w-md text-sm">
              {siteConfig.services.subtitle}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-white/10 bg-base-card hover:border-brand hover:text-brand flex items-center justify-center text-zinc-400 transition-all duration-300 active:scale-95"
              aria-label="Anterior"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-white/10 bg-base-card hover:border-brand hover:text-brand flex items-center justify-center text-zinc-400 transition-all duration-300 active:scale-95"
              aria-label="Próximo"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {siteConfig.services.list.map((service, index) => (
              <SwiperSlide key={index} className="h-full py-2">
                <ServiceCard
                  {...service}
                  onClick={() => setSelectedService(service)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="custom-swiper-pagination flex justify-center items-center gap-2 mt-8 h-4"></div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-base-card border border-white/[0.08] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="h-56 relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-card to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase text-brand tracking-wide mb-3">
                  {selectedService.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {selectedService.description}
                </p>
                <h4 className="text-zinc-300 font-bold text-xs uppercase tracking-wider mb-3">
                  O que está incluso:
                </h4>
                <ul className="space-y-2 mb-8">
                  {selectedService.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-zinc-400 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button
                  href={getWhatsAppLink(
                    `Olá! Gostaria de consultar a disponibilidade de horários para o serviço premium: *${selectedService.name}*.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-xs font-bold"
                >
                  Consultar Disponibilidade
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
