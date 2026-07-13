const products = [
  {
    name: "Abimanyu Gen 5",
    category: "Meja Billiard",
    image: "/assets/images/abimanyu_gen5.webp",
    description: "Produk meja unggulan untuk kebutuhan rumah, ruang hiburan, atau usaha billiard.",
  },
  {
    name: "Meja 8ft",
    category: "Meja Billiard",
    image: "/assets/images/meja_8ft.webp",
    description: "Ukuran populer untuk pengguna yang membutuhkan keseimbangan antara ruang dan pengalaman bermain.",
  },
  {
    name: "Shaft Predator",
    category: "Aksesoris",
    image: "/assets/images/shaft_predator.webp",
    description: "Aksesoris pendukung untuk pemain yang membutuhkan perlengkapan billiard lebih lengkap.",
  },
  {
    name: "Simonis Cloth",
    category: "Aksesoris",
    image: "/assets/images/simonis_cloth.webp",
    description: "Kain meja billiard sebagai bagian penting dalam kenyamanan dan kualitas permainan.",
  },
];

export default function KatalogPage() {
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
                KATALOG PRODUK
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/6282241545326"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#c86a36",
              color: "#080808",
              padding: "13px 18px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="container" style={{ padding: "80px 0 56px" }}>
        <p style={{ color: "#c86a36", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          Katalog Vania Billiard
        </p>
        <h1 style={{ maxWidth: 820, fontSize: "clamp(42px, 7vw, 82px)", lineHeight: 0.95, margin: "18px 0" }}>
          Pilihan meja dan aksesoris billiard.
        </h1>
        <p style={{ maxWidth: 720, color: "#b8aca0", fontSize: 18, lineHeight: 1.8 }}>
          Halaman ini merupakan migrasi awal dari flow katalog lama. User dapat melihat produk utama, memahami kategori,
          lalu lanjut konsultasi via WhatsApp.
        </p>
      </section>

      <section className="container" style={{ padding: "0 0 96px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 22,
          }}
        >
          {products.map((product) => (
            <article
              key={product.name}
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.12)",
                overflow: "hidden",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: 260, objectFit: "cover" }}
              />
              <div style={{ padding: 22 }}>
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
                  {product.category}
                </p>
                <h2 style={{ margin: "10px 0 12px", fontSize: 28 }}>{product.name}</h2>
                <p style={{ margin: 0, color: "#b8aca0", lineHeight: 1.7 }}>{product.description}</p>
                <a
                  href={`https://wa.me/6282241545326?text=${encodeURIComponent(
                    `Halo Vania Billiard, saya ingin konsultasi tentang ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    marginTop: 20,
                    color: "#c86a36",
                    fontWeight: 800,
                  }}
                >
                  Konsultasi produk →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}