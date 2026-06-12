import type { Metadata, Viewport } from "next";
import { Geist, Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["600"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Agendly — Agenda de citas en línea para clínicas, consultorios y negocios con cita previa",
    template: "%s · Agendly",
  },
  description:
    "Plataforma de agendamiento: tus clientes reservan en línea 24/7 y tú administras agenda, fichas y analíticas desde un solo panel. Para clínicas, veterinarias, barberías y más. Plan Pro con recordatorios por mensaje.",
  keywords: [
    "agenda de citas médicas",
    "citas médicas en línea",
    "software para consultorio médico",
    "agendamiento médico",
    "sistema de citas para clínicas",
    "expediente clínico electrónico",
    "recordatorios de citas por mensaje",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Agendly",
    title: "Agendly — Agenda de citas en línea",
    description:
      "Tus clientes reservan en línea 24/7. Tú administras agenda, fichas y analíticas desde un solo panel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agendly — Agenda de citas en línea",
    description:
      "Tus clientes reservan en línea 24/7. Tú administras agenda, fichas y analíticas desde un solo panel.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f6fafb",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${outfit.variable} ${fraunces.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
