import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const footerLinks = {
  services: [
    { name: "Accounting", href: "/en/services#accounting" },
    { name: "Tax Advisory", href: "/en/services#tax" },
    { name: "Financial Consulting", href: "/en/services#financial" },
    { name: "HR & Payroll", href: "/en/services#hr" },
    { name: "Audit", href: "/en/services#audit" },
    { name: "Legal Support", href: "/en/services#legal" },
  ],
  company: [
    { name: "About Us", href: "/en/about" },
    { name: "Contact", href: "/en/contact" },
    { name: "Privacy Policy", href: "/en/privacy" },
  ],
};

export default function FooterEN() {
  return (
    <>
      {/* Credit Section - Above Footer */}
      <div className="bg-secondary py-4 border-t border-border">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            Developed with care by{" "}
            <a
              href="https://www.ooch.media"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/70 hover:text-accent hover:underline transition-colors"
            >
              OOCH.MEDIA
            </a>
          </p>
        </div>
      </div>

      <footer className="bg-primary text-primary-foreground">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand & Company Info */}
            <div className="lg:col-span-2">
              <Link href="/en" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">ETF</span>
                </div>
                <span className="text-primary-foreground font-semibold text-lg">
                  Evolution Tax Finance SRL
                </span>
              </Link>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
                Professional accounting, tax, and financial consulting services
                for companies in Romania.
              </p>
              <div className="text-primary-foreground/60 text-sm space-y-1 mb-6">
                <p>
                  <strong className="text-primary-foreground">Address:</strong>{" "}
                  Str. Sarafinesti 16, sector 2, Bucharest
                </p>
                <p>
                  <strong className="text-primary-foreground">Tax ID:</strong> 35486370
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="tel:+40744364603"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  aria-label="Call +40 744 364 603"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:etftax@gmail.com"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  aria-label="Email etftax@gmail.com"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-primary-foreground font-medium mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-primary-foreground font-medium mb-4">Company</h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <LanguageSwitcher currentLang="en" />
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-primary-foreground font-medium mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-primary-foreground/60">
                <p>
                  <strong className="text-primary-foreground">Email:</strong>
                  <br />
                  <a
                    href="mailto:etftax@gmail.com"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    etftax@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-primary-foreground">Phone:</strong>
                  <br />
                  <a
                    href="tel:+40744364603"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    +40 744 364 603
                  </a>
                </p>
                <p>
                  <strong className="text-primary-foreground">Hours:</strong>
                  <br />
                  Monday - Friday: 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/40 text-sm">
              © {new Date().getFullYear()} Evolution Tax Finance SRL. Tax ID: 35486370. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/en/privacy"
                className="text-primary-foreground/40 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
