"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/layout/color-theme";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
      <header className={cn("w-full max-w-[calc(100%-4rem)] h-16 flex items-center justify-between border border-black bg-white/10 dark:border-white dark:bg-dark/10 shadow-md z-50 px-4 lg:px-6 backdrop-blur-md rounded-3xl mx-auto","//margin bottoms to make a rectangle or a bottom sheet")>
        <Link className="flex items-center gap-2" href="/">
          <span className="font-bold text-2xl">FrameIt</span>
        </Link>

        <nav
          className="hidden md:flex gap-4 sm:gap-6"
          aria-label="Main navigation"
        >
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#specs"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Specs
          </Link>
          <Link
            href="#content"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contents
          </Link>
          <Link
            href="#waitlist"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Waitlist
          </Link>
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
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Features
          </Link>
          <Link
            href="#specs"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Specs
          </Link>
          <Link
            href="#content"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Contents
          </Link>
          <Link
            href="#waitlist"
            className="text-sm font-medium hover:underline underline-offset-4"
            onClick={toggleMobileMenu}
          >
            Waitlist
          </Link>
        </nav>
      )}
    </>
  );
}
