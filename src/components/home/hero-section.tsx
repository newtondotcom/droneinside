"use client";
import { ChevronsDown } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import HandWrittenWord from "../kokonutui/hand-written-word";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HomePage");

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOnScreen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const chevronsVariants = {
    offscreen: {
      y: -100, // Start above the screen
      opacity: 0,
    },
    onscreen: {
      y: 0, // Move to the original position
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.5,
      },
    },
  };

  return (
    <section
      id="hero"
      className="h-screen w-full snap-start flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      <motion.div
        className="flex text-center max-w-4xl px-6 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary/80 space-y-8 text-shadow-sm">
          {t("sentence")}
          <HandWrittenWord word={t("inside")} />
        </h1>
      </motion.div>

      <motion.div
        initial="offscreen"
        animate={onScreen ? "onscreen" : "offscreen"}
        variants={chevronsVariants}
        className="w-full flex text-primary/80 justify-center"
        aria-hidden="true"
      >
        <ChevronsDown size={300} />
      </motion.div>
    </section>
  );
}
