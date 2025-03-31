"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import translate from "@/lib/locales/function";
import { useEffect, useState } from "react";

export default function FAQ() {
  const [faqList, setFaqList] = useState([
    {
      question: "",
      answer: "",
    },
  ]);

  useEffect(() => {
    const questionsCount = 9;
    const faqItems = [];

    for (let i = 1; i <= questionsCount; i++) {
      const questionKey = `q${i}_question`;
      const answerKey = `q${i}_answer`;

      faqItems.push({
        question: translate(questionKey),
        answer: translate(answerKey),
      });
    }

    setFaqList(faqItems);
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-5">
      <div className="flex flex-col items-center">
        <h2 className="mt-5 text-5xl font-bold tracking-tight text-black">
          FAQ
        </h2>
        <p className="mt-3 text-xl text-neutral-500">
          {translate("faq_title")}
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-8 max-w-xl divide-y divide-neutral-200 text-black"
      >
        {faqList.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>
              <p className="mt-3 text-black">{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
