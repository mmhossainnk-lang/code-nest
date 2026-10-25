export const lemonSqueezyStoreSubdomain = process.env.NEXT_PUBLIC_LEMONSQUEEZY_STORE_SUBDOMAIN || "";

export const lemonSqueezyConfigured = Boolean(lemonSqueezyStoreSubdomain);

export function buildCheckoutUrl(variantId: string, email?: string) {
  const url = new URL(`https://${lemonSqueezyStoreSubdomain}.lemonsqueezy.com/buy/${variantId}`);
  url.searchParams.set("embed", "1");
  url.searchParams.set("media", "0");
  if (email) url.searchParams.set("checkout[email]", email);
  if (typeof window !== "undefined") {
    url.searchParams.set("checkout[success_url]", `${window.location.origin}/checkout/success`);
  }
  return url.toString();
}
