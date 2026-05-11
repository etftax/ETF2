import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  servicii: [
    { name: "Contabilitate", href: "/servicii#contabilitate" },
    { name: "Consultanță fiscală", href: "/servicii#fiscalitate" },
    { name: "Consultanță financiară", href: "/servicii#financiar" },
    { name: "HR & Payroll", href: "/servicii#hr" },
  ],
  companie: [
    { name: "Despre noi", href: "/despre" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Politica de confidențialitate", href: "/confidentialitate" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <div className="flex flex-col">
                <span className="font-serif text-xl font-medium tracking-tight">Evolution Tax Finance</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Firmă de contabilitate, fiscalitate și consultanță financiară, dedicată susținerii companiilor în luarea deciziilor corecte și sustenabile.
            </p>
            <div className="space-y-1.5 text-sm text-white/70">
              <p>etftax@gmail.com</p>
              <p>+40 744 364 603</p>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-medium text-white/90 uppercase tracking-wider mb-5">Servicii</h4>
            <ul className="space-y-3">
              {footerLinks.servicii.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium text-white/90 uppercase tracking-wider mb-5">Companie</h4>
            <ul className="space-y-3">
              {footerLinks.companie.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links & Accreditations */}
          <div>
            <h4 className="text-sm font-medium text-white/90 uppercase tracking-wider mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://anpc.ro/ce-este-sal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Soluționarea alternativă a litigiilor (ANPC)
                </a>
              </li>
              <li>
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Soluționarea online a litigiilor (ODR)
                </a>
              </li>
            </ul>

            {/* Accreditations - Subtle */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 mb-3">Acreditări profesionale</p>
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/50 px-2.5 py-1 border border-white/15 rounded">
                  CECCAR
                </span>
                <span className="text-xs text-white/50 px-2.5 py-1 border border-white/15 rounded">
                  CAFR
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Evolution Tax Finance. Toate drepturile rezervate.</p>
          <p className="text-[11px] text-white/30">
            Dezvoltat cu ❤️ by{" "}
            <a
              href="https://www.ooch.media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              OOCH.MEDIA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
