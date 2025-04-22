"use client";
import Title from "@/components/layout/title";
import translate from "@/lib/locales/function";
import Image from "next/image";
import Link from "next/link";
import services from "@/lib/data/services";

const Services = () => {
  return (
    <div className="flex flex-col mt-20">
      <Title
        title={translate("services_title")}
        subtitle={translate("service_subtitle")}
      />

      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-24 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.key} href={"/service/" + service.key}>
            <div className="border rounded-lg shadow-lg overflow-hidden h-full">
              <div className="p-4 text-left">
                <h2 className="text-lg font-semibold">
                  {translate(service.key + "_title")}
                </h2>
                <p className="text-gray-600 min-h-16">
                  {translate(service.key + "_description")}
                </p>
              </div>
              <div className="px-1">
                <Image
                  alt={service.key + "_title"}
                  src={service.img}
                  className="w-full object-cover rounded-sm"
                  height={1024}
                  width={576}
                />
              </div>
              <div className="p-4 flex justify-between text-sm text-gray-600">
                <div>
                  <p>{translate("services_duration")}</p>
                  <p className="font-semibold text-primary">+ {service.duration} min</p>
                </div>
                <div>
                  <p>{translate("services_price")}</p>
                  <p className="font-semibold text-primary">{service.price}€</p>
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
