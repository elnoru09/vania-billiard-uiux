import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-map" aria-label="Lokasi Vania Billiard">
        <iframe
          title="Vania Billiard HQ Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8252277717466!2d110.3957271!3d-7.2605737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7081000b65bf25%3A0xcb1b6d19a27e7e!2sAmbarawa%2C%20Kabupaten%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
          className="footer-map__iframe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div className="footer-map__card">
          <h2>Vania Billiard HQ</h2>
          <p>Pusat kurasi, logistik, dan manajemen instalasi. Berakar di Ambarawa, melayani nasional.</p>
          <a href="https://maps.app.goo.gl/7GiaQEojWXxjXuQ6A" target="_blank" rel="noreferrer">
            Buka di Google Maps →
          </a>
        </div>
      </section>

      <div className="site-footer__content">
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__logo">
            <img src="/assets/images/logo_vb.png" alt="Vania Billiard" />
          </Link>
          <p>
            Bukan sekadar manufaktur massal. Kami adalah kurator meja billiard turnamen yang memastikan setiap detail
            terkalibrasi presisi sebelum mencapai ruang eksklusif Anda.
          </p>
        </div>

        <div>
          <h3>Eksplorasi</h3>
          <ul>
            <li>
              <Link href="/katalog">Koleksi Meja</Link>
            </li>
            <li>
              <Link href="/simulator">Simulator Ruangan</Link>
            </li>
            <li>
              <Link href="/profil">Jejak Karya</Link>
            </li>
            <li>
              <Link href="/jurnal">Jurnal Kurator</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Operasional & Logistik</h3>
          <ul>
            <li>Pusat Logistik: Ambarawa</li>
            <li>Jangkauan Teknisi: Semarang Raya</li>
            <li>kurator@vaniabilliard.com</li>
            <li>Senin - Sabtu, 09.00 - 17.00 WIB</li>
          </ul>
        </div>

        <div>
          <h3>Sosial Media</h3>
          <div className="social-row">
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Store">
              ST
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">© 2026 Vania Billiard. Kurasi Spesifik. Presisi Absolut.</div>
    </footer>
  );
}