import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0d11",
        }}
      >
        <div
          style={{
            width: 108,
            height: 108,
            display: "flex",
            background: "linear-gradient(135deg, #37a3f2, #cdfb4c)",
            borderRadius: "45% 45% 50% 50% / 60% 60% 40% 40%",
            transform: "rotate(180deg)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
