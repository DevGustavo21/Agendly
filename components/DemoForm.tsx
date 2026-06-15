"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@agendly.lat";

export default function DemoForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Quiero una demo de Agendly");
    const body = encodeURIComponent(
      `Hola, me interesa conocer Agendly para mi negocio.\n\nMi correo: ${email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="cta-form" onSubmit={handleSubmit}>
      <label htmlFor="email-demo" className="visually-hidden">
        Correo electrónico de tu consultorio
      </label>
      <input
        id="email-demo"
        type="email"
        required
        placeholder="tucorreo@clinica.com"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn btn--fill">
        Solicitar demo →
      </button>
      <p className="cta-form__hint">
        Te escribimos para agendar una demostración. Sin compromiso.
      </p>
    </form>
  );
}
