import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const trustedBy = [
  "VIP Lounge Semarang",
  "Executive Club Ambarawa",
  "Grand Arena",
  "Private Villa Bali",
  "Onyx Billiard",
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="hero-split">
          <div className="hero-split__content">
            <div className="hero-split__line" />

            <h1 className="hero-split__title">
              <span>Seni Presisi</span>
              <span className="hero-split__italic">Dalam</span>
              <span className="hero-split__accent">Akurasi Permainan</span>
            </h1>

            <p className="hero-split__description">
              Menghadirkan furnitur hiburan bertaraf turnamen. Kami mengkurasi, mengirim, dan merakit presisi absolut
              untuk ruang eksklusif Anda.
            </p>

            <div className="hero-split__actions">
              <a href="/katalog" className="hero-link">
                Eksplorasi Kurasi
                <span />
              </a>

              <a href="/simulator" className="hero-outline">
                Temukan Meja Ideal 🎯
              </a>

              <a href="/profil" className="hero-play">
                <span>▶</span>
                Proses Leveling
              </a>
            </div>
          </div>

          <div className="hero-split__visual" aria-label="Meja billiard premium Vania Billiard">
            <div className="hero-split__image" />

            <div className="hotspot hotspot--cloth">
              <span className="hotspot__pulse" />
              <span className="hotspot__dot" />
              <div className="hotspot__card">
                <strong>Worsted Cloth</strong>
                <p>Anyaman tanpa bulu, memaksimalkan laju bola tanpa friksi berlebih.</p>
              </div>
            </div>

            <div className="hotspot hotspot--pocket">
              <span className="hotspot__pulse" />
              <span className="hotspot__dot" />
              <div className="hotspot__card">
                <strong>Leather Pocket</strong>
                <p>Jahitan kulit dengan redaman suara untuk kenyamanan bermain optimal.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-ticker" aria-label="Dipercaya oleh">
          <div className="trust-ticker__label">Dipercaya Oleh:</div>

          <div className="trust-ticker__track">
            {[...trustedBy, ...trustedBy].map((item, index) => (
              <span key={`${item}-${index}`} className="trust-ticker__item">
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}