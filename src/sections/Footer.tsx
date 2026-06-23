import { siteConfig } from "../config/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-base-bg text-white pt-24 pb-12 px-6 border-t border-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4 text-left">
          <h3 className="text-2xl font-black uppercase tracking-[0.2em] text-brand mb-4">
            {siteConfig.clientName.split(" ")[0]}
            <span className="text-white font-light">
              {" "}
              {siteConfig.clientName.split(" ")[1] || ""}
            </span>
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
            Elevando o seu estilo diariamente com o que há de melhor em cortes
            clássicos e modernos. Sente-se, relaxe e viva a experiência.
          </p>
          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand transition-colors text-sm font-medium tracking-wider uppercase"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @cortefino.barbearia
          </a>
        </div>

        <div className="md:col-span-4 text-left">
          <h4 className="text-sm font-black uppercase tracking-widest text-zinc-100 mb-4">
            Localização
          </h4>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {siteConfig.contact.address}
          </p>
          <a
            href={siteConfig.contact.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand text-xs font-black uppercase tracking-widest inline-flex items-center gap-1 group hover:text-amber-400 transition-colors"
          >
            Como Chegar
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="md:col-span-4 text-left">
          <div className="bg-base-card/40 border border-white/[0.04] p-6 rounded-2xl backdrop-blur-md shadow-lg">
            <h4 className="text-sm font-black uppercase tracking-widest text-zinc-100 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              Horários
            </h4>
            <div className="space-y-3">
              {siteConfig.contact.schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm border-b border-white/[0.03] pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-zinc-400 font-light">{item.day}</span>
                  <span
                    className={`font-medium ${item.hours === "Fechado" ? "text-zinc-600" : "text-zinc-200"}`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>
          © {currentYear} {siteConfig.clientName}. All Rights Reserved.
        </p>
        <p className="font-light">
          <a href="https://portfoliorayckacastro.netlify.app/" target="_blank" rel="noopener noreferrer">
            Desenvolvido por <span className="text-purple-500">DevLab</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
