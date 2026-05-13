import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-1px",
            fontFamily: "sans-serif",
          }}
        >
          O
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 4,
            right: 4,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
