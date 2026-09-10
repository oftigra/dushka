import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Душные идеи - QA-портфолио";
export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffdf63",
          border: "20px solid #06142d",
          borderRadius: 104,
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#06142d", fontSize: 300, fontWeight: 900, lineHeight: 1 }}>
            Д
          </span>
          <div
            style={{
              alignItems: "center",
              background: "#06142d",
              borderRadius: 999,
              display: "flex",
              fontSize: 44,
              fontWeight: 900,
              letterSpacing: 10,
              padding: "10px 34px",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#ffdf63" }}>qa</span>
          </div>
        </div>
        <div
          style={{
            background: "#e53b3b",
            border: "10px solid #06142d",
            borderRadius: 999,
            display: "flex",
            height: 96,
            left: 376,
            position: "absolute",
            top: 344,
            width: 96,
          }}
        />
      </div>
    ),
    size,
  );
}
