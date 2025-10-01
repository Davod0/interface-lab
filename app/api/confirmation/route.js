import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, subject } = await req.json();

  try {
    const data = await resend.emails.send({
      from: process.env.NO_REPLY_EMAIL,
      to: email,
      subject: "Davod Nikoyi",
      react: (
        <>
            <h1>Hi there and thank you for reaching out!</h1>
              <p>I’ve received your message and will
                try my best to get back to you as soon as possible.
            </p>
          <p>
            Best regards,<br />
            Davod Nikoyi
          </p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
