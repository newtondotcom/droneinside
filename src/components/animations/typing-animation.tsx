"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface TypingAnimationProps {
  sentences: string[];
  typingSpeed?: number;
  delayBetweenSentences?: number;
}

export default function TypingAnimation({
  sentences,
  typingSpeed = 50,
  delayBetweenSentences = 1000,
}: TypingAnimationProps) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!sentences.length) return;

    let timeout: NodeJS.Timeout;
    const currentSentence = sentences[currentSentenceIndex];

    if (isTyping && !isPaused) {
      if (displayedText.length < currentSentence.length) {
        // Still typing the current sentence
        timeout = setTimeout(() => {
          setDisplayedText(
            currentSentence.substring(0, displayedText.length + 1),
          );
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting or moving to next sentence
        setIsTyping(false);
        timeout = setTimeout(() => {
          if (currentSentenceIndex < sentences.length - 1) {
            setIsDeleting(true);
          } else {
            // If it's the last sentence, keep it displayed
            setIsPaused(true);
          }
        }, delayBetweenSentences * 2);
      }
    } else if (isDeleting) {
      if (displayedText.length > 0) {
        // Deleting the current sentence
        timeout = setTimeout(() => {
          setDisplayedText(
            displayedText.substring(0, displayedText.length - 1),
          );
        }, typingSpeed / 2);
      } else {
        // Finished deleting, move to next sentence
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    sentences,
    currentSentenceIndex,
    displayedText,
    isTyping,
    isDeleting,
    isPaused,
    typingSpeed,
    delayBetweenSentences,
  ]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        className="text-center max-w-4xl px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
          {displayedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
            className="inline-block w-1 h-8 md:h-12 bg-primary ml-1 align-middle"
          />
        </h1>
      </motion.div>
    </div>
  );
}
