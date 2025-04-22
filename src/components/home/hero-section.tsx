"use client";

import TypingAnimation from "@/components/animations/typing-animation";
import { ChevronsDown } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const typingTexts = [
    "Chez Droninside, nous faisons voler des drones en intérieur pour débloquer de nouvelles perspectives.",
  ];

  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    // Set onScreen to true after 12 seconds
    const timer = setTimeout(() => {
      setOnScreen(true);
    }, 12000);

    // Cleanup the timer on component unmount
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
      className="h-screen w-full snap-start flex flex-col justify-center overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      <TypingAnimation
        sentences={typingTexts}
        typingSpeed={70}
        delayBetweenSentences={50}
      />
      <motion.div
        initial="offscreen"
        animate={onScreen ? "onscreen" : "offscreen"}
        variants={chevronsVariants}
        className="w-full flex text-primary justify-center"
        aria-hidden="true"
      >
        <ChevronsDown size={300} />
      </motion.div>
    </section>
  );
}
