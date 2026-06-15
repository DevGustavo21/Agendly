import type { Metadata, Viewport } from "next";
import { Geist, Fraunces, Outfit } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Agendly — Agenda de citas en línea para clínicas, consultorios y negocios con cita previa",
    template: "%s · Agendly",
  },
  description:
    "Plataforma de agendamiento: tus clientes reservan en línea 24/7 y tú administras agenda, fichas y analíticas desde un solo panel. Para clínicas, veterinarias, barberías y más. Plan Pro con recordatorios por mensaje.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "agenda de citas en línea",
    "software de citas",
    "agendamiento en línea",
    "sistema de reservas",
    "agenda de citas médicas",
    "software para consultorio médico",
    "sistema de citas para clínicas",
    "expediente clínico electrónico",
    "agenda para veterinarias",
    "software para barberías",
    "reservas para spa y estética",
    "recordatorios de citas por WhatsApp",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "4CUgxOUTbzH7zoigA3kV3GYUt0HubC6aFp974jY_LrQ",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Agendly — Agenda de citas en línea, 24/7",
    description:
      "Tus clientes reservan en línea 24/7. Tú administras agenda, fichas y analíticas desde un solo panel. Para clínicas, veterinarias, barberías y más.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agendly — Agenda de citas en línea, 24/7",
    description:
      "Tus clientes reservan en línea 24/7. Tú administras agenda, fichas y analíticas desde un solo panel.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
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
