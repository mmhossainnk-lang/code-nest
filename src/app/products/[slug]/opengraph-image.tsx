import { ImageResponse } from "next/og";
import { getProductBySlug, products } from "@/lib/products";

export const alt = "Vaultix license";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          backgroundImage: product?.ogGradient ?? "linear-gradient(135deg, #6366f1, #d946ef)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "rgba(255,255,255,0.2)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            marginBottom: 40,
          }}
        >
          {product?.icon ?? "💼"}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "white", lineHeight: 1.1 }}>
          {product?.name ?? "Vaultix"}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "rgba(255,255,255,0.9)", marginTop: 20, maxWidth: 900 }}>
          {product?.tagline ?? "Software & app licenses, activated instantly"}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 50,
            fontSize: 26,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "rgba(255,255,255,0.25)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              color: "white",
            }}
          >
            VX
          </div>
          Vaultix
        </div>
      </div>
    ),
    { ...size }
  );
}
