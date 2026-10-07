import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      projectType,
      description,
    } = body;

    if (!name || !email || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is currently unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Ratzon Digital Products <onboarding@resend.dev>",
      to: ["collinskmurithi@gmail.com"],
      subject: `New Project Enquiry — ${name}`,
      html: `
        <h2>New Project Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Project Type:</strong> ${
          projectType || "Not specified"
        }</p>

        <h3>Project Description</h3>

        <p>${description}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your enquiry.",
        },
        { status: 500 }
      );
    }

    console.log("Email sent:", data);

    return NextResponse.json({
      success: true,
      message: "Project enquiry sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}