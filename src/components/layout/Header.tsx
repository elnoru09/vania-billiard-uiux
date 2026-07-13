import Link from "next/link";

const navItems = [
  { label: "Koleksi", href: "/katalog" },
  { label: "Simulator 2D", href: "/simulator" },
  { label: "Jurnal Kurator", href: "/jurnal" },
  { label: "Jejak Karya", href: "/profil" },
  { label: "B2B & Ekspor", href: "/b2b" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand-link" aria-label="Vania Billiard Home">
          <img src="/assets/images/logo_vb.png" alt="Vania Billiard" className="brand-link__logo" />
          <span className="brand-link__text">
            <span className="brand-link__name">Vania</span>
            <span className="brand-link__sub">Billiard</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="desktop-nav__link">
              {item.label}
            </Link>
          ))}

          <span className="language-switch">
            <span className="language-switch__active">ID</span>
            <span>/</span>
            <span>EN</span>
          </span>

          <Link href="/simulator" className="nav-cta">
            Konsultasi VIP
          </Link>
        </nav>

        <details className="mobile-nav">
          <summary className="mobile-nav__summary">Menu</summary>
          <div className="mobile-nav__panel">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-nav__link">
                {item.label}
              </Link>
            ))}
            <Link href="/simulator" className="mobile-nav__cta">
              Konsultasi VIP
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}