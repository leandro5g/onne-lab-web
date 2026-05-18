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
          background: "linear-gradient(135deg, #0d0d1a 0%, #1e1b4b 60%, #312e81 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Outer circle (ring effect via two stacked circles) */}
        <div
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #818cf8, #a78bfa)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Inner dark cutout to form ring */}
          <div
            style={{
              width: 13,
              height: 13,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0d0d1a, #1e1b4b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Center dot */}
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #a5b4fc, #c4b5fd)",
              }}
            />
          </div>
        </div>
        {/* Top-right accent node */}
        <div
          style={{
            position: "absolute",
            top: 4,
            right: 5,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#6366f1",
          }}
        />
        {/* Bottom-left accent node */}
        <div
          style={{
            position: "absolute",
            bottom: 4,
            left: 5,
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: "#818cf8",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
