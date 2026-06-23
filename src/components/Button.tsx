import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
  className?: string;
}

export default function Button({
  children,
  href,
  target = "_self",
  rel,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`bg-brand hover:bg-brand-light text-base-bg font-black px-8 py-4 rounded-lg uppercase tracking-wider text-sm transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand/10 inline-block text-center ${className}`}
    >
      {children}
    </a>
  );
}
