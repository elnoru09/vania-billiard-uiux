const journals = [
  {
    title: "Cara Memilih Meja Billiard untuk Rumah",
    category: "Panduan",
    description:
      "Panduan awal untuk menentukan ukuran meja, kebutuhan ruang, dan pertimbangan sebelum membeli meja billiard.",
  },
  {
    title: "Perbedaan Kebutuhan Meja Billiard Rumah dan Usaha",
    category: "Insight",
    description:
      "Membahas perbedaan kebutuhan antara meja billiard untuk ruang pribadi, cafe, tempat hiburan, dan usaha billiard.",
  },
  {
    title: "Kenapa Ukuran Ruang Penting Sebelum Membeli Meja",
    category: "Simulator",
    description:
      "Ukuran ruang memengaruhi kenyamanan ayunan stik, sirkulasi pemain, dan pemilihan ukuran meja yang tepat.",
  },
];

export default function JurnalPage() {
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
                JURNAL
              </p>
            </div>
          </a>

          <a href="/simulator" style={{ color: "#c86a36", fontWeight: 800 }}>
            Simulator
          </a>
        </div>
      </header>

      <section className="container" style={{ padding: "80px 0 56px" }}>
        <p style={{ color: "#c86a36", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          Jurnal Vania Billiard
        </p>
        <h1 style={{ maxWidth: 900, fontSize: "clamp(42px, 7vw, 82px)", lineHeight: 0.95, margin: "18px 0" }}>
          Artikel dan panduan sebelum membeli meja billiard.
        </h1>
        <p style={{ maxWidth: 720, color: "#b8aca0", fontSize: 18, lineHeight: 1.8 }}>
          Halaman ini merupakan migrasi awal dari jurnal lama. Kontennya dapat dikembangkan menjadi artikel dinamis
          setelah database dan dashboard admin dibuat.
        </p>
      </section>

      <section className="container" style={{ padding: "0 0 96px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 22,
          }}
        >
          {journals.map((journal) => (
            <article
              key={journal.title}
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: 26,
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#c86a36",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {journal.category}
              </p>
              <h2 style={{ margin: "14px 0 12px", fontSize: 30, lineHeight: 1.1 }}>{journal.title}</h2>
              <p style={{ margin: 0, color: "#b8aca0", lineHeight: 1.8 }}>{journal.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}