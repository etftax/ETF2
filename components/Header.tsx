"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Servicii", href: "/servicii" },
  { name: "Despre", href: "/despre" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/logo.jpg"
              alt="Evolution Tax Finance Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="text-primary-foreground font-semibold text-lg hidden sm:block">
            Evolution Tax Finance
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            data-gtag="click"
            data-gtag-category="cta"
            data-gtag-action="consultation_click"
            data-gtag-label="header_cta"
          >
            <Link href="/contact#formular">Consultație gratuită</Link>
          </Button>
          <LanguageSwitcher currentLang="ro" />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <div className="container py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4"
              data-gtag="click"
              data-gtag-category="cta"
              data-gtag-action="consultation_click"
              data-gtag-label="header_mobile_cta"
            >
              <Link href="/contact#formular">Consultație gratuită</Link>
            </Button>
            <div className="flex justify-center pt-4">
              <LanguageSwitcher currentLang="ro" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
