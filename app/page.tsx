import Image from "next/image";
import Nav from "@/components/Nav";
import DemoForm from "@/components/DemoForm";
import FeatureTabs from "@/components/FeatureTabs";
import { SITE_URL } from "@/lib/site";
import logo from "@/public/agendly-logo.png";

const faqs = [
  {
    q: "¿Necesito instalar algo en mi consultorio?",
    a: "No. Agendly funciona en el navegador, en computadora, tablet o celular. Entras con tu usuario y tu agenda está ahí.",
  },
  {
    q: "¿Mis pacientes necesitan descargar una app?",
    a: "No. Reciben una liga — por WhatsApp, redes o tu sitio — y agendan desde el navegador de su teléfono en menos de un minuto.",
  },
  {
    q: "¿Puedo traer mis datos de otra plataforma?",
    a: "Sí. Importas tus clientes, contactos e historial desde un archivo Excel o CSV: asignas cada columna a su campo y Agendly detecta duplicados antes de confirmar, para que no pierdas la información de tus pacientes al cambiarte.",
  },
  {
    q: "¿Puedo seguir registrando citas que me llegan por teléfono?",
    a: "Sí. Desde el panel administrativo agregas citas a mano en segundos y quedan en el mismo calendario que las reservas en línea, sin dobles reservas.",
  },
  {
    q: "¿Qué pasa con los datos de mis pacientes?",
    a: "El expediente pertenece a tu consultorio. El acceso está protegido por usuario y contraseña, y puedes exportar o eliminar tu información cuando lo decidas.",
  },
  {
    q: "¿Cómo funcionan los recordatorios del plan Pro?",
    a: "Antes de cada cita, el paciente recibe un mensaje con la fecha, la hora y los datos de tu consultorio, con opción de confirmar. Tú ves el estado de cada cita en el calendario.",
  },
  {
    q: "¿Puedo empezar con el plan Regular y cambiar a Pro después?",
    a: "Sí, cuando quieras. Conservas tu agenda, tus expedientes y tu historial — solo se activan las funciones adicionales.",
  },
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const audiences = [
  {
    title: "Clínicas y consultorios",
    desc: "Agenda, expediente y recordatorios para que cada paciente llegue a tiempo.",
    icon: (
      <svg {...iconProps}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
      </svg>
    ),
  },
  {
    title: "Dentistas",
    desc: "Tratamientos por sesión, control de citas y recordatorios automáticos.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 5.5c-1.074-.586-2.583-1.5-4-1.5-2.21 0-4 1.79-4 4 0 1.272.47 2.62.898 4.534.43 1.926.995 4.214 1.602 6.466.18.66.47 1.5 1 1.5.66 0 .816-1.04 1-1.75.3-1.17.582-2.355.896-3.534.21-.79.5-1.916 1.604-1.916s1.394 1.126 1.604 1.916c.314 1.179.596 2.364.896 3.534.184.71.34 1.75 1 1.75.53 0 .82-.84 1-1.5.607-2.252 1.172-4.54 1.602-6.466.428-1.914.898-3.262.898-4.534 0-2.21-1.79-4-4-4-1.417 0-2.926.914-4 1.5Z" />
      </svg>
    ),
  },
  {
    title: "Veterinarias",
    desc: "Reserva por mascota y dueño, historial clínico y avisos de seguimiento.",
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="4" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="20" cy="16" r="2" />
        <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
      </svg>
    ),
  },
  {
    title: "Barberías y peluquerías",
    desc: "Agenda por profesional, sin cruces de citas y con clientes propios.",
    icon: (
      <svg {...iconProps}>
        <circle cx="6" cy="6" r="3" />
        <path d="M8.12 8.12 12 12" />
        <path d="M20 4 8.12 15.88" />
        <circle cx="6" cy="18" r="3" />
        <path d="M14.8 14.8 20 20" />
      </svg>
    ),
  },
  {
    title: "Spa, estética y belleza",
    desc: "Reservas tranquilas, confirmaciones automáticas y clientes que regresan.",
    icon: (
      <svg {...iconProps}>
        <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0Z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
      </svg>
    ),
  },
  {
    title: "Nutrición, fisio y psicología",
    desc: "Sesiones recurrentes, fichas y recordatorios para no perder el seguimiento.",
    icon: (
      <svg {...iconProps}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Agendly",
      url: SITE_URL,
      logo: `${SITE_URL}/agendly-icon-512.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Agendly",
      inLanguage: "es",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Agendly",
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Plataforma de agendamiento de citas en línea para clínicas, consultorios, veterinarias, barberías y negocios con cita previa: reservas 24/7, panel administrativo, calendario, fichas y analíticas. Plan Pro con recordatorios por WhatsApp.",
      inLanguage: "es",
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: [
        {
          "@type": "Offer",
          name: "Regular",
          price: "25",
          priceCurrency: "USD",
          category: "subscription",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "35",
          priceCurrency: "USD",
          category: "subscription",
        },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Clínicas, consultorios, veterinarias, barberías y negocios con cita previa",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      <main id="inicio">
        {/* ===== Hero · showcase shell ===== */}
        <header className="hero wrap">
          <div className="hero__shell">
            <div className="hero__aurora" aria-hidden="true" />
            <div className="hero__grid">
              <div>
                <span
                  className="eyebrow hero__eyebrow reveal"
                  style={{ "--i": 0 } as React.CSSProperties}
                >
                  Agenda de citas en línea
                </span>
                <h1
                  className="hero__title reveal"
                  style={{ "--i": 1 } as React.CSSProperties}
                >
                  Menos llamadas. <strong>Más consultas.</strong>
                </h1>
                <p
                  className="hero__lede reveal"
                  style={{ "--i": 2 } as React.CSSProperties}
                >
                  Agendly es la plataforma de agendamiento para clínicas,
                  veterinarias, barberías y cualquier negocio que trabaja con
                  cita previa: tus clientes reservan en línea a cualquier hora, y
                  tú administras agenda, fichas y analíticas desde un solo panel.
                </p>
                <div
                  className="hero__actions reveal"
                  style={{ "--i": 3 } as React.CSSProperties}
                >
                  <a href="#demo" className="btn btn--fill">
                    Solicitar demo
                  </a>
                  <a href="#precios" className="btn btn--ghost">
                    Ver precios
                  </a>
                </div>
                <ul
                  className="hero__trust reveal"
                  style={{ "--i": 4 } as React.CSSProperties}
                >
                  <li>Sin instalaciones</li>
                  <li>Datos protegidos</li>
                  <li>Soporte en español</li>
                </ul>
              </div>

              {/* Prueba visual del producto — construida en CSS, sin chrome falso */}
              <div
                className="agenda reveal"
                style={{ "--i": 3 } as React.CSSProperties}
                aria-hidden="true"
              >
                <div className="agenda__card">
                  <div className="agenda__head">
                    <span className="agenda__date">Hoy · jueves 11</span>
                    <span className="agenda__count">6 citas</span>
                  </div>
                  <ul className="agenda__list">
                    <li className="agenda__slot">
                      <span className="agenda__time">09:00</span>
                      <span className="agenda__who">
                        <span className="agenda__name">Mariana Soto</span>
                        <span className="agenda__type">Primera consulta</span>
                      </span>
                      <span className="agenda__status">Confirmada</span>
                    </li>
                    <li className="agenda__slot">
                      <span className="agenda__time">09:40</span>
                      <span className="agenda__who">
                        <span className="agenda__name">Diego Herrera</span>
                        <span className="agenda__type">Seguimiento</span>
                      </span>
                      <span className="agenda__status">Confirmada</span>
                    </li>
                    <li className="agenda__slot">
                      <span className="agenda__time">10:20</span>
                      <span className="agenda__who">
                        <span className="agenda__name">Lucía Andrade</span>
                        <span className="agenda__type">
                          Reservó en línea · 8:12 a. m.
                        </span>
                      </span>
                      <span className="agenda__status agenda__status--new">
                        Nueva
                      </span>
                    </li>
                    <li className="agenda__slot">
                      <span className="agenda__time">11:00</span>
                      <span className="agenda__who">
                        <span className="agenda__name">Tomás Rivelles</span>
                        <span className="agenda__type">
                          Registrada por recepción
                        </span>
                      </span>
                      <span className="agenda__status">Confirmada</span>
                    </li>
                  </ul>
                </div>
                <p className="agenda__toast">Recordatorio enviado · Plan Pro</p>
              </div>
            </div>
          </div>

        </header>

        {/* ===== Para quién es ===== */}
        <section className="section wrap" id="para-quien">
          <div className="section__head rise">
            <span className="eyebrow">Para quién es</span>
            <h2 className="section__title">
              Hecho para negocios que viven de sus citas
            </h2>
            <p className="section__lede">
              Si tu día depende de horarios, citas y clientes que regresan,
              Agendly se adapta a tu forma de trabajar — desde una clínica hasta
              una barbería.
            </p>
          </div>
          <div className="audience__grid">
            {audiences.map((a, i) => (
              <article
                className={`aud-card aud-card--${i + 1} rise`}
                key={a.title}
              >
                <span className="aud-card__icon" aria-hidden="true">
                  {a.icon}
                </span>
                <div className="aud-card__body">
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===== Características · 3 gradient cards ===== */}
        <section className="section wrap features" id="caracteristicas">
          <div className="features__head rise">
            <span className="eyebrow">Características</span>
            <h2 className="features__title">
              Todo tu consultorio en una pantalla
            </h2>
            <p className="features__sub">
              Las tres piezas que convierten una agenda telefónica en un negocio
              que se administra solo — desde una clínica hasta una barbería.
            </p>
          </div>

          <div className="features__grid">
            <article className="fcard fcard--1 rise">
              <div className="fcard__art" aria-hidden="true">
                <div className="fc-panel">
                  <span className="fc-panel__title">Elige tu horario</span>
                  <div className="fc-slots">
                    <span className="fc-slot">09:00</span>
                    <span className="fc-slot fc-slot--on">10:30</span>
                    <span className="fc-slot">12:00</span>
                    <span className="fc-slot">16:00</span>
                  </div>
                </div>
                <svg
                  className="fc-cursor"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 2L20 11L11 13L9 22L4 2Z"
                    fill="var(--color-ink)"
                    stroke="var(--color-paper)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="fcard__body">
                <h3>Reservas en línea, 24/7</h3>
                <p>
                  Tus clientes agendan desde el teléfono en menos de un minuto,
                  sin una sola llamada.
                </p>
              </div>
            </article>

            <article className="fcard fcard--2 rise">
              <div className="fcard__art" aria-hidden="true">
                <div className="fc-panel">
                  <span className="fc-panel__title">Tu consulta de un vistazo</span>
                  <div className="fc-chart">
                    <span className="fc-bar" style={{ height: "45%" }} />
                    <span className="fc-bar" style={{ height: "68%" }} />
                    <span className="fc-bar fc-bar--accent" style={{ height: "92%" }} />
                    <span className="fc-bar" style={{ height: "58%" }} />
                    <span className="fc-bar" style={{ height: "74%" }} />
                  </div>
                </div>
              </div>
              <div className="fcard__body">
                <h3>Panel y fichas</h3>
                <p>
                  Agenda, historial de cada cliente y analíticas de tu negocio
                  en una sola pantalla.
                </p>
              </div>
            </article>

            <article className="fcard fcard--3 rise">
              <div className="fcard__art" aria-hidden="true">
                <div className="fc-msg">
                  Recordatorio: tu cita es mañana a las 10:00. ¿Confirmas tu
                  asistencia?
                </div>
                <span className="fc-float fc-confirm">Confirmar</span>
              </div>
              <div className="fcard__body">
                <h3>
                  Recordatorios automáticos
                  <span className="pro-tag">Pro</span>
                </h3>
                <p>
                  Cada cliente confirma con un toque. Menos inasistencias,
                  agenda más llena.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ===== Lo que incluye · tabs ===== */}
        <FeatureTabs />

        {/* ===== Cómo funciona · F4 ===== */}
        <section className="section wrap" id="como-funciona">
          <div className="section__head rise">
            <span className="eyebrow">Cómo funciona</span>
            <h2 className="section__title">De la liga a la consulta</h2>
            <p className="section__lede">
              Cuatro pasos entre &ldquo;necesito una cita&rdquo; y un paciente
              sentado en tu consultorio.
            </p>
          </div>
          <ol className="steps">
            <li className="rise">
              <span className="stage">01</span>
              <h3>Comparte tu enlace</h3>
              <p>
                Publica tu liga de reservas en WhatsApp, redes sociales o tu
                sitio. El paciente elige servicio, día y hora entre tus horarios
                disponibles.
              </p>
            </li>
            <li className="rise">
              <span className="stage">02</span>
              <h3>La cita cae en tu calendario</h3>
              <p>
                El horario se bloquea al instante — sin dobles reservas. ¿Te
                llaman por teléfono? La registras a mano desde el panel en
                segundos.
              </p>
            </li>
            <li className="rise">
              <span className="stage">03</span>
              <h3>Atiendes con todo a la mano</h3>
              <p>
                Expediente del paciente, historial de visitas y notas clínicas
                en la misma pantalla donde ves tu día.
              </p>
            </li>
            <li className="rise">
              <span className="stage">04</span>
              <h3>
                El día se confirma solo
                <span className="pro-tag">Pro</span>
              </h3>
              <p>
                Cada paciente recibe recordatorios por mensaje y confirma con un
                toque. Menos inasistencias, agenda más llena.
              </p>
            </li>
          </ol>
        </section>

        {/* ===== Comparativa · F3 ===== */}
        <section className="section--tight section wrap" id="comparativa">
          <div className="section__head rise">
            <span className="eyebrow">Comparativa</span>
            <h2 className="section__title">¿Y cómo se compara?</h2>
            <p className="section__lede">
              Lo que cambia frente a la agenda telefónica de siempre y frente a
              los directorios médicos donde compites por aparecer.
            </p>
          </div>
          <div className="compare rise">
            <table>
              <caption className="visually-hidden">
                Comparativa entre agenda telefónica, directorios médicos y
                Agendly
              </caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="visually-hidden">Aspecto</span>
                  </th>
                  <th scope="col">Teléfono y papel</th>
                  <th scope="col">Directorios médicos</th>
                  <th scope="col" className="compare__us">
                    <span className="compare__us-label">Agendly</span>
                    <span className="compare__us-tag">Recomendado</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Reservas en línea 24/7</th>
                  <td data-label="Teléfono y papel">
                    <span className="no">Solo en horario de oficina</span>
                  </td>
                  <td data-label="Directorios médicos">
                    <span className="si" />
                  </td>
                  <td data-label="Agendly" className="compare__us">
                    <span className="si" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Tu marca y tu enlace propios</th>
                  <td data-label="Teléfono y papel">
                    <span className="si" />
                  </td>
                  <td data-label="Directorios médicos">
                    <span className="no">
                      Apareces junto a otros del listado
                    </span>
                  </td>
                  <td data-label="Agendly" className="compare__us">
                    <span className="si">La página es tuya</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Expediente o ficha integrada</th>
                  <td data-label="Teléfono y papel">
                    <span className="no">En carpetas y archiveros</span>
                  </td>
                  <td data-label="Directorios médicos">
                    <span className="no" />
                  </td>
                  <td data-label="Agendly" className="compare__us">
                    <span className="si">Junto a cada cita</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Analíticas de tu negocio</th>
                  <td data-label="Teléfono y papel">
                    <span className="no" />
                  </td>
                  <td data-label="Directorios médicos">
                    <span className="no">Del directorio, no tuyas</span>
                  </td>
                  <td data-label="Agendly" className="compare__us">
                    <span className="si">En tu panel</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Recordatorios por mensaje</th>
                  <td data-label="Teléfono y papel">
                    <span className="no">Llamada por llamada</span>
                  </td>
                  <td data-label="Directorios médicos">
                    <span className="no">Depende del directorio</span>
                  </td>
                  <td data-label="Agendly" className="compare__us">
                    <span className="si">Automáticos con Pro</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Modelo de costo</th>
                  <td data-label="Teléfono y papel">
                    Tiempo de recepción y llamadas
                  </td>
                  <td data-label="Directorios médicos">
                    Suscripción o pago por contacto
                  </td>
                  <td data-label="Agendly" className="compare__us">
                    Tarifa fija mensual, clientes ilimitados
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Precios ===== */}
        <section className="section wrap" id="precios">
          <div className="section__head rise">
            <span className="eyebrow">Precios</span>
            <h2 className="section__title">Dos planes, sin letra chica</h2>
            <p className="section__lede">
              Tarifa fija mensual por consultorio. Cambia de plan cuando
              quieras, conservando agenda y expedientes.
            </p>
          </div>
          <div className="pricing">
            <article className="plan rise">
              <h3 className="plan__name">Regular</h3>
              <p className="plan__for">
                Para el consultorio que quiere su agenda en orden.
              </p>
              <p className="plan__price">
                <span className="plan__amount">$25</span>
                <span className="plan__period">/ mes</span>
              </p>
              <p className="plan__pending">
                Facturación mensual · IVA no incluido
              </p>
              <a href="#demo" className="btn btn--ghost">
                Empezar con Regular
              </a>
              <ul className="plan__features">
                <li>Hasta 2 usuarios (doctor + recepción)</li>
                <li>Reserva de citas en línea, 24/7</li>
                <li>
                  Página de reservas con tu logo y enlace para WhatsApp,
                  Instagram y código QR
                </li>
                <li>Panel administrativo</li>
                <li>Registro manual de citas</li>
                <li>
                  Calendario con bloqueo de días/horas y cupos por hora
                </li>
                <li>Expediente o ficha por paciente con historial</li>
                <li>
                  Portal del paciente: consulta su ficha y expediente en línea
                </li>
                <li>Recordatorio de seguimiento (próxima cita sugerida)</li>
                <li>Recordatorios y confirmaciones por correo</li>
                <li>
                  Importa tus pacientes desde Excel o CSV de tu plataforma
                  anterior
                </li>
                <li>
                  Exporta y conserva tu agenda y expedientes al cambiar de plan
                </li>
              </ul>
            </article>

            <article className="plan plan--pro rise">
              <p className="plan__badge">Recomendado</p>
              <h3 className="plan__name">Pro</h3>
              <p className="plan__for">
                Para el consultorio que no quiere ni una silla vacía.
              </p>
              <p className="plan__price">
                <span className="plan__amount">$35</span>
                <span className="plan__period">/ mes</span>
              </p>
              <p className="plan__pending">
                Facturación mensual · IVA no incluido
              </p>
              <a href="#demo" className="btn btn--fill">
                Quiero el plan Pro
              </a>
              <ul className="plan__features">
                <li className="plan__inherit">
                  Todo lo del plan Regular, y además:
                </li>
                <li>Hasta 10 usuarios con roles (doctor y recepción)</li>
                <li>Recordatorios de cita por WhatsApp (24 h y 2 h antes)</li>
                <li>Confirmación y cancelación con un toque</li>
                <li>Aviso automático al liberar un horario (lista de espera)</li>
                <li>Múltiples profesionales y calendarios</li>
                <li>Analíticas avanzadas: tasa de ausentismo y ocupación</li>
                <li>Solicitud automática de reseñas a tus pacientes</li>
                <li>Mensajes de cumpleaños y campañas a tu base de pacientes</li>
                <li>Citas recurrentes y de seguimiento automáticas</li>
                <li>Soporte prioritario</li>
              </ul>
            </article>
          </div>
          <p className="pricing__note rise">
            Tarifa fija mensual · pacientes o clientes ilimitados · cambia de
            plan cuando quieras, conservando agenda y fichas.
          </p>
        </section>

        {/* ===== CTA final · split showcase ===== */}
        <section className="section wrap" id="demo">
          <div className="cta rise">
            <div className="cta__mesh" aria-hidden="true" />
            <div className="cta__grid">
              <div className="cta__copy">
                <span className="eyebrow eyebrow--light">
                  Demo sin compromiso
                </span>
                <h2>Tu agenda puede llenarse mientras atiendes.</h2>
                <p>
                  Déjanos tu correo y te mostramos Agendly funcionando con el
                  flujo real de tu negocio: reservas, fichas y recordatorios.
                </p>
                <DemoForm />
                <ul className="cta__points">
                  <li>Demostración guiada, paso a paso</li>
                  <li>Sin tarjeta ni instalaciones</li>
                </ul>
              </div>

              <div className="cta__aside" aria-hidden="true">
                <div className="cta__note cta__note--1">
                  <span className="cta__dot cta__dot--accent" />
                  <span>
                    <strong>Nueva reserva</strong>
                    <br />
                    Lucía Andrade · 10:20
                  </span>
                </div>
                <div className="cta__note cta__note--2">
                  <span className="cta__dot cta__dot--ok" />
                  <span>
                    <strong>Cita confirmada</strong>
                    <br />
                    Diego Herrera · 09:40
                  </span>
                </div>
                <div className="cta__note cta__note--3">
                  <span className="cta__dot" />
                  <span>
                    <strong>Recordatorio enviado</strong>
                    <br />
                    Plan Pro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ · editorial split ===== */}
        <section className="section wrap" id="faq">
          <div className="faq-layout">
            <div className="faq-aside rise">
              <span className="eyebrow">Preguntas frecuentes</span>
              <h2 className="section__title">Lo que suelen preguntarnos</h2>
              <p>
                ¿Tu duda no está aquí? Escríbenos y te respondemos con gusto.
              </p>
              <a href="mailto:hello@agendly.lat" className="btn btn--ghost">
                Escríbenos por correo
              </a>
            </div>

            <div className="faq rise">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p className="faq__a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer · Ft1 mast-headed ===== */}
      <footer className="foot wrap">
        <div className="foot__mast">
          <div>
            <a href="#inicio" className="brand" aria-label="Agendly · inicio">
              <Image
                src={logo}
                alt="Agendly"
                className="brand-logo brand-logo--foot"
              />
            </a>
            <p className="foot__tagline">
              Agendamiento en línea, expediente y analíticas para consultorios y
              clínicas que prefieren atender pacientes a contestar el teléfono.
            </p>
          </div>
          <nav className="foot__group" aria-label="Secciones">
            <h3>Recorre el sitio</h3>
            <ul>
              <li>
                <a href="#para-quien">Para quién es</a>
              </li>
              <li>
                <a href="#caracteristicas">Características</a>
              </li>
              <li>
                <a href="#incluye">Lo que incluye</a>
              </li>
              <li>
                <a href="#como-funciona">Cómo funciona</a>
              </li>
              <li>
                <a href="#comparativa">Comparativa</a>
              </li>
              <li>
                <a href="#precios">Precios</a>
              </li>
              <li>
                <a href="#faq">Preguntas frecuentes</a>
              </li>
            </ul>
          </nav>
          <div className="foot__group">
            <h3>Contacto</h3>
            <ul>
              <li>
                <a href="mailto:hello@agendly.lat">hello@agendly.lat</a>
              </li>
              <li>
                <a href="#demo">Solicitar una demo</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot__meta">
          <span>© 2026 Agendly</span>
          <span>Hecho para consultorios y clínicas de habla hispana</span>
        </div>
      </footer>
    </>
  );
}
