import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main style={{ minHeight: "70vh", background: "#080808", color: "#f8f4eb", padding: "96px 24px" }}>
        <section className="container">
          <p
            style={{
              color: "#c86a36",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Step 1 UI Foundation
          </p>

          <h1
            style={{
              maxWidth: 920,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(48px, 8vw, 96px)",
              lineHeight: 0.94,
              margin: "0 0 28px",
            }}
          >
            Seni Presisi Dalam Akurasi Permainan.
          </h1>

          <p style={{ maxWidth: 680, color: "#a7a7a7", fontSize: 18, lineHeight: 1.8, marginBottom: 36 }}>
            Header dan footer premium sudah dipasang sebagai fondasi UI/UX baru. Tahap berikutnya adalah membuat hero,
            ticker, statistik, dan section produk agar semakin mendekati tampilan legacy Vania Billiard.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="/katalog"
              style={{
                display: "inline-flex",
                background: "#c86a36",
                color: "white",
                padding: "15px 22px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontSize: 12,
              }}
            >
              Eksplorasi Kurasi
            </a>

            <a
              href="/simulator"
              style={{
                display: "inline-flex",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#f8f4eb",
                padding: "15px 22px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontSize: 12,
              }}
            >
              Temukan Meja Ideal
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}