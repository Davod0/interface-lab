import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: subject,
      react: (
              <>
                <h1>{subject}</h1>
                <p>New message sent by: {email}</p>
                <p>{message}</p>
              </>
            ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

