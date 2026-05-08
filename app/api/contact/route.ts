import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email?: string;
  phone: string;
  company?: string;
  message?: string;
  // câmpuri specifice modalului Declaratie Unica
  situation?: string;
  variant?: string;
  source?: string;
  submitted_at?: string;
}

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data: ContactFormData = await request.json();

    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Toate câmpurile obligatorii trebuie completate" },
        { status: 400 }
      );
    }

    const isModalSubmission = !!data.source;
    const subject = isModalSubmission
      ? `${data.variant || "Lead nou"} — ${data.name} (${data.phone})`
      : `Nouă solicitare de contact: ${data.name}`;

    const bodyLines = [
      `Nouă solicitare de pe site-ul Evolution Tax Finance`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `INFORMAȚII CLIENT:`,
      ``,
      `Nume: ${data.name}`,
      `Telefon: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      data.company ? `Companie: ${data.company}` : null,
      data.variant ? `Tip formular: ${data.variant}` : null,
      data.source ? `Sursă: ${data.source}` : null,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      data.situation ? `SITUAȚIE / MESAJ:\n\n${data.situation}` : data.message ? `MESAJ:\n\n${data.message}` : `Clientul nu a lăsat un mesaj suplimentar.`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `Data și ora: ${data.submitted_at || new Date().toLocaleString("ro-RO", { timeZone: "Europe/Bucharest" })}`,
    ].filter((l) => l !== null).join("\n");

    await resend.emails.send({
      from: "Site ETF <onboarding@resend.dev>",
      to: "etftax@gmail.com",
      subject,
      text: bodyLines,
    });

    return NextResponse.json(
      { success: true, message: "Mesajul a fost trimis cu succes." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "A apărut o eroare la procesarea cererii" },
      { status: 500 }
    );
  }
}
