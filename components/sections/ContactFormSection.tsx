"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Vă rugăm completați toate câmpurile obligatorii.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Adresa de email nu este validă.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Eroare la trimiterea mesajului");

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      setError("A apărut o eroare. Vă rugăm încercați din nou sau contactați-ne direct la telefon.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-secondary" id="formular">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">
              Hai să discutăm despre afacerea ta
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Completează formularul alăturat și un consultant din echipa noastră
              te va contacta în maximum 4 ore lucrătoare.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-accent"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <a
                    href="tel:+40744364603"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    +40 744 364 603
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-accent"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:etftax@gmail.com"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    etftax@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-accent"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresă</p>
                  <p className="text-foreground font-medium">
                    Str. Sarafinesti 16, sector 2, București
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Evolution Tax Finance SRL | CUI: 35486370
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-accent"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">
                  Mesajul a fost trimis cu succes!
                </h3>
                <p className="text-muted-foreground mb-2">
                  Mulțumim pentru mesaj.
                </p>
                <p className="text-muted-foreground mb-6">
                  Un consultant din echipa noastră te va contacta în maximum <strong className="text-foreground">4 ore lucrătoare</strong>.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="border-border text-foreground hover:bg-secondary"
                >
                  Trimite alt mesaj
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground mb<span class="cursor">█</span>