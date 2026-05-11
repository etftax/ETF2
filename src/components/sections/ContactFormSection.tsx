"use client";

import { useState } from "react";
import Script from "next/script";
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
  const [errors, setErrors] = useState<Record<string, string>>({});

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
        source: "Site ETF - Homepage Contact",
        submitted_at: submittedAt,
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setErrors({});
    } catch {
      alert("A apărut o eroare la trimitere. Te rugăm să suni direct la 0760 937 133 sau să ne dai mesaj pe WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Script
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      strategy="lazyOnload"
      onLoad={() => {
        window.emailjs?.init({ publicKey: "CbLOcioIyHXkDdZdo" });
      }}
    />
    <section className="py-28 bg-[#0f1c2e]" id="formular">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="text-white">
            <p className="text-xs font-medium text-white/50 uppercase tracking-[0.2em] mb-4">
              Contactează-ne
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-6">
              Solicită o consultație gratuită
            </h2>
            <p className="text-white/70 leading-relaxed mb-12 max-w-lg">
              Completează formularul alăturat și unul dintre consultanții noștri te va contacta pentru a discuta despre nevoile afacerii tale.
            </p>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5 text-white/60">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white/90 mb-1">Telefon</p>
                  <p className="text-white/50 text-sm">+40 744 364 603</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5 text-white/60">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white/90 mb-1">Email</p>
                  <p className="text-white/50 text-sm">etftax@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-12 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#3b82f6]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <p className="text-sm text-white/60">
                  Datele tale sunt protejate conform GDPR
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-[#3b82f6]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1a2b4a] mb-3">
                    Mulțumim!
                  </h3>
                  <p className="text-[#5a6a7e] mb-8">
                    Mesajul tău a fost trimis cu succes.
                  </p>
                  <p className="text-sm text-[#5a6a7e] mb-6">
                    Un consultant din echipa noastră vă va contacta în maximum <strong className="text-[#1a2b4a]">4 ore lucrătoare</strong>.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="border-[#e5e8ed] text-[#1a2b4a] hover:bg-[#f8f9fb]"
                  >
                    Trimite alt mesaj
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-xl font-medium text-[#1a2b4a] mb-2">
                    Completează formularul
                  </h3>
                  <p className="text-sm text-[#5a6a7e] mb-8">
                    Câmpurile marcate cu * sunt obligatorii
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-[#1a2b4a] mb-2 block">
                        Nume <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Numele dumneavoastră"
                        value={formData.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`h-12 border-[#e5e8ed] focus:border-[#3b82f6] focus:ring-[#3b82f6]/20 ${errors.name ? 'border-red-400' : ''}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-[#1a2b4a] mb-2 block">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@companie.ro"
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`h-12 border-[#e5e8ed] focus:border-[#3b82f6] focus:ring-[#3b82f6]/20 ${errors.email ? 'border-red-400' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-[#1a2b4a] mb-2 block">
                        Telefon <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+40 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        className={`h-12 border-[#e5e8ed] focus:border-[#3b82f6] focus:ring-[#3b82f6]/20 ${errors.phone ? 'border-red-400' : ''}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="text-sm font-medium text-[#1a2b4a] mb-2 block">
                        Companie <span className="text-[#5a6a7e] text-xs font-normal">(opțional)</span>
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Numele companiei"
                        value={formData.company}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, company: e.target.value })}
                        className="h-12 border-[#e5e8ed] focus:border-[#3b82f6] focus:ring-[#3b82f6]/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-[#1a2b4a] mb-2 block">
                        Mesaj <span className="text-[#5a6a7e] text-xs font-normal">(opțional)</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Descrieți pe scurt nevoile afacerii dumneavoastră..."
                        rows={3}
                        value={formData.message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                        className="border-[#e5e8ed] focus:border-[#3b82f6] focus:ring-[#3b82f6]/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white h-12 text-base font-medium mt-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                    <p className="text-xs text-center text-[#5a6a7e] pt-1">
                      Un consultant din echipa noastră vă va contacta în maximum <strong className="text-[#1a2b4a]">4 ore lucrătoare</strong>.
                    </p>

                    {/* GDPR Consent Note */}
                    <div className="pt-2 border-t border-[#e5e8ed]">
                      <p className="text-xs text-[#5a6a7e] leading-relaxed">
                        Prin trimiterea acestui formular, sunteți de acord ca datele dumneavoastră să fie utilizate exclusiv pentru a vă contacta în legătură cu solicitarea dvs. Datele nu vor fi partajate cu terți.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </>
  );
}
