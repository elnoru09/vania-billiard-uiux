"use client";

import { type FormEvent, useState } from "react";

type SubmitStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

export function HomeConsultationForm() {
  const [segment, setSegment] = useState("residensial");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [need, setNeed] = useState("Membutuhkan Konsultasi Logistik & Ruangan");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          source: `homepage-${segment}`,
          product: need,
          message: `Segmen: ${segment}. Kota pemasangan: ${city || "-"}. Kebutuhan: ${need}.`,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        setStatus({
          type: "error",
          message: data.message ?? "Data belum berhasil dikirim.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Data berhasil dikirim ke backend. Tim kurator dapat menindaklanjuti lead ini.",
      });

      setName("");
      setPhone("");
      setCity("");
      setNeed("Membutuhkan Konsultasi Logistik & Ruangan");
    } catch {
      setStatus({
        type: "error",
        message: "Terjadi kesalahan koneksi saat mengirim data.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="consult-form" onSubmit={handleSubmit}>
      <div className="consult-form__tabs">
        <button
          type="button"
          className={segment === "residensial" ? "is-active" : ""}
          onClick={() => setSegment("residensial")}
        >
          Residensial
        </button>
        <button type="button" className={segment === "b2b" ? "is-active" : ""} onClick={() => setSegment("b2b")}>
          Arena / B2B Export
        </button>
      </div>

      <div className="consult-form__grid">
        <input
          type="text"
          placeholder="Nama Lengkap / Kontak Person"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Nomor WhatsApp"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </div>

      <input
        type="text"
        placeholder="Kota Pemasangan (Cth: Ambarawa)"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <select value={need} onChange={(event) => setNeed(event.target.value)}>
        <option>Membutuhkan Konsultasi Logistik & Ruangan</option>
        <option>Tertarik pada Abimanyu Gen 5</option>
        <option>Tertarik pada Meja 8ft</option>
        <option>Tertarik pada aksesoris billiard</option>
        <option>Kebutuhan pengadaan B2B</option>
      </select>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Mengirim..." : "Kirim Data ke Kurator"}
      </button>

      {status.message ? (
        <p className={status.type === "success" ? "consult-form__status is-success" : "consult-form__status is-error"}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}