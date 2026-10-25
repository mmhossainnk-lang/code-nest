import { ImageResponse } from "next/og";

export const alt = "Vaultix — Software & App Licenses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage: "radial-gradient(circle at 30% 20%, #4338ca55, transparent 50%), radial-gradient(circle at 80% 80%, #c026d355, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "linear-gradient(135deg, #6366f1, #d946ef)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
              color: "white",
            }}
          >
            VX
          </div>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700, color: "white" }}>
            Vaultix
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            color: "white",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Genuine software &amp; app licenses, activated instantly
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa", marginTop: 24 }}>
          Design · Developer Tools · Security · Business · Media
        </div>
      </div>
    ),
    { ...size }
  );
}
