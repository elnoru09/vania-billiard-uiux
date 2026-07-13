const b2bSegments = [
  {
    title: "Cafe & Lounge",
    description: "Solusi meja billiard untuk tempat nongkrong, cafe, lounge, dan ruang hiburan komersial.",
  },
  {
    title: "Tempat Usaha Billiard",
    description: "Konsultasi kebutuhan meja, layout ruang, dan pilihan produk untuk operasional usaha billiard.",
  },
  {
    title: "Hotel, Villa, dan Properti",
    description: "Pengadaan meja billiard untuk fasilitas hiburan hotel, villa, apartemen, atau properti sewa.",
  },
];

export default function B2BPage() {
  const waText =
    "Halo Vania Billiard, saya ingin konsultasi kebutuhan B2B / pengadaan meja billiard.";
  const waUrl = `https://wa.me/6282241545326?text=${encodeURIComponent(waText)}`;

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
                B2B
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
            B2B & Pengadaan
          </p>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 82px)", lineHeight: 0.95, margin: "18px 0" }}>
            Solusi meja billiard untuk bisnis dan properti.
          </h1>
          <p style={{ color: "#b8aca0", fontSize: 18, lineHeight: 1.8 }}>
            Halaman ini menjadi migrasi awal dari flow B2B lama. Calon pelanggan bisnis dapat memahami segmen layanan
            lalu menghubungi Vania Billiard untuk konsultasi kebutuhan pengadaan.
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              marginTop: 30,
              background: "#c86a36",
              color: "#080808",
              padding: "14px 22px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Konsultasi B2B via WhatsApp
          </a>
        </div>

        <div style={{ display: "grid", gap: 16 }}>
          {b2bSegments.map((segment) => (
            <article
              key={segment.title}
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: 24,
              }}
            >
              <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>{segment.title}</h2>
              <p style={{ margin: 0, color: "#b8aca0", lineHeight: 1.8 }}>{segment.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}