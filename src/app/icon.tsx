import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
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
