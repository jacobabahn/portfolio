import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Jacob Bahn — Software engineer at V.Two, Greater Seattle";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dark theme tokens from globals.css, converted from oklch
const colors = {
  background: "#080c0e",
  foreground: "#e5e8eb",
  muted: "#96a0a7",
  border: "#1d2226",
  accentSecondary: "#9dcab1",
};

export default async function Image() {
  const assets = join(process.cwd(), "app/_og");
  const [interRegular, interBold, jetbrainsMono, portrait] = await Promise.all([
    readFile(join(assets, "Inter-Regular.ttf")),
    readFile(join(assets, "Inter-Bold.ttf")),
    readFile(join(assets, "JetBrainsMono-Regular.ttf")),
    readFile(join(assets, "portrait.jpg")),
  ]);
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: colors.background,
          color: colors.foreground,
          fontFamily: "Inter",
          alignItems: "center",
          padding: "0 96px",
          gap: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
            Jacob Bahn
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 36, lineHeight: 1.3 }}>
            Software engineer at V.Two
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 14, fontSize: 36, color: colors.muted }}>
            {/* lucide MapPin, as in the hero */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.accentSecondary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Greater Seattle
          </div>
        </div>
        {/* Framed like the hero portrait */}
        <img
          src={portraitSrc}
          width={352}
          height={440}
          style={{ borderRadius: 24, border: `2px solid ${colors.border}` }}
          alt=""
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
        { name: "JetBrains Mono", data: jetbrainsMono, weight: 400, style: "normal" },
      ],
    },
  );
}
