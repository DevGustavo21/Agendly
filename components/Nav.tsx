"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/agendly-logo.png";

const links = [
  { href: "#caracteristicas", label: "Características" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "Preguntas" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 56rem)");
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="nav-pill" aria-label="Principal">
        <a href="#inicio" className="brand" aria-label="Agendly · inicio">
          <Image src={logo} alt="Agendly" className="brand-logo" priority />
        </a>
        <ul className="nav-pill__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#demo" className="btn btn--fill">
          Solicitar demo
        </a>
        <button
          type="button"
          className="nav-pill__toggle"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">
            {open ? "Cerrar menú" : "Abrir menú"}
          </span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M4 4l14 14" />
                <path d="M18 4L4 18" />
              </>
            ) : (
              <>
                <path d="M3 7h16" />
                <path d="M3 15h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <button
        type="button"
        className={`nav-overlay${open ? " is-open" : ""}`}
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />

      <div
        id="menu-movil"
        className={`nav-sheet${open ? " is-open" : ""}`}
        aria-label="Menú de navegación"
      >
        <ul className="nav-sheet__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                <span>{l.label}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#demo"
          className="btn btn--fill nav-sheet__cta"
          onClick={() => setOpen(false)}
        >
          Solicitar demo
        </a>

        <p className="nav-sheet__foot">
          <span>Sin instalaciones</span>
          <span>Soporte en español</span>
        </p>
      </div>
    </>
  );
}
