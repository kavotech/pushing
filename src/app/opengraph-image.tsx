import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050708",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(20,135,223,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(183,234,40,0.28), transparent 55%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              background: "linear-gradient(135deg, #37a3f2, #cdfb4c)",
              borderRadius: "45% 45% 50% 50% / 60% 60% 40% 40%",
              transform: "rotate(180deg)",
            }}
          />
          <span style={{ fontSize: 34, color: "white", fontWeight: 700, letterSpacing: -1 }}>
            PUSHING PRESSURE
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span
            style={{
              fontSize: 62,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Professional Exterior Cleaning Across London
          </span>
          <span style={{ fontSize: 26, color: "#b8bfc7", maxWidth: 820 }}>
            {siteConfig.tagline} · North · West · East London
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
