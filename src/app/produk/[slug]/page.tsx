import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Vania Billiard",
    };
  }

  return {
    title: `${product.name} | Vania Billiard`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const waText = `Halo Vania Billiard, saya ingin konsultasi tentang ${product.name}.`;
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
                DETAIL PRODUK
              </p>
            </div>
          </a>

          <a href="/katalog" style={{ color: "#c86a36", fontWeight: 800 }}>
            Kembali ke Katalog
          </a>
        </div>
      </header>

      <section
        className="container"
        style={{
          padding: "72px 0 96px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 42,
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ color: "#c86a36", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            {product.category}
          </p>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 82px)", lineHeight: 0.95, margin: "18px 0" }}>
            {product.name}
          </h1>
          <p style={{ color: "#b8aca0", fontSize: 18, lineHeight: 1.8 }}>
            {product.description}
          </p>

          <div style={{ marginTop: 28, display: "grid", gap: 12 }}>
            {product.highlights.map((highlight) => (
              <div
                key={highlight}
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "#141414",
                  padding: 16,
                  color: "#b8aca0",
                }}
              >
                {highlight}
              </div>
            ))}
          </div>

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
            Konsultasi via WhatsApp
          </a>
        </div>

        <div style={{ border: "1px solid rgba(255,255,255,0.12)", background: "#141414", padding: 14 }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "min(620px, 70vh)", objectFit: "cover" }}
          />
        </div>
      </section>
    </main>
  );
}