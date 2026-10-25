# Lemon Squeezy checkout setup

The site is wired for Lemon Squeezy checkout, but needs your store's own
IDs and keys before "Buy" buttons go live. Until then, license tier buttons
show a "coming soon" state — nothing is broken.

## 1. Create your account & store

1. Sign up at https://app.lemonsqueezy.com
2. Create a **Store** (Settings → Stores). Note its subdomain, e.g. if your
   store URL is `https://vaultix.lemonsqueezy.com`, the subdomain is `vaultix`.

## 2. Create products & variants

For each software title in [`src/lib/products.ts`](src/lib/products.ts),
create a matching **Product** in Lemon Squeezy, with one **Variant** per
license tier (e.g. Personal / Team / Lifetime). Lemon Squeezy can
auto-generate a unique license key per sale if you turn on
"License keys" under the product's settings — handy for software licensing.

Each variant has a numeric **Variant ID**, visible in its URL or via the API.

## 3. Get your API key & webhook secret

- **API key**: Settings → API → Create API key. Needed only if you later
  want to call the Lemon Squeezy API directly (e.g. to look up license keys
  in the webhook handler).
- **Webhook secret**: Settings → Webhooks → Add webhook.
  - URL: `https://<your-domain>/api/webhooks/lemonsqueezy`
  - Events: at minimum `order_created`
  - Copy the **Signing secret** shown after creating it.

## 4. Fill in environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_LEMONSQUEEZY_STORE_SUBDOMAIN=vaultix
LEMONSQUEEZY_API_KEY=your_api_key
LEMONSQUEEZY_WEBHOOK_SECRET=your_webhook_signing_secret
```

Restart the dev server after editing `.env.local`.

## 5. Add variant IDs to your products

In [`src/lib/products.ts`](src/lib/products.ts), add the matching
`lemonVariantId` to each license tier, e.g.:

```ts
{
  name: "Personal",
  price: 49,
  period: "year",
  seats: "1 seat",
  lemonVariantId: "123456", // <- from Lemon Squeezy
  features: [...],
}
```

Once a tier has a `lemonVariantId` **and** `NEXT_PUBLIC_LEMONSQUEEZY_STORE_SUBDOMAIN`
is set, its button automatically becomes a live "Buy" button that opens the
Lemon Squeezy checkout overlay. Tiers without a variant ID still show
"Choose this plan" (coming soon).

## 6. Order fulfillment

[`src/app/api/webhooks/lemonsqueezy/route.ts`](src/app/api/webhooks/lemonsqueezy/route.ts)
verifies and receives `order_created` events. It currently just logs the
order — extend the `TODO` there to email the license key, store the order,
or whatever fulfillment you need (e.g. via the
[License Keys API](https://docs.lemonsqueezy.com/api/license-keys) or
[Resend](https://resend.com) for email).

## Testing

Lemon Squeezy stores run in **test mode** by default (toggle in the store
settings) and provide test card numbers, so you can place full test orders
before going live — no real money moves until you flip the store to live
mode.
