"use client";
import Title from "@/components/layout/title";
import translate from "@/lib/locales/function";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Service {
  key: string;
  price: number;
  duration: number | string;
  img: string;
}

const servicesData = [
  {
    key: "residential",
    titleKey: "residential_title",
    descriptionKey: "residential_description",
    price: 190,
    duration: 60,
    img: "/res.avif",
  },
  {
    key: "local-business",
    titleKey: "local_business_title",
    descriptionKey: "local_business_description",
    price: 190,
    duration: 60,
    img: "/local-business.jpeg",
  },
  {
    key: "event",
    titleKey: "event_title",
    descriptionKey: "event_description",
    price: 500,
    duration: "∞",
    img: "/event.jpeg",
  },
  {
    key: "office",
    titleKey: "office_title",
    descriptionKey: "office_description",
    price: 390,
    duration: 90,
    img: "/office.webp",
  },
  {
    key: "hostel",
    titleKey: "hostel_title",
    descriptionKey: "hostel_description",
    price: 390,
    duration: 90,
    img: "/hotel.jpeg",
  },
  {
    key: "construction",
    titleKey: "construction_title",
    descriptionKey: "construction_description",
    price: 290,
    duration: 60,
    img: "/construction.jpeg",
  },
];

const Services = () => {
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
                <h2 className="text-lg font-semibold">{translate(service.key + "_title")}</h2>
                <p className="text-gray-600">{translate(service.key + "_description")}</p>
              </div>
              <div>
                <Image
                  alt={service.key + "_title"}
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
