import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/agendly-logo.png";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description:
    "La página que buscas no existe o cambió de lugar. Vuelve al inicio de Agendly.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf__aurora" aria-hidden="true" />
      <div className="nf__inner">
        <a href="/" className="nf__brand" aria-label="Agendly · inicio">
          <Image src={logo} alt="Agendly" className="brand-logo" priority />
        </a>

        <span className="eyebrow">Error 404</span>
        <p className="nf__code" aria-hidden="true">
          404
        </p>
        <h1 className="nf__title">Esta página se nos salió de la agenda</h1>
        <p className="nf__lede">
          La página que buscas no existe o cambió de lugar. Pero tu próxima cita
          sí está a un clic.
        </p>

        <div className="nf__actions">
          <a href="/" className="btn btn--fill">
            Volver al inicio
          </a>
          <a href="/#precios" className="btn btn--ghost">
            Ver precios
          </a>
        </div>

        <nav className="nf__links" aria-label="Enlaces útiles">
          <a href="/#para-quien">Para quién es</a>
          <a href="/#incluye">Lo que incluye</a>
          <a href="/#faq">Preguntas frecuentes</a>
          <a href="/#demo">Solicitar demo</a>
        </nav>
      </div>
    </main>
  );
}
