import { ImageResponse } from "next/og";
import { getProfile } from "@/data/profile";
import type { Locale } from "@/i18n/config";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Ignacio Capra — Software Developer";

/** Shared social preview image used by Open Graph and Twitter metadata routes. */
export function renderOgImage(locale: Locale) {
  const profile = getProfile(locale);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F2F3EF",
          backgroundImage: "radial-gradient(circle at 92% 18%, rgba(183,242,74,0.28), rgba(183,242,74,0) 45%)",
          color: "#0B0F14",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, letterSpacing: -2 }}>
            IC<span style={{ color: "#86B82E" }}>.</span>
          </div>
          <div style={{ fontSize: 22, letterSpacing: 2, textTransform: "uppercase", color: "#66706C" }}>
            {`${profile.name} — ${profile.role}`}
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 76, fontWeight: 600, lineHeight: 1, letterSpacing: -4, maxWidth: 980 }}>
          <span style={{ marginRight: 20 }}>{profile.headlineParts.lead}</span>
          <span style={{ color: "#66706C", fontWeight: 400 }}>{profile.headlineParts.emphasis}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: "#66706C" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#86B82E", marginRight: 16 }} />
          {profile.location}
        </div>
      </div>
    ),
    ogSize,
  );
}
