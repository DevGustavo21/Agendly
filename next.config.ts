import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exporta HTML estático (sin servidor Node) para subir a hosting compartido
  // como BanaHosting. `next build` genera la carpeta "out" (el script la
  // renombra a "build"). Dev sigue usando .next normalmente.
  output: "export",
  trailingSlash: true,
  images: {
    // El optimizador de imágenes necesita servidor; en estático se desactiva.
    unoptimized: true,
  },
};

export default nextConfig;
