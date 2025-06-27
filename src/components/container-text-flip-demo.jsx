"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

export default function ContainerTextFlipDemo() {
  const words = ["сильнее", "выносливее", "здоровее", "успешнее"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-4xl text-center text-4xl leading-normal font-bold tracking-tight text-white md:text-6xl lg:text-7xl",
      )}
      layout
    >
      <div className="inline-block">
        Стань в 10 раз <ContainerTextFlip words={words} />
        <br />
        с Амритой!
      </div>
    </motion.h1>
  );
}

