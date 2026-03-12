"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Va rugam completati toate campurile obligatorii.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Adresa de email nu este valida.");
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

      router.push("/multumim");
    } catch (err) {
      setError("A aparut o eroare. Va rugam incercati din nou sau contactati-ne direct la telefon.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-secondary" id="formular">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">
              Hai sa discutam despre afacerea ta
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Completeaza formularul alaturat si un consultant din echipa noastra
              te va contacta in maximum 4 ore lucratoare.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <a href="tel:+40744364603" className="text-foreground font-medium hover:text-accent transition-colors">+40 744 364 603</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:etftax@gmail.com" className="text-foreground font-medium hover:text-accent transition-colors">etftax@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresa</p>
                  <p className="text-foreground font-medium">Str. Sarafinesti 16, sector 2, Bucuresti</p>
                  <p className="text-sm text-muted-foreground mt-1">Evolution Tax Finance SRL | CUI: 35486370</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">{error}</div>
              )}
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">Nume complet <span className="text-destructive">*</span></label>
                  <Input id="name" name="name" type="text" placeholder="Numele dumneavoastra" value={formData.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })} required className="h-12 border-border focus:border-accent focus:ring-accent/20" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">Email <span className="text-destructive">*</span></label>
                    <Input id="email" name="email" type="email" placeholder="email@companie.ro" value={formData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })} required className="h-12 border-border focus:border-accent focus:ring-accent/20" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">Telefon <span className="text-destructive">*</span></label>
                    <Input id="phone" name="phone" type="tel" placeholder="+40 7XX XXX XXX" value={formData.phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })} required className="h-12 border-border focus:border-accent focus:ring-accent/20" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">Companie <span className="text-muted-foreground text-xs">(optional)</span></label>
                  <Input id="company" name="company" type="text" placeholder="Numele companiei" value={formData.company} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, company: e.target.value })} className="h-12 border-border focus:border-accent focus:ring-accent/20" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">Mesaj <span className="text-muted-foreground text-xs">(optional)</span></label>
                  <Textarea id="message" name="message" placeholder="Descrieti pe scurt nevoile afacerii dumneavoastra..." rows={4} value={formData.message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })} className="border-border focus:border-accent focus:ring-accent/20 resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base font-medium" disabled={isSubmitting}>
                  {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
                </Button>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  Prin trimiterea formularului, esti de acord cu{" "}
                  <Link href="/confidentialitate" className="text-accent hover:underline">politica de confidentialitate</Link>.
                </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
