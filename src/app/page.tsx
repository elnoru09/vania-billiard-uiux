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
        <section className="territory-section">
          <div className="territory-orbit" aria-hidden="true">
            <span />
          </div>

          <div className="territory-section__inner">
            <div className="stats-grid">
              <div className="stat-card">
                <strong>150+</strong>
                <span>Unit Terinstalasi</span>
              </div>
              <div className="stat-card">
                <strong>15+</strong>
                <span>Kota Jangkauan</span>
              </div>
              <div className="stat-card">
                <strong>100%</strong>
                <span>Presisi Leveling</span>
              </div>
              <div className="stat-card">
                <strong>24/7</strong>
                <span>Dukungan Klien</span>
              </div>
            </div>

            <div className="territory-copy">
              <p className="section-kicker">
                <span /> Jejak Distribusi
              </p>

              <h2>Menguasai Teritori, Menjaga Kualitas.</h2>

              <div className="territory-tags">
                <span>✓ Semarang Raya</span>
                <span className="is-active">✓ Ambarawa (HQ)</span>
                <span>✓ Salatiga</span>
                <span>↯ Ekspor Nasional via Kargo</span>
              </div>

              <div className="activity-panel">
                <div className="activity-panel__header">
                  <div>
                    <p>Aktivitas Kurator</p>
                    <strong>Live Installation Status</strong>
                  </div>
                  <span className="live-badge">● Live</span>
                </div>

                <div className="activity-list">
                  <div>
                    <span>01</span>
                    <strong>Bongkar Pasang Relokasi</strong>
                    <em>Tahap Kalibrasi Ungaran</em>
                  </div>
                  <div>
                    <span>02</span>
                    <strong>Inspeksi Batu Slate</strong>
                    <em>Proses Instalasi Bali</em>
                  </div>
                  <div>
                    <span>03</span>
                    <strong>Bongkar Pasang Relokasi</strong>
                    <em>Tahap Kalibrasi Demak</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="anatomy-section">
          <div className="section-heading">
            <p>Anatomi Presisi</p>
            <h2>Mengenal Komponen Turnamen</h2>
            <span>Kemewahan sejati terletak pada detail yang tidak terlihat dari luar.</span>
          </div>

          <div className="anatomy-grid">
            <article>
              <div className="anatomy-icon">▣</div>
              <h3>Black Slate</h3>
              <p>Kepadatan batu alam presisi memastikan meja tidak akan melengkung seumur hidup.</p>
            </article>
            <article>
              <div className="anatomy-icon">◇</div>
              <h3>K-66 Cushion</h3>
              <p>Karet pantulan standar profesional. Sangat konsisten dan tidak meredam tenaga pukulan.</p>
            </article>
            <article>
              <div className="anatomy-icon">▱</div>
              <h3>Worsted Cloth</h3>
              <p>Laken anyaman rapat kelas dunia. Mengurangi friksi sehingga bola melaju lebih cepat dan mulus.</p>
            </article>
            <article>
              <div className="anatomy-icon">☰</div>
              <h3>Solid Frame</h3>
              <p>Rangka kayu keras menahan beban ratusan kilogram batu tanpa menggeser kalibrasi presisi.</p>
            </article>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-section__mark">“</div>
          <blockquote>
            Kami tidak memproduksi meja secara massal.
            <br />
            Kami menyeleksi, menguji, dan mengkurasi presisi absolut untuk ruang eksklusif Anda.
          </blockquote>
          <p>Vania Billiard — Ambarawa</p>
        </section>
      </main>

      <Footer />
    </>
  );
}