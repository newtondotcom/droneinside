"use client";
import Title from "@/components/layout/title";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQPage");
  const tCommon = useTranslations("Common");

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
        question: t(questionKey),
        answer: t(answerKey),
      });
    }

    setFaqList(faqItems);
  }, [t]);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-5 mt-20">
      <Title title={t("faq_title")} subtitle={t("faq_subtitle")} />
      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-8 max-w-xl divide-y divide-neutral-200"
      >
        {faqList.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>
              <p className="mt-3">{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mx-auto my-8 max-w-lg text-center text-base font-semibold text-neutral-700 dark:text-neutral-200">
        {t("contact_redirect")}{" "}
        <a href="/contact" className="text-primary underline">
          {tCommon("here_button")}
        </a>
      </div>
    </div>
  );
}
