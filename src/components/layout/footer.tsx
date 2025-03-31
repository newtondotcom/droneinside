"use client";
import links from "@/data/links";
import translate from "@/lib/locales/function";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="flex">
      <div className="mx-auto max-w-5xl mt-4 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Image className="h-8 w-auto sm:h-10" src="/logo.jpg" alt="Logo" />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          {translate("footer_description")}
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link href="path">
                <button
                  className={cn(
                    `text-gray-400 transition hover:text-primary`,
                    pathname === path ? "text-primary/60" : "",
                  )}
                >
                  {translate(label)}
                </button>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center text-primary">
          {translate("made_from")}
        </div>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {[
            {
              href: "https://instagram.com/droninside",
              label: "Instagram",
              icon: "instagram",
            },
            {
              href: "https://www.linkedin.com/in/robin-augereau/",
              label: "LinkedIn",
              icon: "linkedin",
            },
            {
              href: "https://github.com/newtondotcom/drone-shop.git",
              label: "GitHub",
              icon: "github",
            },
          ].map(({ href, label, icon }) => (
            <li key={icon}>
              <a
                href={href}
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:text-primary"
                aria-label={label}
              >
                <i className={`fab fa-${icon} text-xl`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
