export interface NavigationItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  name: string;
  image: string;
  details: string[];
  description: string;
}

export interface SiteConfig {
  clientName: string;
  phone: string;
  theme: {
    primaryClass: string;
    bgButtonClass: string;
    borderHoverClass: string;
  };
  navigation: NavigationItem[];
  hero: {
    title: string;
    subtitle: string;
    bgImage: string;
    ctaText: string;
  };
  services: {
    title: string;
    subtitle: string;
    list: ServiceItem[];
  };
  about: {
    title: string;
    subtitle: string;
    text1: string;
    text2: string;
    images: string[];
  };
  contact: {
    address: string;
    mapsLink: string;
    instagram: string;
    schedule: { day: string; hours: string }[];
  };
}

export const siteConfig: SiteConfig = {
  clientName: "Corte Fino",
  phone: "5511999999999",
  theme: {
    primaryClass: "text-brand",
    bgButtonClass: "bg-brand hover:bg-brand-light text-base-bg",
    borderHoverClass: "hover:border-brand",
  },
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
  ],
  hero: {
    title: "Corte Fino",
    subtitle:
      "Muito mais que um corte. Uma experiência de estilo, tradição e navalha afiada.",
    bgImage:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "Agendar Horário",
  },
  services: {
    title: "Experiências Disponíveis",
    subtitle: "Sente-se na cadeira e relaxe nas mãos dos nossos especialistas.",
    list: [
      {
        name: "Corte Degradê Premium",
        description:
          "Acabamento moderno, texturizado, lavado e finalizado com pomada.",
        image:
          "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600",
        details: [
          "Análise de visagismo capilar",
          "Lavagem com shampoo mentolado",
          "Finalização com pomada matte importada",
        ],
      },
      {
        name: "Barba de Respeito",
        description:
          "Alinhamento completo feito na navalha com protocolo de toalha quente.",
        image:
          "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600",
        details: [
          "Abertura de poros com vapor de ozônio",
          "Barbear clássico com creme hidratante",
          "Massagem facial pós-barba",
          "Óleo para hidratação dos fios",
        ],
      },
      {
        name: "Tratamento Capilar & Facial",
        description:
          "Combo de esfoliação da pele, remoção de cravos e cuidados com o couro cabeludo.",
        image:
          "https://images.unsplash.com/photo-1536520002442-39764a41e987?q=80&w=987&auto=format&fit=crop",
        details: [
          "Esfoliação de carvão ativado",
          "Máscara preta de remoção de impurezas",
          "Tônico capilar fortalecedor",
        ],
      },
      {
        name: "Corte Clássico Tesoura",
        description:
          "Para quem prefere um estilo tradicional, feito na tesoura com acabamento refinado.",
        image:
          "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600",
        details: [
          "Corte geométrico avançado",
          "Lavagem com massagem capilar estimulante",
          "Secagem técnica estruturada",
        ],
      },
      {
        name: "Coloração & Camuflagem",
        description:
          "Disfarce natural de fios brancos com produtos que protegem o cabelo.",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600",
        details: [
          "Pigmentação HD de alta durabilidade",
          "Tonalização de barba ou cabelo",
          "Hidratação pós-química inclusa",
        ],
      },
      {
        name: "Dia do Noivo / VIP",
        description:
          "Um protocolo de atendimento exclusivo para você se preparar para o seu grande dia.",
        image:
          "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=600",
        details: [
          "Corte, Barba e Sobrancelha completos",
          "Grooming e maquiagem corretiva masculina sutil",
          "Espaço reservado com open bar de café e whisky",
        ],
      },
    ],
  },
  about: {
    title: "Nossa História",
    subtitle: "Tradição, navalha afiada e cultura urbana.",
    text1:
      "Fundada com o propósito de resgatar a essência da barbearia clássica, a Corte Fino é mais do que um lugar para cortar o cabelo. É um espaço de convivência, onde o bom papo, o café quente e o cuidado milimétrico com o visual se encontram.",
    text2:
      "Nossos profissionais combinam técnicas tradicionais de visagismo com as maiores tendências internacionais. Cada detalhe da nossa estrutura foi pensado para oferecer uma experiência de relaxamento e alto padrão para o homem moderno.",
    images: [
      "https://images.unsplash.com/photo-1592647420148-bfcc177e2117?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=600",
    ],
  },
  contact: {
    address: "Av. Bytes, 1234 - Centro, House Code",
    mapsLink: "https://maps.google.com",
    instagram: "https://instagram.com",
    schedule: [
      { day: "Segunda a Sexta", hours: "08h às 18h" },
      { day: "Sábado", hours: "08h às 13h" },
      { day: "Domingo", hours: "Fechado" },
    ],
  },
};

export const getWhatsAppLink = (message: string): string => {
  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`;
};
