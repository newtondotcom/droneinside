"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/layout/color-theme";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import links from "@/data/links";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <>
      <header
        className={cn(
          "fixed top-1 left-1/2 transform -translate-x-1/2",
          "w-full max-w-[calc(100%-4rem)] h-16 flex items-center justify-between",
          "border border-black bg-white/10 dark:border-white dark:bg-dark/10",
          "shadow-md z-50 px-4 lg:px-6 backdrop-blur-md rounded-3xl",
          "mt-4",
        )}
      >
        <Link className="flex items-center gap-2" href="/">
          <span className="font-bold text-2xl">DronInside</span>
        </Link>

        <nav
          className="hidden md:flex gap-4 sm:gap-6"
          aria-label="Main navigation"
        >
          {links.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "text-sm font-medium hover:underline underline-offset-4",
                pathname === path && "text-primary font-semibold",
              )}
            >
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </Link>
          ))}
        </nav>

        <ThemeToggle />

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </Button>
      </header>

      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="fixed top-16 left-0 w-full md:hidden flex flex-col gap-4 p-4 border-b bg-white shadow-md dark:bg-background dark:border-border"
          aria-label="Mobile navigation"
        >
          {links.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={toggleMobileMenu}
            >
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
