import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Toate câmpurile obligatorii trebuie completate" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Adresa de email nu este validă" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Site ETF <onboarding@resend.dev>",
      to: "etftax@gmail.com",
      subject: `Nouă solicitare de contact: ${data.name}`,
      text: `
Nouă solicitare de contact de pe site-ul Evolution Tax Finance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INFORMAȚII CLIENT:

Nume: ${data.name}
Email: ${data.email}
Telefon: ${data.phone}
Companie: ${data.company || "Nu a fost specificată"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESAJ:

${data.message || "Clientul nu a lăsat un mesaj suplimentar."}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Data și ora: ${new Date().toLocaleString("ro-RO", { timeZone: "Europe/Bucharest" })}
      `.trim(),
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
