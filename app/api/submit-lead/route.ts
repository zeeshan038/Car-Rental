import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { captchaToken, ...formData } = body;
    console.log("Server received captchaToken:", captchaToken ? `${captchaToken.substring(0, 10)}...` : "EMPTY");

    const params = new URLSearchParams();
    params.append('secret', process.env.RECAPTCHA_SECRET_KEY || '');
    params.append('response', captchaToken);

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    console.log("secret key" , process.env.RECAPTCHA_SECRET_KEY)

    const verifyData = await verifyRes.json();
    console.log("reCAPTCHA Verification Response:", verifyData);

    const { success, score } = verifyData;

    if (!success || (score !== undefined && score < 0.5)) {
      console.log("Bot detected or Verification failed. Score:", score, "Success:", success);

      if (process.env.NODE_ENV === 'development') {
         console.warn("DEVELOPMENT MODE: Bypassing reCAPTCHA check and proceeding to CRM...");
      } else {
        return NextResponse.json({ 
          error: "Bot detected", 
          details: verifyData['error-codes'] || "Low score" 
        }, { status: 400 });
      }
    }

    // Step 3: Real user → send to Webhook (Make.com or Monday)
    const webhookUrl = process.env.MONDAY_WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error("MONDAY_WEBHOOK_URL is not defined");
    }

    const payload = {
      Name: formData.Name,
      Phone: formData.Phone,
      Email: formData.Email,
      "Car Type": formData["Car Type"],
      Location: formData.Location,
      source: "Hero Form (Verified)"
    };

    const crmRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!crmRes.ok) {
      return NextResponse.json({ error: "CRM submission failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
