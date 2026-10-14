import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Jacob Bahn — Fullstack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dark theme tokens from globals.css, converted from oklch
const colors = {
  background: "#080c0e",
  foreground: "#e5e8eb",
  muted: "#96a0a7",
  accent: "#478ebc",
  border: "#1d2226",
};

export default async function Image() {
  const assets = join(process.cwd(), "app/_og");
  const [interRegular, interBold, jetbrainsMono, avatar] = await Promise.all([
    readFile(join(assets, "Inter-Regular.ttf")),
    readFile(join(assets, "Inter-Bold.ttf")),
    readFile(join(assets, "JetBrainsMono-Regular.ttf")),
    readFile(join(assets, "avatar.jpg")),
  ]);
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          backgroundColor: colors.background,
          color: colors.foreground,
          fontFamily: "Inter",
          borderTop: `8px solid ${colors.accent}`,
        }}
      >
        <div style={{ display: "flex", fontFamily: "JetBrains Mono", fontSize: 28, color: colors.muted }}>
          jacobbahn.com
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 56 }}>
          {/* Ring mirrors the hero avatar: border color, offset by the background */}
          <div
            style={{
              display: "flex",
              padding: 8,
              borderRadius: "50%",
              border: `4px solid ${colors.border}`,
            }}
          >
            <img src={avatarSrc} width={200} height={200} style={{ borderRadius: "50%" }} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
              Jacob Bahn
            </div>
            <div style={{ display: "flex", marginTop: 28, fontSize: 40, color: colors.muted }}>
              Fullstack Engineer · Seattle
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            paddingTop: 36,
            borderTop: `2px solid ${colors.border}`,
            fontSize: 30,
            color: colors.foreground,
          }}
        >
          Clear interfaces, reliable systems, and performance.
        </div>
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
