"use client";

import { type FormEvent, useMemo, useState } from "react";

function getRecommendation(length: number, width: number) {
  if (!length || !width) {
    return {
      title: "Masukkan ukuran ruang",
      description: "Isi panjang dan lebar ruangan untuk mendapatkan rekomendasi awal.",
      table: "-",
    };
  }

  const minSide = Math.min(length, width);
  const maxSide = Math.max(length, width);

  if (minSide >= 5 && maxSide >= 6) {
    return {
      title: "Ruang sangat ideal",
      description: "Ruangan cukup lega untuk meja ukuran besar dan area ayunan stik yang nyaman.",
      table: "Meja 8ft atau opsi custom",
    };
  }

  if (minSide >= 4 && maxSide >= 5) {
    return {
      title: "Ruang cukup ideal",
      description: "Ruangan masih nyaman untuk meja billiard rumahan atau ruang hiburan.",
      table: "Meja 7ft–8ft",
    };
  }

  if (minSide >= 3.5 && maxSide >= 4.5) {
    return {
      title: "Ruang terbatas",
      description: "Masih memungkinkan, tetapi perlu konsultasi ukuran meja dan area gerak pemain.",
      table: "Meja compact/custom",
    };
  }

  return {
    title: "Perlu konsultasi khusus",
    description: "Ukuran ruang cukup terbatas. Sebaiknya konsultasikan layout agar tidak salah memilih meja.",
    table: "Custom / konsultasi dahulu",
  };
}

type SubmitStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

export default function SimulatorPage() {
  const [length, setLength] = useState("5");
  const [width, setWidth] = useState("4");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({
    type: "idle",
    message: "",
  });

  const result = useMemo(() => {
    return getRecommendation(Number(length), Number(width));
  }, [length, width]);

  const message = `Ukuran ruangan: ${length}m x ${width}m. Rekomendasi awal: ${result.table}. Status: ${result.title}.`;

  const waText = `Halo Vania Billiard, saya ingin konsultasi ukuran meja billiard. ${message}`;
  const waUrl = `https://wa.me/6282241545326?text=${encodeURIComponent(waText)}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({
      type: "idle",
      message: "",
    });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          source: "simulator",
          product: "Simulator Ruang",
          message,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        setStatus({
          type: "error",
          message: data.message ?? "Lead gagal dikirim. Periksa kembali data yang diisi.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Data konsultasi berhasil dikirim. Admin dapat melihat lead dari log server untuk tahap awal.",
      });

      setName("");
      setPhone("");
    } catch {
      setStatus({
        type: "error",
        message: "Terjadi kesalahan koneksi saat mengirim lead.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
                SIMULATOR RUANG
              </p>
            </div>
          </a>

          <a href="/katalog" style={{ color: "#c86a36", fontWeight: 800 }}>
            Katalog
          </a>
        </div>
      </header>

      <section className="container" style={{ padding: "80px 0 96px" }}>
        <p style={{ color: "#c86a36", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          Simulator
        </p>
        <h1 style={{ maxWidth: 900, fontSize: "clamp(42px, 7vw, 82px)", lineHeight: 0.95, margin: "18px 0" }}>
          Cek kebutuhan ruang sebelum membeli meja billiard.
        </h1>
        <p style={{ maxWidth: 720, color: "#b8aca0", fontSize: 18, lineHeight: 1.8 }}>
          Masukkan ukuran ruangan untuk mendapatkan rekomendasi awal. Setelah itu, isi nama dan WhatsApp agar data
          konsultasi masuk ke backend <strong>/api/leads</strong>.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
            marginTop: 46,
            alignItems: "start",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.12)", padding: 26 }}
          >
            <label style={{ display: "block", color: "#b8aca0", marginBottom: 10 }}>Panjang ruangan, meter</label>
            <input
              type="number"
              min="1"
              step="0.1"
              value={length}
              onChange={(event) => setLength(event.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "#080808",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#f8f4eb",
                marginBottom: 20,
              }}
            />

            <label style={{ display: "block", color: "#b8aca0", marginBottom: 10 }}>Lebar ruangan, meter</label>
            <input
              type="number"
              min="1"
              step="0.1"
              value={width}
              onChange={(event) => setWidth(event.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "#080808",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#f8f4eb",
                marginBottom: 20,
              }}
            />

            <label style={{ display: "block", color: "#b8aca0", marginBottom: 10 }}>Nama</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Nama pelanggan"
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "#080808",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#f8f4eb",
                marginBottom: 20,
              }}
            />

            <label style={{ display: "block", color: "#b8aca0", marginBottom: 10 }}>Nomor WhatsApp</label>
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Contoh: 6281234567890"
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "#080808",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#f8f4eb",
              }}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                display: "inline-flex",
                marginTop: 24,
                background: isSubmitting ? "#7a4a31" : "#c86a36",
                color: "#080808",
                border: 0,
                padding: "14px 22px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Mengirim..." : "Kirim Konsultasi"}
            </button>

            {status.message ? (
              <p
                style={{
                  margin: "18px 0 0",
                  color: status.type === "success" ? "#72d572" : "#ff8a8a",
                  lineHeight: 1.7,
                }}
              >
                {status.message}
              </p>
            ) : null}
          </form>

          <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.12)", padding: 26 }}>
            <p style={{ margin: 0, color: "#c86a36", fontWeight: 800, letterSpacing: "0.18em" }}>HASIL ESTIMASI</p>
            <h2 style={{ margin: "14px 0 10px", fontSize: 34 }}>{result.title}</h2>
            <p style={{ color: "#b8aca0", lineHeight: 1.8 }}>{result.description}</p>

            <div
              style={{
                marginTop: 22,
                padding: 18,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "#080808",
              }}
            >
              <p style={{ margin: 0, color: "#b8aca0" }}>Rekomendasi awal</p>
              <p style={{ margin: "8px 0 0", fontSize: 24, fontWeight: 800 }}>{result.table}</p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                marginTop: 24,
                background: "transparent",
                color: "#c86a36",
                border: "1px solid rgba(200,106,54,0.55)",
                padding: "14px 22px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              WhatsApp fallback
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}