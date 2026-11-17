import { ImageResponse } from "next/og";
export const alt = "Prahlad Bathre — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", color: "#f4f0fa", background: "radial-gradient(circle at 78% 34%, rgba(145,104,255,.34), transparent 34%), linear-gradient(135deg, #09070e 0%, #171024 58%, #08070b 100%)", fontFamily: "Arial, sans-serif" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#c5b0ff", fontSize: 22, letterSpacing: 8 }}><span style={{ width: 42, height: 2, background: "#b69aff" }} />PORTFOLIO / 2026</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}><div style={{ fontSize: 30, color: "#c7b9df" }}>Prahlad Bathre</div><div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -4 }}>Full Stack<br/><span style={{ color: "#b69aff" }}>Developer.</span></div><div style={{ fontSize: 25, color: "#b7adca" }}>Thoughtful interfaces. Dependable systems.</div></div>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 17, color: "#8f829f", letterSpacing: 4 }}><span>REACT · NEXT.JS · NODE · PYTHON</span><span>PRAHLAD-PORTFOLIO</span></div>
  </div>, size);
}
