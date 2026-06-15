import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Agenda de citas en línea`,
    short_name: SITE_NAME,
    description:
      "Tus clientes reservan en línea 24/7. Tú administras agenda, fichas y analíticas desde un solo panel.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6fafb",
    theme_color: "#f6fafb",
    lang: "es",
    icons: [
      {
        src: "/agendly-icon-512.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/agendly-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/agendly-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
