"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  const [isFinished, setIsFinished] = useState(false); // New state to track completion

  useEffect(() => {
    if (!sentences.length || isFinished) return; // Stop if finished

    let timeout: NodeJS.Timeout;
    const currentSentence = sentences[currentSentenceIndex];

    if (isTyping) {
      if (displayedText.length < currentSentence.length) {
        // Typing the current sentence
        timeout = setTimeout(() => {
          setDisplayedText(
            currentSentence.substring(0, displayedText.length + 1),
          );
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting (unless it's the last sentence)
        timeout = setTimeout(() => {
          if (currentSentenceIndex < sentences.length - 1) {
            setIsTyping(false);
            setIsDeleting(true);
          } else {
            setIsFinished(true); // Freeze on the last sentence
          }
        }, delayBetweenSentences);
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
        setCurrentSentenceIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isTyping,
    isDeleting,
    currentSentenceIndex,
    sentences,
    typingSpeed,
    delayBetweenSentences,
    isFinished,
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
          {!isFinished && ( // Only show blinking cursor if not finished
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-8 md:h-12 bg-primary ml-1 align-middle"
            />
          )}
        </h1>
      </motion.div>
    </div>
  );
}
