"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navigation = [
  { name: "Home", href: "/en" },
  { name: "Services", href: "/en/services" },
  { name: "About", href: "/en/about" },
  { name: "Contact", href: "/en/contact" },
];

export default function HeaderEN() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/en" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">ETF</span>
          </div>
          <span className="text-foreground font-semibold text-lg hidden sm:block">
            Evolution Tax Finance
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button + Language */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            asChild
          >
            <Link href="/en/contact">Free Consultation</Link>
          </Button>
          <LanguageSwitcher currentLang="en" />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link href="/en/contact">Free Consultation</Link>
            </Button>
            <div className="flex justify-center pt-4">
              <LanguageSwitcher currentLang="en" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
