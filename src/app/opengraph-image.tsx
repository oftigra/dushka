import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Душные идеи - мемное QA-портфолио";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#ffdf63",
          color: "#06142d",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: 58,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div
            style={{
              border: "4px solid #06142d",
              borderRadius: 999,
              boxShadow: "8px 8px 0 rgba(6,20,45,0.28)",
              display: "flex",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: 3,
              padding: "16px 24px",
              textTransform: "uppercase",
            }}
          >
            QA portfolio / meme lab
          </div>
          <div
            style={{
              background: "#06142d",
              borderRadius: 999,
              color: "#ffdf63",
              display: "flex",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              padding: "18px 26px",
              textTransform: "uppercase",
            }}
          >
            4Y+ QA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 900,
              letterSpacing: -4,
              lineHeight: 0.95,
              maxWidth: 920,
              textTransform: "uppercase",
            }}
          >
            Душные идеи
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 800,
              lineHeight: 1.28,
              maxWidth: 940,
            }}
          >
            QA, который душит баги: manual, automation, mobile, API, regression и AI-assisted QA.
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {["Mobile QA", "API", "AQA", "Playwright", "Postman", "AI-assisted"].map((item) => (
            <div
              key={item}
              style={{
                background: "#fff7c2",
                border: "3px solid #06142d",
                borderRadius: 999,
                boxShadow: "5px 5px 0 rgba(6,20,45,0.18)",
                display: "flex",
                fontSize: 24,
                fontWeight: 900,
                padding: "12px 18px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
