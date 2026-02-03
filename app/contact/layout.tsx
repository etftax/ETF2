import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Evolution Tax Finance - Consultanță Contabilitate",
  description: "Contactează-ne pentru servicii de contabilitate și consultanță fiscală. Programează o consultație gratuită. Răspundem în maximum 4 ore lucrătoare.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact - Evolution Tax Finance",
    description: "Contactează-ne pentru servicii de contabilitate și consultanță fiscală. Programează o consultație gratuită.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
