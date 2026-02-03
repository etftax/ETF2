import { NextRequest, NextResponse } from "next/server";

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

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Toate câmpurile obligatorii trebuie completate" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Adresa de email nu este validă" },
        { status: 400 }
      );
    }

    // Phone validation
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Numărul de telefon nu este valid" },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
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

Această solicitare a fost trimisă de pe site-ul Evolution Tax Finance.
Data și ora: ${new Date().toLocaleString("ro-RO", { timeZone: "Europe/Bucharest" })}
    `.trim();

    // For production, you would integrate with an email service like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // Example with Resend (you would need to install @resend/sdk):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@evolutiontaxfinance.ro',
    //   to: 'etftax@gmail.com',
    //   subject: `Nouă solicitare de contact: ${data.name}`,
    //   text: emailContent,
    // });

    // For now, log the submission (in production, send actual email)
    console.log("=".repeat(50));
    console.log("NEW CONTACT FORM SUBMISSION");
    console.log("=".repeat(50));
    console.log("To: etftax@gmail.com");
    console.log("Subject: Nouă solicitare de contact:", data.name);
    console.log("-".repeat(50));
    console.log(emailContent);
    console.log("=".repeat(50));

    // Store submission data for reference
    const submission = {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || null,
      message: data.message || null,
      destinationEmail: "etftax@gmail.com",
    };

    console.log("Submission data:", JSON.stringify(submission, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: "Mesajul a fost trimis cu succes. Veți fi contactat în maximum 4 ore lucrătoare."
      },
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
