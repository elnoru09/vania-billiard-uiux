export default function ProfilPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f8f4eb" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,0.12)", background: "#0d0d0d" }}>
        <div
          className="container"
          style={{
            minHeight: 86,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img
              src="/assets/images/logo_vb.png"
              alt="Vania Billiard"
              style={{ width: 52, height: 52, objectFit: "contain" }}
            />
            <div>
              <p style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Vania Billiard</p>
              <p style={{ margin: "4px 0 0", color: "#b8aca0", fontSize: 12, letterSpacing: "0.18em" }}>
                PROFIL
              </p>
            </div>
          </a>

          <a href="/katalog" style={{ color: "#c86a36", fontWeight: 800 }}>
            Katalog
          </a>
        </div>
      </header>

      <section
        className="container"
        style={{
          padding: "80px 0 96px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 42,
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ color: "#c86a36", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            Tentang Vania Billiard
          </p>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 82px)", lineHeight: 0.95, margin: "18px 0" }}>
            Workshop billiard dengan flow konsultasi yang sederhana.
          </h1>
          <p style={{ color: "#b8aca0", fontSize: 18, lineHeight: 1.8 }}>
            Vania Billiard menyediakan meja billiard, aksesoris, dan konsultasi kebutuhan ruang. Website ini
            dibangun ulang dari versi legacy agar lebih modern, cepat, dan siap dikembangkan menjadi full-stack.
          </p>

          <div style={{ marginTop: 30, display: "grid", gap: 14 }}>
            <div style={{ padding: 18, background: "#141414", border: "1px solid rgba(255,255,255,0.12)" }}>
              Fokus pada kebutuhan pelanggan sebelum membeli meja.
            </div>
            <div style={{ padding: 18, background: "#141414", border: "1px solid rgba(255,255,255,0.12)" }}>
              Menyediakan katalog produk dan aksesoris billiard.
            </div>
            <div style={{ padding: 18, background: "#141414", border: "1px solid rgba(255,255,255,0.12)" }}>
              Mendukung konsultasi cepat melalui WhatsApp.
            </div>
          </div>
        </div>

        <div style={{ border: "1px solid rgba(255,255,255,0.12)", background: "#141414", padding: 14 }}>
          <img
            src="/assets/images/hero-bg.webp"
            alt="Vania Billiard"
            style={{ width: "100%", height: "min(620px, 70vh)", objectFit: "cover" }}
          />
        </div>
      </section>
    </main>
  );
}