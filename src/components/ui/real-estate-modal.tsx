"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";

export function RealEstateModal() {
  const t = useTranslations("RealEstateModal");
  const tCommon = useTranslations("Common");

  const features = [
    {
      icon: "CameraIcon",
      title: t("re_feature_1_title"),
      description: t("re_feature_1_desc"),
    },
    {
      icon: "FloorplanIcon",
      title: t("re_feature_2_title"),
      description: t("re_feature_2_desc"),
    },
    {
      icon: "CubeIcon",
      title: t("re_feature_3_title"),
      description: t("re_feature_3_desc"),
    },
  ];

  const images = [
    {
      alt: "Vue intérieure",
      source: "/indoor.jpg",
    },
    {
      alt: "Vue extérieure",
      source: "/outdoor.jpg",
    },
    {
      alt: "Modèle 3D",
      source: "/3d-recontruction.jpg",
    },
    {
      alt: "Photogrammétrie",
      source: "/photogrammetry.jpg",
    },
  ];

  return (
    <div className="py-8 flex items-center justify-center">
      <Modal>
        <ModalTrigger>
          <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            🏠 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-sm font-semibold">
              {t("re_agent_cta")}
            </AnimatedGradientText>
            <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              {t("re_modal_title")}{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                {t("re_modal_highlight")}
              </span>
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          src={image.source || "/placeholder.svg"}
                          alt={image.alt}
                          width="500"
                          height="500"
                          className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{image.alt}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-col gap-y-6 max-w-lg mx-auto">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <FeatureIcon name={feature.icon} />
                  <div className="ml-4">
                    <h5 className="font-semibold text-neutral-800 dark:text-neutral-100">
                      {feature.title}
                    </h5>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <Button className="px-2 py-1" variant={"outline"}>
              {tCommon("cancel_button")}
            </Button>
            <Link href="/contact">
              <Button className="px-2 py-1">
                {tCommon("contact_us_button")}
              </Button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

function FeatureIcon({ name }: { name: string }) {
  switch (name) {
    case "CameraIcon":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-primary"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>
      );
    case "FloorplanIcon":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-primary"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
        </div>
      );
    case "CubeIcon":
      return (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-primary"
          >
            <path d="m21 16-4 4-4-4" />
            <path d="M17 20V4" />
            <path d="m3 8 4-4 4 4" />
            <path d="M7 4v16" />
          </svg>
        </div>
      );
    default:
      return null;
  }
}
