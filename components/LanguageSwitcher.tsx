import Link from "next/link";

interface LanguageSwitcherProps {
  currentLang: "ro" | "en";
  variant?: "light" | "dark";
}

// Romanian Flag SVG
const RomanianFlag = () => (
  <svg viewBox="0 0 3 2" className="w-5 h-3.5 rounded-sm overflow-hidden">
    <rect width="1" height="2" x="0" fill="#002B7F" />
    <rect width="1" height="2" x="1" fill="#FCD116" />
    <rect width="1" height="2" x="2" fill="#CE1126" />
  </svg>
);

// UK Flag SVG
const UKFlag = () => (
  <svg viewBox="0 0 60 30" className="w-5 h-3.5 rounded-sm overflow-hidden">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

export default function LanguageSwitcher({ currentLang, variant = "dark" }: LanguageSwitcherProps) {
  const roHref = currentLang === "en" ? "/" : "#";
  const enHref = currentLang === "ro" ? "/en" : "#";

  return (
    <div className="flex items-center gap-2">
      <Link
        href={roHref}
        className={`block transition-opacity hover:opacity-100 ${
          currentLang === "ro" ? "opacity-100" : "opacity-50"
        }`}
        aria-label="Română"
      >
        <RomanianFlag />
      </Link>
      <Link
        href={enHref}
        className={`block transition-opacity hover:opacity-100 ${
          currentLang === "en" ? "opacity-100" : "opacity-50"
        }`}
        aria-label="English"
      >
        <UKFlag />
      </Link>
    </div>
  );
}
