export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#080808', color: '#f8f4eb', padding: '80px 24px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <img src="/assets/images/logo_vb.png" alt="Vania Billiard" style={{ width: 72, height: 72, objectFit: 'contain', marginBottom: 24 }} />
        <p style={{ color: '#c86a36', textTransform: 'uppercase', letterSpacing: '0.22em', fontWeight: 700 }}>Vania Billiard</p>
        <h1 style={{ fontSize: 'clamp(42px, 8vw, 88px)', lineHeight: 0.95, maxWidth: 850, margin: '18px 0' }}>
          Meja billiard, aksesoris, dan konsultasi kebutuhan ruang.
        </h1>
        <p style={{ color: '#b8aca0', fontSize: 18, lineHeight: 1.8, maxWidth: 720 }}>
          Website lama Vania Billiard sedang di-upgrade menjadi full-stack modern dengan flow UI/UX lama yang tetap sederhana: katalog, simulator, profil, jurnal, B2B, dan WhatsApp.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
          <a href="https://wa.me/6282241545326" target="_blank" rel="noreferrer" style={{ background: '#c86a36', color: '#080808', padding: '14px 22px', fontWeight: 700, textDecoration: 'none' }}>Konsultasi WhatsApp</a>
          <a href="/katalog" style={{ border: '1px solid rgba(255,255,255,.16)', color: '#f8f4eb', padding: '14px 22px', textDecoration: 'none' }}>Lihat Katalog</a>
        </div>
      </div>
    </main>
  );
}
