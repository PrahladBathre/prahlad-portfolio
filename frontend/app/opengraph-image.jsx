import { ImageResponse } from "next/og";

export const alt = "Prahlad Bathre — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "72px",
    color: "#f4f0fa",
    background:
      "radial-gradient(circle at 78% 34%, rgba(145,104,255,.34), transparent 34%), linear-gradient(135deg, #09070e 0%, #171024 58%, #08070b 100%)",
    fontFamily: "Arial, sans-serif",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  kicker: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    color: "#c5b0ff",
    fontSize: 22,
    letterSpacing: 8,
  },
  accent: { width: 42, height: 2, background: "#b69aff" },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  name: { fontSize: 30, color: "#c7b9df" },
  headline: {
    display: "flex",
    flexDirection: "column",
    fontSize: 76,
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: -4,
  },
  headlineAccent: { color: "#b69aff" },
  description: { fontSize: 25, color: "#b7adca" },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 17,
    color: "#8f829f",
    letterSpacing: 4,
  },
};

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={styles.root}>
      <div style={styles.kicker}>
        <span style={styles.accent} />
        <span>PORTFOLIO / 2026</span>
      </div>
      <div style={styles.content}>
        <div style={styles.name}>Prahlad Bathre</div>
        <div style={styles.headline}>
          <span>Full Stack</span>
          <span style={styles.headlineAccent}>Developer.</span>
        </div>
        <div style={styles.description}>
          Thoughtful interfaces. Dependable systems.
        </div>
      </div>
      <div style={styles.footer}>
        <span>REACT · NEXT.JS · NODE · PYTHON</span>
        <span>PRAHLAD-PORTFOLIO</span>
      </div>
    </div>,
    size,
  );
}
