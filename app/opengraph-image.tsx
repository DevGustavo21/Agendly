import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Agendly — Agenda de citas en línea, 24/7";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const accent = "#159b9b";
  const ink = "#0f3334";
  const muted = "#5a6b6b";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#f6fafb",
          backgroundImage:
            "radial-gradient(900px 500px at 85% -10%, rgba(21,155,155,0.18), transparent 60%), radial-gradient(700px 500px at 0% 110%, rgba(139,103,194,0.14), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: ink,
              color: "#fff",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "34px",
              fontWeight: 700,
              color: ink,
              letterSpacing: "-0.02em",
            }}
          >
            Agendly
            <span style={{ color: accent }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "72px",
              fontWeight: 700,
              color: ink,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            Agenda de citas en línea, 24/7
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "32px",
              color: muted,
              lineHeight: 1.35,
              maxWidth: "880px",
            }}
          >
            Reservas, agenda, fichas y recordatorios para clínicas,
            veterinarias, barberías y todo negocio con cita previa.
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {["Reservas 24/7", "Recordatorios", "Fichas", "Analíticas"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 24px",
                  borderRadius: "999px",
                  background: "#ffffff",
                  border: "1px solid rgba(15,51,52,0.12)",
                  color: ink,
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                {t}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
