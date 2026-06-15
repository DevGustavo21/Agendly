"use client";

import { useState } from "react";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

type Tab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  points: string[];
  stats: { big: string; label: string }[];
};

const tabs: Tab[] = [
  {
    id: "reservas",
    label: "Reservas",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
    title: "Reservas en línea, 24/7",
    desc: "Tus clientes agendan desde su teléfono en menos de un minuto, sin una sola llamada.",
    points: [
      "Página de reservas con tu logo y tu enlace propio",
      "Disponibilidad en tiempo real, sin dobles citas",
      "Enlace para WhatsApp, Instagram y código QR",
      "Registro manual de citas desde el panel",
    ],
    stats: [
      { big: "24/7", label: "Reservas en línea" },
      { big: "<1 min", label: "Para agendar" },
    ],
  },
  {
    id: "agenda",
    label: "Agenda",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    title: "Tu agenda, siempre en orden",
    desc: "Calendario por profesional con bloqueo de días, horarios y cupos por hora.",
    points: [
      "Vista por día, semana y profesional",
      "Bloqueo de días y horas no disponibles",
      "Cupos por hora y servicios asignados",
      "Citas recurrentes y de seguimiento",
    ],
    stats: [
      { big: "0", label: "Dobles reservas" },
      { big: "Multi", label: "Calendarios" },
    ],
  },
  {
    id: "recordatorios",
    label: "Recordatorios",
    icon: (
      <svg {...iconProps}>
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    title: "Recordatorios que reducen ausencias",
    desc: "Avisos automáticos antes de cada cita, con confirmación en un solo toque.",
    points: [
      "Recordatorios por WhatsApp (24 h y 2 h antes)",
      "Confirmación y cancelación con un toque",
      "Aviso automático al liberar un horario",
      "Confirmaciones por correo incluidas",
    ],
    stats: [
      { big: "24 h / 2 h", label: "Antes de la cita" },
      { big: "1 toque", label: "Confirmar o cancelar" },
    ],
  },
  {
    id: "equipo",
    label: "Equipo",
    icon: (
      <svg {...iconProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Cada quien sabe qué hace y cuándo",
    desc: "Roles, servicios y horarios por colaborador, en un panel claro para ti.",
    points: [
      "Perfil por colaborador con sus servicios",
      "Horarios y días libres personalizados",
      "Roles y control de acceso (doctor y recepción)",
      "Rendimiento y citas por persona",
    ],
    stats: [
      { big: "Hasta 10", label: "Usuarios con roles" },
      { big: "Por persona", label: "Agenda y métricas" },
    ],
  },
  {
    id: "fichas",
    label: "Fichas",
    icon: (
      <svg {...iconProps}>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
    title: "Toda la historia de tu cliente",
    desc: "Ficha y expediente por cliente con su historial, junto a cada cita.",
    points: [
      "Ficha por cliente con historial completo",
      "Expediente integrado junto a cada cita",
      "Portal del cliente para consultar su ficha",
      "Exporta y conserva tu información cuando quieras",
    ],
    stats: [
      { big: "1 lugar", label: "Historial y citas" },
      { big: "Tuyo", label: "Exportable siempre" },
    ],
  },
  {
    id: "importar",
    label: "Importar",
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h2M14 13h2M8 17h2M14 17h2" />
      </svg>
    ),
    title: "Trae tus datos sin perder nada",
    desc: "Importa tus clientes, contactos e historial desde Excel o CSV de tu plataforma anterior, en minutos.",
    points: [
      "Importa desde archivos CSV o Excel (.xlsx)",
      "Migra clientes, contactos e historial de citas",
      "Asigna cada columna a su campo antes de confirmar",
      "Detecta duplicados para no repetir registros",
    ],
    stats: [
      { big: "CSV · Excel", label: "Formatos aceptados" },
      { big: "0", label: "Datos perdidos" },
    ],
  },
  {
    id: "analiticas",
    label: "Analíticas",
    icon: (
      <svg {...iconProps}>
        <path d="M3 3v18h18" />
        <rect x="7" y="12" width="3" height="6" />
        <rect x="12" y="8" width="3" height="10" />
        <rect x="17" y="5" width="3" height="13" />
      </svg>
    ),
    title: "Decisiones con datos, no a ciegas",
    desc: "Ocupación, ausentismo y desempeño de tu negocio en tu propio panel.",
    points: [
      "Analíticas de tu negocio en tu panel",
      "Tasa de ausentismo y ocupación",
      "Citas y rendimiento por profesional",
      "Solicitud automática de reseñas",
    ],
    stats: [
      { big: "Ocupación", label: "En tiempo real" },
      { big: "Ausentismo", label: "Bajo control" },
    ],
  },
];

function Visual({ id }: { id: string }) {
  const head = (label: string) => (
    <div className="ftv__head">
      <span className="ftv__dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="ftv__label">{label}</span>
    </div>
  );

  if (id === "reservas") {
    return (
      <div className="ftv">
        {head("Reserva en línea")}
        <div className="ftv__days">
          {["Lun", "Mar", "Mié", "Jue", "Vie"].map((d, i) => (
            <span key={d} className={`ftv__day${i === 1 ? " is-on" : ""}`}>
              {d}
            </span>
          ))}
        </div>
        <div className="ftv__slots">
          {["09:00", "10:30", "12:00", "16:00"].map((s, i) => (
            <span key={s} className={`ftv__slot${i === 1 ? " is-on" : ""}`}>
              {s}
            </span>
          ))}
        </div>
        <span className="ftv__cta">Confirmar reserva</span>
      </div>
    );
  }

  if (id === "agenda") {
    const cols: { d: string; chips: string[] }[] = [
      { d: "Lun", chips: ["a"] },
      { d: "Mar", chips: ["b", "c"] },
      { d: "Mié", chips: ["a"] },
      { d: "Jue", chips: ["c"] },
      { d: "Vie", chips: ["b", "a"] },
    ];
    return (
      <div className="ftv">
        {head("Tu semana")}
        <div className="ftv__cal">
          {cols.map((c) => (
            <div className="ftv__col" key={c.d}>
              <span className="ftv__colhd">{c.d}</span>
              {c.chips.map((v, i) => (
                <span key={i} className={`ftv__chip-cal ftv__chip-cal--${v}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === "recordatorios") {
    return (
      <div className="ftv">
        {head("Recordatorio")}
        <div className="ftv__msg">
          Hola, te recordamos tu cita mañana a las 10:00. ¿Confirmas tu
          asistencia?
        </div>
        <div className="ftv__msg ftv__msg--me">Confirmar ✓</div>
        <span className="ftv__meta">Enviado por WhatsApp · 24 h antes</span>
      </div>
    );
  }

  if (id === "equipo") {
    const rows = [
      { in: "LG", name: "Laura G.", role: "Doctora", w: "92%", c: "a" },
      { in: "MR", name: "Marco R.", role: "Recepción", w: "74%", c: "b" },
      { in: "KV", name: "Kevin V.", role: "Doctor", w: "61%", c: "c" },
      { in: "JP", name: "José P.", role: "Recepción", w: "48%", c: "a" },
    ];
    return (
      <div className="ftv">
        {head("Rendimiento del equipo · esta semana")}
        <div className="ftv__rows">
          {rows.map((r) => (
            <div className="ftv__row" key={r.in}>
              <span className={`ftv__avatar ftv__avatar--${r.c}`}>{r.in}</span>
              <div className="ftv__rowtxt">
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </div>
              <span className="ftv__track">
                <span
                  className={`ftv__fill ftv__fill--${r.c}`}
                  style={{ width: r.w }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === "fichas") {
    return (
      <div className="ftv">
        {head("Ficha del cliente")}
        <div className="ftv__person">
          <span className="ftv__avatar ftv__avatar--a ftv__avatar--lg">AC</span>
          <div className="ftv__rowtxt">
            <strong>Ana Castro</strong>
            <span>Cliente desde 2024</span>
          </div>
        </div>
        <div className="ftv__kv">
          <span>Última visita</span>
          <b>12 may</b>
        </div>
        <div className="ftv__kv">
          <span>Próxima cita</span>
          <b>3 jun · 10:00</b>
        </div>
        <div className="ftv__chips">
          <span className="ftv__chip">Control</span>
          <span className="ftv__chip">Seguimiento</span>
        </div>
      </div>
    );
  }

  if (id === "importar") {
    const map = [
      { from: "Nombre", to: "Cliente" },
      { from: "Teléfono", to: "Contacto" },
      { from: "Última cita", to: "Historial" },
    ];
    return (
      <div className="ftv">
        {head("Importar datos")}
        <div className="ftv__file">
          <span className="ftv__fileicon" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M8 13h2M14 13h2M8 17h2M14 17h2" />
            </svg>
          </span>
          <div className="ftv__rowtxt">
            <strong>pacientes.xlsx</strong>
            <span>1,248 filas detectadas</span>
          </div>
        </div>
        <div className="ftv__map">
          {map.map((m) => (
            <div className="ftv__maprow" key={m.from}>
              <span>{m.from}</span>
              <i aria-hidden="true">→</i>
              <b>{m.to}</b>
            </div>
          ))}
        </div>
        <span className="ftv__cta">Importar 1,248 registros</span>
      </div>
    );
  }

  // analiticas
  const bars = ["48%", "66%", "54%", "82%", "71%", "90%", "63%"];
  return (
    <div className="ftv">
      {head("Ocupación · últimos 7 días")}
      <div className="ftv__chart">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`ftv__cbar${i === 5 ? " is-peak" : ""}`}
            style={{ height: h }}
          />
        ))}
      </div>
      <div className="ftv__statrow">
        <div>
          <strong>Ocupación</strong>
          <span>Semana en alza</span>
        </div>
        <div>
          <strong>Ausentismo</strong>
          <span>A la baja</span>
        </div>
      </div>
    </div>
  );
}

export default function FeatureTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section className="section wrap feattabs" id="incluye">
      <div className="section__head rise">
        <span className="eyebrow">Lo que incluye</span>
        <h2 className="section__title">
          Una plataforma.{" "}
          <em>Todo lo que tu negocio necesita.</em>
        </h2>
        <p className="section__lede">
          Toca cada herramienta para ver cómo funciona.
        </p>
      </div>

      <div className="feattabs__tabs" role="tablist" aria-label="Herramientas">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={t.id === active}
            className={`feattabs__tab${t.id === active ? " is-active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      <div className="feattabs__panel">
        <div className="feattabs__copy" key={current.id}>
          <h3>{current.title}</h3>
          <p className="feattabs__desc">{current.desc}</p>
          <ul className="feattabs__list">
            {current.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="feattabs__stats">
            {current.stats.map((s) => (
              <div className="ft-stat" key={s.label}>
                <strong>{s.big}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="feattabs__visual" key={`v-${current.id}`}>
          <Visual id={current.id} />
        </div>
      </div>
    </section>
  );
}
