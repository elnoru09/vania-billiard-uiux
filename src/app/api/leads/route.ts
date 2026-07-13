import { NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  phone: z.string().min(8, "Nomor WhatsApp tidak valid"),
  source: z.string().min(2).default("website"),
  message: z.string().min(5, "Pesan minimal 5 karakter"),
  product: z.string().optional(),
});

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Vania Billiard leads API is running.",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const lead = LeadSchema.parse(body);

    const savedLead = {
      id: crypto.randomUUID(),
      ...lead,
      createdAt: new Date().toISOString(),
    };

    console.info("[VANIA_LEAD_CREATED]", savedLead);

    return NextResponse.json(
      {
        success: true,
        message: "Lead berhasil diterima.",
        data: savedLead,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Data lead tidak valid.",
          issues: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server.",
      },
      { status: 500 }
    );
  }
}