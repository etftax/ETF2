import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Evolution Tax Finance | Contabilitate și Consultanță Fiscală București",
  description: "Servicii profesionale de contabilitate, consultanță fiscală, audit și payroll pentru companii din România. Expertiză în fiscalitate și servicii CFO externalizat.",
  keywords: "contabilitate, consultanță fiscală, audit, payroll, CFO externalizat, servicii financiare, București, România",
  authors: [{ name: "Evolution Tax Finance SRL" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Evolution Tax Finance | Contabilitate și Consultanță Fiscală",
    description: "Servicii profesionale de contabilitate, consultanță fiscală, audit și payroll pentru companii din România.",
    type: "website",
    locale: "ro_RO",
    siteName: "Evolution Tax Finance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://evolutiontaxfinance.ro" />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
