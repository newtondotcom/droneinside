# Prompt

> Make on commit per point

## Create a new section mentionning that we are not only doing inside fly but also outdoor for aerial shot. Parles de la possibilité de construire des modèles 3D :
- de l'extérieur à l'aide de la photogrammétrie (applicable pour tous les services sauf les evenemetns et les appartements)
- l'intérieur pour les logements à l'aide de la technologie LIDAR pour l'afficher sur un site web, ou faire des mesures, ou prévoir la disposition des meubles.

## Dans la landing page, Partie dédiée pour les biens immobilliers : (trouvez un moyen de faire un modal quand l'utilisateur clique sur un bouton voyant disant "vous etes agent immbollier et souhaitez mettre en valeur un bien ?")
Démarquez vous :
- perspectives uniques
- plan au sol > calculs automatique
- modèle 3d si maison

Use this trigger ;
```tsx
    <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
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
      🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
      <AnimatedGradientText className="text-sm font-medium">
        Vous êtes agent immobillier et souhaitez mettre en valeur un bien ?
      </AnimatedGradientText>
      <ChevronRight
        className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
      />
    </div>
```

Use this modal example :
```tsx
"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "motion/react";

export function AnimatedModalDemo() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book your flight
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Book your trip to{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Bali
              </span>{" "}
              now! ✈️
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
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  12 hotels
                </span>
              </div>
              <div className="flex items-center justify-center">
                <VacationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  69 visiting spots
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Good food everyday
                </span>
              </div>
              <div className="flex items-center justify-center">
                <MicIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Open Mic
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ParachuteIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
```

## Use motion to animate sections contents on appearing, be creative with shaking, translations

## In `src/app/service/[name]/page.tsx`, show a little description of each possible service, with a list of related video and a placeholder if no video exist for this

## Feel free to improve my translation system, by changing the structure of the files containing the translations for example, organizing them per page

## I see two scroll bars on my landing page, the second one is caused by the footer, making a heigh bigger than the screen's one. Fix that.

## Tweak a bit my catch phrases to make them attractives for customers.

## Improve SEO and accessibility

## Make sure dark/white theme are operationnal

## Create a contact page using server action located in `/src/lib/actions/discord.ts`, using zod

## Translate the `not-found.tsx` page

## Use simpleicons.org for footer icons, add link for BluSky also

## Créer la page type d'une annonce immobilière
- Photos
- Plan 2d interactif avec des chiffres
- Modèle 3D interactif de l'extérieur
- Description
