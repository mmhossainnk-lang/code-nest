import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

/**
 * Receives Lemon Squeezy webhook events (order_created, etc).
 * Point your webhook URL at: https://<your-domain>/api/webhooks/lemonsqueezy
 * and set LEMONSQUEEZY_WEBHOOK_SECRET to the signing secret shown when you
 * create the webhook in your Lemon Squeezy dashboard. See SETUP.md.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("x-signature") ?? "";

  const digest = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  const signatureValid =
    digest.length === signature.length &&
    crypto.timingSafeEqual(Buffer.from(digest, "utf8"), Buffer.from(signature, "utf8"));

  if (!signatureValid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);
  const eventName = event?.meta?.event_name;

  switch (eventName) {
    case "order_created": {
      const order = event.data?.attributes;
      console.log("New Lemon Squeezy order:", {
        identifier: order?.identifier,
        email: order?.user_email,
        total: order?.total_formatted,
      });
      // TODO: fulfill the order here — e.g. fetch the generated license key
      // via the Lemon Squeezy API and email it, or mark the order active in
      // your own database. See https://docs.lemonsqueezy.com/api/license-keys
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
