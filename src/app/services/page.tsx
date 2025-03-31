"use client";
import Title from "@/components/layout/title";
import translate from "@/lib/locales/function";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Service {
  key: string;
  title: string;
  description: string;
  price: number;
  duration: number | string;
  img: string;
}

const servicesData = [
  {
    key: "residential",
    en: {
      title: "Residential",
      description:
        "Take advantage of a competitive edge to sell your residential listings faster!",
    },
    fr: {
      title: "Lieux résidentiels",
      description:
        "Profitez d'un avantage concurrentiel pour vendre vos annonces résidentielles plus rapidement !",
    },
    price: 190,
    duration: 60,
    img: "/res.avif",
  },
  {
    key: "local-business",
    en: {
      title: "Local Business",
      description: "Highlight your business with a video for social media!",
    },
    fr: {
      title: "Entreprises Locales",
      description:
        "Mettez en valeur votre commerce avec une vidéo à destination des réseaux sociaux !",
    },
    price: 190,
    duration: 60,
    img: "/local-business.jpeg",
  },
  {
    key: "event",
    en: {
      title: "Events",
      description: "Let us cover your event from a unique perspective!",
    },
    fr: {
      title: "Evenementiel",
      description:
        "Laissez nous couvrir votre évènement sous un angle inédit !",
    },
    price: 500,
    duration: "∞",
    img: "/event.jpeg",
  },
  {
    key: "office",
    en: {
      title: "Office",
      description: "Promote your workspaces / coworking with a custom video!",
    },
    fr: {
      title: "Bureaux",
      description:
        "Faites la promotion de vos espaces de travail / coworking  avec une vidéo sur mesure !",
    },
    price: 390,
    duration: 90,
    img: "/office.webp",
  },
  {
    key: "hostel",
    en: {
      title: "Hostel",
      description: "Showcase your hotel complex with an immersive video!",
    },
    fr: {
      title: "Hôtels et hébergements locatifs",
      description:
        "Faites découvrir votre complexe hôtellier à travers une vidéo immersive !",
    },
    price: 390,
    duration: 90,
    img: "/hotel.jpeg",
  },
  {
    key: "construction",
    en: {
      title: "Construction",
      description:
        "Capture and share the progress of your construction projects like never before!",
    },
    fr: {
      title: "Site de constructions",
      description:
        "Capturez et partagez l'avancement de vos projets de construction comme jamais auparavant !",
    },
    price: 290,
    duration: 60,
    img: "/construction.jpeg",
  },
];

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    let lang = navigator.language.split("-")[0] as "en" | "fr";
    if (lang !== "fr" && lang !== "en") lang = "en";

    setServices(
      servicesData.map((service) => ({
        title: service[lang].title,
        description: service[lang].description,
        price: service.price,
        duration: service.duration,
        img: service.img,
        key: service.key,
      })),
    );
  }, []);

  return (
    <div className="flex flex-col">
      <Title
        title={translate("services_title")}
        subtitle={translate("service_subtitle")}
      />

      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-24 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.key} href="/contact">
            <div className="border rounded-lg shadow-lg overflow-hidden h-full">
              <div className="p-4 text-left">
                <h2 className="text-lg font-semibold">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div>
                <Image
                  alt={service.title}
                  src={service.img}
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="p-4 flex justify-between text-xs text-gray-600">
                <div>
                  <p>Duration:</p>
                  <p className="font-medium">+ {service.duration} min</p>
                </div>
                <div>
                  <p>Price:</p>
                  <p className="font-medium">{service.price}€</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
