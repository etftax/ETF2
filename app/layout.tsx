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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
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
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MC43KHST');`}
        </Script>
        {/* End Google Tag Manager */}
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MC43KHST"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
