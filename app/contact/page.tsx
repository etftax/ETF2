"use client";

import { useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

declare global {
  interface Window {
    emailjs: {
      init: (options: { publicKey: string }) => void;
      send: (serviceId: string, templateId: string, params: Record<string, string>) => Promise<{ status: number }>;
    };
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();
  const [emailjsReady, setEmailjsReady] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Numele este obligatoriu";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Adresa de email este obligatorie";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Adresa de email nu este validă";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Numărul de telefon este obligatoriu";
    } else if (!/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Numărul de telefon nu este valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const now = new Date();
    const submittedAt = now.toLocaleString("ro-RO", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

    const situationDetails = [
      `Email: ${formData.email}`,
      formData.company ? `Companie: ${formData.company}` : null,
      formData.message ? `Mesaj: ${formData.message}` : null,
    ].filter(Boolean).join(" | ");

    try {
      await window.emailjs.send("service_ru4rwk8", "template_rqb85dm", {
        from_name: formData.name,
        phone: formData.phone,
        situation: situationDetails || "Nespecificat",
        variant: "📩 Formular Contact General",
        source: "Site ETF - Pagina Contact",
        submitted_at: submittedAt,
      });

      router.push("/multumim");
    } catch {
      setSubmitError("A apărut o eroare. Vă rugăm încercați din nou sau contactați-ne direct la telefon.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.emailjs?.init({ publicKey: "CbLOcioIyHXkDdZdo" });
          setEmailjsReady(true);
        }}
      />
      {/* Hidden Netlify form for detection */}
      <form name="contact-page" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="company" />
        <textarea name="message" />
      </form>

      {/* Header with dark background for this page */}
      <div className="bg-primary">
        <Header />

        {/* Hero */}
        <section className="pt-32 pb-20">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs font-medium text-primary-foreground/50 uppercase tracking-[0.2em] mb-4">
                Contact
              </p>
              <h1 className="text-4xl md:text-5xl font-normal text-primary-foreground leading-tight mb-6">
                Hai să discutăm despre afacerea ta
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">
                Suntem aici să răspundem întrebărilor tale și să îți oferim soluțiile potrivite pentru nevoile companiei tale.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section className="py-24 bg-secondary" id="formular">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-medium text-foreground mb-8">
                Informații de contact
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Telefon</h3>
                    <a
                      href="tel:+40744364603"
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                      data-gtag="click"
                      data-gtag-category="contact"
                      data-gtag-action="phone_click"
                      data-gtag-label="contact_page_phone"
                    >
                      +40 744 364 603
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:etftax@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                      data-gtag="click"
                      data-gtag-category="contact"
                      data-gtag-action="email_click"
                      data-gtag-label="contact_page_email"
                    >
                      etftax@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Adresă</h3>
                    <p className="text-muted-foreground text-sm">Str. Sarafinesti 16, sector 2, București</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Program</h3>
                    <p className="text-muted-foreground text-sm">Luni - Vineri: 09:00 - 18:00</p>
                    <p className="text-muted-foreground text-sm">Sâmbătă - Duminică: Închis</p>
                  </div>
                </div>
              </div>

              {/* Company Details */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-medium text-foreground mb-4">Date firmă</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Denumire:</strong> Evolution Tax Finance SRL</p>
                  <p><strong className="text-foreground">CUI:</strong> 35486370</p>
                  <p><strong className="text-foreground">Adresă:</strong> Str. Sarafinesti 16, sector 2, București</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border shadow-lg bg-card">
              <CardContent className="p-8 md:p-10">
                <>
                    <h3 className="text-xl font-medium text-foreground mb-2">
                      Trimite-ne un mesaj
                    </h3>
                    <p className="text-sm text-muted-foreground mb-8">
                      Câmpurile marcate cu * sunt obligatorii
                    </p>

                    {submitError && (
                      <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm mb-6">
                        {submitError}
                      </div>
                    )}

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      name="contact-page"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                    >
                      <input type="hidden" name="form-name" value="contact-page" />
                      <p className="hidden">
                        <label>
                          Nu completa acest câmp: <input name="bot-field" />
                        </label>
                      </p>

                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                          Nume <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Numele dumneavoastră"
                          value={formData.name}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: "" });
                          }}
                          className={`h-12 border-border focus:border-accent focus:ring-accent/20 ${errors.name ? 'border-destructive' : ''}`}
                        />
                        {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="email@companie.ro"
                          value={formData.email}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          className={`h-12 border-border focus:border-accent focus:ring-accent/20 ${errors.email ? 'border-destructive' : ''}`}
                        />
                        {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                          Telefon <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+40 7XX XXX XXX"
                          value={formData.phone}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: "" });
                          }}
                          className={`h-12 border-border focus:border-accent focus:ring-accent/20 ${errors.phone ? 'border-destructive' : ''}`}
                        />
                        {errors.phone && <p className="text-destructive text-xs mt-1.5">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">
                          Companie <span className="text-muted-foreground text-xs font-normal">(opțional)</span>
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Numele companiei"
                          value={formData.company}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, company: e.target.value })}
                          className="h-12 border-border focus:border-accent focus:ring-accent/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                          Mesaj <span className="text-muted-foreground text-xs font-normal">(opțional)</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Descrieți pe scurt nevoile afacerii dumneavoastră..."
                          rows={3}
                          value={formData.message}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                          className="border-border focus:border-accent focus:ring-accent/20 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base font-medium mt-2"
                        disabled={isSubmitting || !emailjsReady}
                        data-gtag="click"
                        data-gtag-category="form"
                        data-gtag-action="form_submit"
                        data-gtag-label="contact_page_form_submit"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Se trimite...
                          </>
                        ) : (
                          "Programează o consultație gratuită"
                        )}
                      </Button>

                      {/* Trust text */}
                      <p className="text-xs text-center text-muted-foreground pt-1">
                        Un consultant din echipa noastră vă va contacta în maximum <strong className="text-foreground">4 ore lucrătoare</strong>.
                      </p>

                      {/* GDPR Consent Note */}
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Prin trimiterea acestui formular, sunteți de acord ca datele dumneavoastră să fie utilizate exclusiv pentru a vă contacta în legătură cu solicitarea dvs. Datele nu vor fi partajate cu terți.
                        </p>
                      </div>
                    </form>
                </>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
