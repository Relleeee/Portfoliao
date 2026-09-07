import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export const alt = `${siteConfig.name} — Software Engineer & Computer Science Student`;
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
          background: "#0a0a0b",
          color: "#f4f4f5",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#818cf8",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", fontSize: 38, color: "#a1a1aa" }}>
            {siteConfig.role}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#a1a1aa",
          }}
        >
          <span style={{ display: "flex" }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </span>
          <span style={{ display: "flex" }}>
            BSc Computer Science · Roehampton, London
          </span>
        </div>
      </div>
    ),
    size,
  );
}
