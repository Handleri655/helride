import { ImageResponse } from "next/og";
import { hasLocale } from "@/lib/locale";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const fi = !hasLocale(locale) || locale === "fi";
  const title = fi ? "Skeittauksen asialla Helsingissä" : "For skateboarding in Helsinki";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#f5f5f5",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6 }}>HELRIDE COLLECTIVE</div>
        <div style={{ display: "flex", fontSize: 84, lineHeight: 0.9, textTransform: "uppercase", maxWidth: 980 }}>
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#ff2424",
            color: "#000000",
            fontSize: 32,
            padding: "12px 18px",
          }}
        >
          helride.fi
        </div>
      </div>
    ),
    { ...size },
  );
}
