"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import "./declaratie-unica.css";

declare global {
  interface Window {
    emailjs: {
      init: (options: { publicKey: string }) => void;
      send: (serviceId: string, templateId: string, params: Record<string, string>) => Promise<{ status: number }>;
    };
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

type ModalVariant = "callback" | "lead";

interface CountdownState {
  days: string;
  hours: string;
  mins: string;
  secs: string;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getCountdown(): CountdownState {
  const target = new Date("2026-05-25T23:59:59+03:00").getTime();
  const diff = target - Date.now();
  if (diff <= 0) return { days: "00", hours: "00", mins: "00", secs: "00" };
  return {
    days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: pad(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
    mins: pad(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
    secs: pad(Math.floor((diff % (1000 * 60)) / 1000)),
  };
}

export default function DeclaratieUnicaClient() {
  const [countdown, setCountdown] = useState<CountdownState>(getCountdown());
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<ModalVariant>("callback");
  const [formSuccess, setFormSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [stickyVisible, setStickyVisible] = useState(true);
  const modalSourceRef = useRef("");

  useEffect(() => {
    const interval = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      setStickyVisible(false);
    } else {
      document.body.style.overflow = "";
      setStickyVisible(true);
    }
  }, [modalOpen]);

  function openModal(variant: ModalVariant, source: string) {
    setModalVariant(variant);
    modalSourceRef.current = source;
    setFormSuccess(false);
    setModalOpen(true);
    trackEvent("form_open_" + source);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function trackEvent(eventName: string) {
    if (typeof window === "undefined") return;
    if (window.dataLayer) {
      window.dataLayer.push({ event: eventName, source: modalSourceRef.current });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, { event_category: "engagement" });
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", { content_name: eventName });
    }
  }

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const situation = (form.elements.namedItem("situation") as HTMLSelectElement)?.value || "";

    if (!phone || phone.length < 9) { alert("Te rugăm să introduci un număr de telefon valid."); return; }
    if (!name) { alert("Te rugăm să introduci numele."); return; }

    setSubmitting(true);

    const now = new Date();
    const submittedAt = now.toLocaleString("ro-RO", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

    const variantLabel = modalVariant === "lead"
      ? "🆓 Verificare gratuită (sună leadul)"
      : "💰 Pachet 497 LEI (sună leadul)";

    try {
      await window.emailjs.send("service_ru4rwk8", "template_rqb85dm", {
        from_name: name,
        phone,
        situation: situation || "Nespecificat",
        variant: variantLabel,
        source: "Site ETF - Declaratie Unica",
        submitted_at: submittedAt,
      });

      const eventName = modalVariant === "lead" ? "lead_magnet_submit" : "form_submit_callback";
      trackEvent(eventName);
      setFormSuccess(true);
    } catch {
      alert("A apărut o eroare la trimitere. Te rugăm să suni direct la 0760 937 133 sau să ne dai mesaj pe WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  const isLead = modalVariant === "lead";

  const faqItems = [
    {
      q: "Pot să completez declarația singur, gratuit pe site-ul ANAF. De ce să plătesc 497 LEI?",
      a: (
        <>
          <p>Da, poți. Dar înainte să decizi, gândește-te la ce înseamnă asta:</p>
          <ul>
            <li><strong>Timp:</strong> în medie 5-10 ore de citit ghiduri ANAF, completat formulare, înțeles ce câmpuri se aplică situației tale.</li>
            <li><strong>Risc:</strong> dacă ratezi un venit (de ex. dividende reinvestite, venit din străinătate, cripto cu pierderi), ANAF te poate amenda sau recalcula.</li>
            <li><strong>Bani pierduți:</strong> multe persoane completează greșit și plătesc impozit mai mare decât trebuie — nu știu să folosească deducerile aplicabile.</li>
          </ul>
          <p>Pentru cazuri simple (un singur tip de venit, sumă mică) — poți încerca singur. Pentru cazuri cu chirii + străinătate, PFA + dividende, cripto, sau orice combinație de venituri — 497 LEI e o asigurare care te scutește de mii de lei în greșeli + amenzi.</p>
          <p><strong>Verificăm gratuit situația ta și îți spunem onest dacă merită sau nu.</strong></p>
        </>
      ),
    },
    {
      q: "Cine trebuie să depună Declarația Unică în 2026?",
      a: (
        <>
          <p>Persoanele fizice cu venituri din: chirii, activități independente (PFA/II/IF), dividende, dobânzi, venituri din străinătate, câștiguri din transferul titlurilor de valoare (inclusiv criptomonede), drepturi de proprietate intelectuală și alte venituri impozabile.</p>
          <p>Dacă ai dubii, ne suni și verificăm împreună gratuit.</p>
        </>
      ),
    },
    {
      q: "Ce se întâmplă dacă nu depun până pe 25 mai?",
      a: (
        <>
          <p>Riști amenzi de la 50 la 500 LEI pentru depunerea cu întârziere, plus eventuale penalități și majorări de întârziere pentru sumele datorate la stat.</p>
          <p>În plus, ANAF poate face controale și recalculări care îți pot bloca decontări viitoare.</p>
        </>
      ),
    },
    {
      q: "Ce documente îmi trebuie?",
      a: (
        <>
          <p>Depinde de tipul de venit, dar în general: CI, contracte de chirie, extrase bancare cu venituri, documente de la angajatori străini (dacă e cazul), istoric tranzacții cripto/investiții.</p>
          <p>După ce ne contactezi, îți trimitem o listă personalizată exactă pentru situația ta.</p>
        </>
      ),
    },
    {
      q: "Cât durează procesul?",
      a: (
        <>
          <p>Suni până la ora 12:00 și declarația ta poate fi gata în aceeași zi.</p>
          <p>În general, 24-48 de ore din momentul în care primim toate documentele. În perioadele aglomerate dinaintea deadline-ului, recomandăm să ne contactezi cu cel puțin 5 zile înainte de 25 mai.</p>
        </>
      ),
    },
    {
      q: "Ce este SPV și de ce am nevoie de cont?",
      a: (
        <>
          <p>SPV (Spațiul Privat Virtual) este platforma online ANAF prin care depui declarațiile fără să te deplasezi la ghișeu. Începând cu 2024, depunerea online este obligatorie pentru majoritatea contribuabililor.</p>
          <p>Noi îți creăm contul și îți explicăm cum funcționează — totul inclus în pachetul de 497 LEI.</p>
        </>
      ),
    },
  ];

  const testimonials = [
    { stars: "★★★★★", text: '"Colaborarea cu Evolution Tax Finance a adus claritate și eficiență în gestionarea financiară a companiei noastre. Recomand cu încredere!"', avatar: "SV", name: "Salagean Valentin", role: "Owner, Il Calcio by Mrs Val" },
    { stars: "★★★★★", text: '"Am avut venituri din chirii și din străinătate, eram complet pierdut. În 2 zile aveam Declarația Unică gata și depusă."', avatar: "MD", name: "Mihai Dragomir", role: "Proprietar imobile" },
    { stars: "★★★★★", text: '"Ca freelancer IT cu venituri din mai multe țări, declarația era un coșmar. ETF a făcut totul rapid și mi-au explicat fiecare pas."', avatar: "AC", name: "Andreea Constantin", role: "Freelancer IT" },
    { stars: "★★★★★", text: '"Am investit în cripto și nu știam cum să raportez câștigurile. ETF mi-a explicat clar și mi-a depus declarația fără probleme."', avatar: "CI", name: "Cristian Ionescu", role: "Investitor cripto" },
    { stars: "★★★★★", text: '"Servicii de top, comunicare excelentă și prețuri corecte. Sunt clientă de 3 ani și nu am avut nicio problemă cu ANAF."', avatar: "EM", name: "Elena Marinescu", role: "Antreprenor" },
  ];

  const phoneSvg = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const waSvg = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  const formSvg = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );

  const waHref = "https://wa.me/40760937133?text=Bun%C4%83%21%20Vreau%20pachetul%20Declara%C8%9Bia%20Unic%C4%83%20%2B%20SPV%20cu%20497%20LEI.";

  return (
    <>
      {/* EmailJS SDK */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.emailjs?.init({ publicKey: "CbLOcioIyHXkDdZdo" });
        }}
      />

      <div className="du-wrap">
        <div className="du-page-bg">

          {/* HERO */}
          <section className="du-hero">
            <div className="du-container du-hero-inner">
              <span className="du-hero-badge">📋 DECLARAȚIA UNICĂ 2026 ANAF</span>
              <h1>
                Declarația Unică 2026<br />
                <span className="du-highlight">Completată de profesioniști în aceeași zi!</span>
              </h1>
              <p className="du-hero-sub">
                Nu pierde 5 ore pe site-ul ANAF și nu risca amenzi.<br />
                Îți completăm Declarația Unică + asistență SPV inclusă pentru <strong>497 LEI</strong> garantat fără greșeli.
              </p>
              <p className="du-hero-micro">
                Dacă suni până la ora <strong>12:00</strong> → declarația ta poate fi gata <strong>azi</strong>!
              </p>

              <div className="du-cta-group">
                <a href="tel:+40760937133" className="du-cta-btn du-cta-primary" onClick={() => trackEvent("call_hero")}>
                  {phoneSvg} SUNĂ ACUM 0760 937 133
                </a>
                <a href={waHref} className="du-cta-btn du-cta-whatsapp" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_hero")}>
                  {waSvg} WHATSAPP
                </a>
                <button className="du-cta-btn du-cta-form" onClick={() => openModal("callback", "hero")}>
                  {formSvg} TE SUNĂM NOI
                </button>
              </div>

              <div className="du-lead-magnet-wrap">
                <button className="du-lead-magnet-cta" onClick={() => openModal("lead", "hero_secondary")}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Nu ești sigur dacă trebuie să depui declarația? <strong>→ Obține o Verificare GRATUITĂ în 5 minute!</strong></span>
                </button>
              </div>

              <div className="du-trust-row">
                <span>25 ani experiență</span>
                <span className="du-sep">·</span>
                <span>300+ Declarații Unice depuse</span>
                <span className="du-sep">·</span>
                <span>0 amenzi pentru clienții noștri</span>
              </div>

              <div className="du-countdown-wrap">
                <div className="du-countdown-label">Deadline ANAF: 25 mai 2026</div>
                <div className="du-countdown">
                  <div className="du-countdown-box"><div className="du-countdown-num">{countdown.days}</div><div className="du-countdown-unit">Zile</div></div>
                  <div className="du-countdown-box"><div className="du-countdown-num">{countdown.hours}</div><div className="du-countdown-unit">Ore</div></div>
                  <div className="du-countdown-box"><div className="du-countdown-num">{countdown.mins}</div><div className="du-countdown-unit">Minute</div></div>
                  <div className="du-countdown-box"><div className="du-countdown-num">{countdown.secs}</div><div className="du-countdown-unit">Secunde</div></div>
                </div>
              </div>
            </div>
          </section>

          {/* PENTRU CINE */}
          <section className="du-section du-section-light">
            <div className="du-container">
              <h2 className="du-section-title">Ai nevoie de Declarația Unică dacă...</h2>
              <p className="du-section-sub">Verifică rapid dacă te încadrezi în una din situațiile de mai jos:</p>
              <div className="du-audience-grid">
                {[
                  ["🏠", "Ai venituri din chirii"],
                  ["💼", "Ai PFA / II / IF"],
                  ["📈", "Ai venituri din dividende"],
                  ["🌍", "Ai venituri din străinătate"],
                  ["🧑‍💻", "Ai activități independente"],
                  ["₿", "Ai câștiguri din cripto / investiții"],
                ].map(([icon, text]) => (
                  <div key={text} className="du-audience-item">
                    <div className="du-audience-icon">{icon}</div>
                    <div className="du-audience-text">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CUM FUNCȚIONEAZĂ */}
          <section className="du-section">
            <div className="du-container">
              <h2 className="du-section-title">Cum funcționează în 3 pași simpli</h2>
              <p className="du-section-sub">Procesul complet durează maxim 24-48 de ore.</p>
              <div className="du-steps-grid">
                <div className="du-step">
                  <div className="du-step-num">1</div>
                  <h3>Ne contactezi</h3>
                  <p>Suni la 0760 937 133, ne dai mesaj pe WhatsApp sau completezi formularul. Iar noi te sunăm înapoi.</p>
                </div>
                <div className="du-step">
                  <div className="du-step-num">2</div>
                  <h3>Trimiți documentele</h3>
                  <p>Pe email sau WhatsApp. Îți spunem exact ce ai nevoie, fără birocrație inutilă.</p>
                </div>
                <div className="du-step">
                  <div className="du-step-num">3</div>
                  <h3>Primești declarația</h3>
                  <p>În 24-48 de ore primești declarația completată + ghid SPV pentru depunere online.</p>
                </div>
              </div>
            </div>
          </section>

          {/* DE CE NOI */}
          <section className="du-section du-section-light">
            <div className="du-container">
              <h2 className="du-section-title">De ce ne aleg sute de clienți pentru Declarația Unică?</h2>
              <p className="du-section-sub">Experiență reală, nu promisiuni goale.</p>
              <div className="du-whyus-grid">
                <div className="du-whyus-card">
                  <div className="du-whyus-num">25</div>
                  <h3>Ani de experiență</h3>
                  <p>În contabilitate, experiența contează. Am trecut prin toate schimbările legislative ANAF din ultimii 25 de ani.</p>
                </div>
                <div className="du-whyus-card">
                  <div className="du-whyus-num">300+</div>
                  <h3>Declarații Unice depuse</h3>
                  <p>Știm exact ce documente îți trebuie pentru fiecare situație: chirii, PFA, dividende, cripto, venituri din străinătate.</p>
                </div>
                <div className="du-whyus-card">
                  <div className="du-whyus-num">0</div>
                  <h3>Amenzi pentru clienții noștri</h3>
                  <p>Verificare dublă pe fiecare declarație, înainte de depunere. Atenție la fiecare detaliu.</p>
                </div>
                <div className="du-whyus-card">
                  <div className="du-whyus-num">4 ore</div>
                  <h3>Timp de răspuns</h3>
                  <p>Nu te lăsăm să aștepți zile întregi. Suni acum, vorbim cu tine în maxim 4 ore lucrătoare.</p>
                </div>
              </div>
              <div className="du-whyus-signature">
                <div className="du-whyus-signature-name">Echipa Evolution Tax Finance</div>
                <div className="du-whyus-signature-text">Firmă fondată și condusă de specialiști cu peste 25 de ani de experiență în contabilitate și consultanță fiscală pentru persoane fizice.</div>
              </div>
            </div>
          </section>

          {/* TESTIMONIALE */}
          <section className="du-section">
            <div className="du-container">
              <h2 className="du-section-title">Ce spun clienții noștri</h2>
              <p className="du-section-sub">300+ persoane ne-au ales pentru serviciile noastre în ultimii ani.</p>
              <div className="du-testimonials-carousel">
                <div className="du-testimonials-track">
                  {[...testimonials, ...testimonials].map((t, i) => (
                    <div key={i} className="du-testimonial">
                      <div className="du-testimonial-stars">{t.stars}</div>
                      <p className="du-testimonial-text">{t.text}</p>
                      <div className="du-testimonial-author">
                        <div className="du-testimonial-avatar">{t.avatar}</div>
                        <div>
                          <div className="du-testimonial-name">{t.name}</div>
                          <div className="du-testimonial-role">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PROBLEMA */}
          <section className="du-section du-section-light">
            <div className="du-container">
              <h2 className="du-section-title">Ce riști dacă nu depui Declarația Unică sau o completezi greșit?</h2>
              <p className="du-section-sub">Greșelile costă mai mult decât completarea profesionistă.</p>
              <div className="du-problem-grid">
                <div className="du-problem-card">
                  <div className="du-problem-card-icon">!</div>
                  <h3>Amenzi ANAF</h3>
                  <p>50 - 500 LEI pentru depunere cu întârziere, plus penalități la sumele datorate.</p>
                  <p className="du-source">Sursa: Codul Fiscal, art. 336</p>
                </div>
                <div className="du-problem-card">
                  <div className="du-problem-card-icon">€</div>
                  <h3>Plăți în plus la stat</h3>
                  <p>Calculul greșit al impozitului = bani dați degeaba. Mulți plătesc cu 200-1.000 LEI mai mult fără să știe.</p>
                </div>
                <div className="du-problem-card">
                  <div className="du-problem-card-icon">⚠</div>
                  <h3>Controale și blocaje</h3>
                  <p>ANAF poate face control fiscal, recalculări, blocaje pe conturi. În cazuri grave, restanțele se urmăresc forțat.</p>
                </div>
              </div>
            </div>
          </section>

          {/* OFERTA / PREȚ */}
          <section className="du-section">
            <div className="du-container">
              <h2 className="du-section-title">Economisești 200 LEI cu pachetul complet</h2>
              <p className="du-section-sub">De ce să plătești separat când poți avea totul într-un singur pachet?</p>

              <div className="du-price-compare">
                <div className="du-price-card du-price-card-separate">
                  <div className="du-price-card-title">Plătit separat</div>
                  <ul className="du-price-list">
                    <li><span>Creare cont SPV</span><span className="du-price-val">200 LEI</span></li>
                    <li><span>Completare Declarație Unică</span><span className="du-price-val">497 LEI</span></li>
                  </ul>
                  <div className="du-price-total">
                    <span className="du-price-total-label">Total</span>
                    <span className="du-price-total-value du-price-strike">697 LEI</span>
                  </div>
                </div>

                <div className="du-price-card du-price-card-package">
                  <div className="du-price-badge">Recomandat ✓</div>
                  <div className="du-price-card-title">Pachet complet</div>
                  <ul className="du-price-list">
                    <li><span>Declarația Unică completată</span><span className="du-price-val">✓ Inclus</span></li>
                    <li><span>Asistență SPV inclusă</span><span className="du-price-val">✓ Inclus</span></li>
                    <li><span>Verificare situație fiscală</span><span className="du-price-val">✓ Inclus</span></li>
                  </ul>
                  <div className="du-price-total">
                    <span className="du-price-total-label">Doar</span>
                    <span className="du-price-total-value">497 LEI</span>
                  </div>
                  <div className="du-price-savings">💰 Economisești 200 LEI</div>
                </div>
              </div>

              <div className="du-scarcity-real">
                <div className="du-scarcity-real-title">Cu cât te apropii de deadline 25 mai, cu atât echipa noastră e mai aglomerată</div>
                <p><strong>Acum:</strong> răspundem în maxim 4 ore, declarația în aceeași zi.</p>
                <p><strong>Ultima săptămână înainte de deadline:</strong> 24-48h.</p>
                <p><strong>Ultimele 2 zile:</strong> probabil nu mai putem prelua clienți noi.</p>
              </div>

              <div className="du-cta-group du-cta-group-section">
                <a href="tel:+40760937133" className="du-cta-btn du-cta-primary" onClick={() => trackEvent("call_price")}>
                  {phoneSvg} SUNĂ ACUM 0760 937 133
                </a>
                <a href={waHref} className="du-cta-btn du-cta-whatsapp" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_price")}>
                  {waSvg} WHATSAPP
                </a>
                <button className="du-cta-btn du-cta-form" onClick={() => openModal("callback", "price")}>
                  {formSvg} TE SUNĂM NOI
                </button>
              </div>
            </div>
          </section>

          {/* GARANȚIE */}
          <section className="du-section du-section-light">
            <div className="du-container">
              <h2 className="du-section-title">Garanție triplă — 100% Risc Zero</h2>
              <p className="du-section-sub">Suntem atât de siguri pe calitatea serviciului încât îți oferim trei garanții simultan.</p>
              <div className="du-guarantee">
                <div className="du-guarantee-header">
                  <div className="du-guarantee-badge">100%</div>
                  <div>
                    <h3>Garanție triplă pentru clienții noștri</h3>
                    <p>Verificare gratuită, plată după satisfacție și acoperire integrală în caz de eroare a noastră.</p>
                  </div>
                </div>
                <ul className="du-guarantee-list">
                  <li>
                    <span className="du-check">✓</span>
                    <span><strong>Verificăm declarația ta GRATUIT înainte să plătești.</strong> Dacă găsim greșeli sau venituri nedeclarate care te-ar costa scump, le rezolvăm.</span>
                  </li>
                  <li>
                    <span className="du-check">✓</span>
                    <span><strong>Nu plătești decât după ce ești 100% mulțumit</strong> cu declarația ta.</span>
                  </li>
                  <li>
                    <span className="du-check">✓</span>
                    <span><strong>Dacă declarația ta primește amendă din erori de completare făcute de noi, îți dăm banii dublu înapoi.</strong></span>
                  </li>
                </ul>
                <div className="du-guarantee-footer">În 25 de ani și peste 300 de declarații depuse, nu am avut nicio amendă.</div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="du-section">
            <div className="du-container">
              <h2 className="du-section-title">Întrebări frecvente</h2>
              <p className="du-section-sub">Ce trebuie să știi despre Declarația Unică în 2026.</p>
              <div className="du-faq-wrap">
                {faqItems.map((item, idx) => (
                  <div key={idx} className={`du-faq-item${openFaq === idx ? " du-open" : ""}`}>
                    <button className="du-faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                      <span>{item.q}</span>
                      <span className="du-faq-icon">+</span>
                    </button>
                    <div className="du-faq-answer">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="du-final-cta">
            <div className="du-container du-final-cta-inner">
              <h2>Nu mai amâna. Deadline-ul se apropie.</h2>
              <p className="du-final-cta-sub">Cu cât suni mai târziu, cu atât crește riscul de amenzi.<br />Rezolvă astăzi în 5 minute.</p>

              <div className="du-countdown-wrap">
                <div className="du-countdown-label">Timp rămas până pe 25 mai 2026</div>
                <div className="du-countdown">
                  <div className="du-countdown-box"><div className="du-countdown-num">{countdown.days}</div><div className="du-countdown-unit">Zile</div></div>
                  <div className="du-countdown-box"><div className="du-countdown-num">{countdown.hours}</div><div className="du-countdown-unit">Ore</div></div>
                  <div className="du-countdown-box"><div className="du-countdown-num">{countdown.mins}</div><div className="du-countdown-unit">Minute</div></div>
                  <div className="du-countdown-box"><div className="du-countdown-num">{countdown.secs}</div><div className="du-countdown-unit">Secunde</div></div>
                </div>
              </div>

              <div className="du-cta-group">
                <a href="tel:+40760937133" className="du-cta-btn du-cta-primary" onClick={() => trackEvent("call_final")}>
                  {phoneSvg} SUNĂ ACUM 0760 937 133
                </a>
                <a href={waHref} className="du-cta-btn du-cta-whatsapp" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_final")}>
                  {waSvg} WHATSAPP
                </a>
                <button className="du-cta-btn du-cta-form" onClick={() => openModal("callback", "final")}>
                  {formSvg} TE SUNĂM NOI
                </button>
              </div>
            </div>
          </section>

        </div>

      {/* STICKY MOBILE BAR */}
      {stickyVisible && (
        <div className="du-sticky-bar">
          <a href="tel:+40760937133" className="du-sticky-call" onClick={() => trackEvent("call_sticky")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            SUNĂ
          </a>
          <a href={waHref} className="du-sticky-wa" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_sticky")}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WHATSAPP
          </a>
        </div>
      )}

      {/* FORM MODAL */}
      <div
        className={`du-modal-overlay${modalOpen ? " du-open" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      >
        <div className="du-modal">
          <button className="du-modal-close" onClick={closeModal} aria-label="Închide">×</button>

          {!formSuccess ? (
            <form onSubmit={submitForm}>
              <span
                className="du-modal-variant-tag"
                style={{ background: isLead ? "#f1b500" : "#2e8b57" }}
              >
                {isLead ? "Verificare GRATUITĂ" : "100% Gratuit • Răspuns în 4 ore"}
              </span>
              <h3>{isLead ? "Verificare gratuită în 5 minute" : "Te sunăm noi în maxim 4 ore"}</h3>
              <p className="du-modal-sub">
                {isLead
                  ? "Te sunăm și verificăm împreună dacă trebuie să depui Declarația Unică în 2026 și ce documente îți trebuie. Fără obligații, fără costuri."
                  : "Lasă-ne numărul tău și te contactăm pentru detalii despre pachetul Declarația Unică + SPV de 497 LEI."}
              </p>

              <div className="du-form-group">
                <label className="du-form-label" htmlFor="du-phone">Telefon *</label>
                <input type="tel" id="du-phone" name="phone" className="du-form-input" placeholder="Ex: 0760 937 133" autoComplete="tel" required />
              </div>
              <div className="du-form-group">
                <label className="du-form-label" htmlFor="du-name">Nume *</label>
                <input type="text" id="du-name" name="name" className="du-form-input" placeholder="Ex: Ion Popescu" autoComplete="name" required />
              </div>

              {isLead && (
                <div className="du-form-group">
                  <label className="du-form-label" htmlFor="du-situation">Situația ta fiscală</label>
                  <select id="du-situation" name="situation" className="du-form-select">
                    <option value="">Selectează (opțional)</option>
                    <option value="chirii">Venituri din chirii</option>
                    <option value="pfa">PFA / II / IF</option>
                    <option value="dividende">Dividende</option>
                    <option value="strainatate">Venituri din străinătate</option>
                    <option value="cripto">Cripto / investiții</option>
                    <option value="altele">Altele / Nu sunt sigur</option>
                  </select>
                </div>
              )}

              <label className="du-form-checkbox-row">
                <input type="checkbox" required />
                <span>
                  Sunt de acord cu prelucrarea datelor mele personale conform{" "}
                  <a href="/confidentialitate" target="_blank" style={{ color: "#2365c3" }}>Politicii de confidențialitate</a>.
                  Datele sunt folosite exclusiv pentru a fi contactat în legătură cu serviciul solicitat.
                </span>
              </label>

              <button type="submit" className="du-form-submit" disabled={submitting}>
                {submitting ? "Se trimite..." : (isLead ? "Vreau verificarea gratuită →" : "Vreau să fiu sunat →")}
              </button>
            </form>
          ) : (
            <div className="du-form-success">
              <div className="du-form-success-icon">✓</div>
              <h3>Mulțumim!</h3>
              <p>Te sunăm în maxim 4 ore.</p>
              <p>Pentru urgențe, sună direct la <strong>+40 760 937 133</strong></p>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}
