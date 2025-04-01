"use client";

import TypingAnimation from "@/components/animations/typing-animation";

export default function HeroSection() {
  const typingTexts = [
    "Chez Droninside, nous faisons voler des drones en intérieur.",
    "Mais pourquoi faire nous diriez vous ?",
    "Pour débloquer des nouvelles perspectives.",
  ];

  return (
    <section
      id="hero"
      className="h-screen w-full snap-start flex flex-col justify-center overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      <TypingAnimation
        sentences={typingTexts}
        typingSpeed={80}
        delayBetweenSentences={50}
      />
    </section>
  );
}
