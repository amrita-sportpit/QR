"use client";

import React from "react";
import { cn } from "@/utils/cn";

export function GlassCard({ 
  children, 
  className,
  variant = "default",
  ...props 
}) {
  const variants = {
    default: "bg-white/10 backdrop-blur-md border border-white/20",
    strong: "bg-white/20 backdrop-blur-lg border border-white/30",
    subtle: "bg-white/5 backdrop-blur-sm border border-white/10",
    dark: "bg-black/20 backdrop-blur-md border border-white/10",
  };

  return (
    <div
      className={cn(
        "rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
        "before:absolute before:inset-0 before:rounded-xl before:p-[1px]",
        "before:[background:linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.1))]",
        "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        "before:[mask-composite:xor]",
        "relative overflow-hidden",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function GlassSection({ 
  children, 
  className,
  backgroundImage,
  ...props 
}) {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
        className
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-indigo-900/80" />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}

