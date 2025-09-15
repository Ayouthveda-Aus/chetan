import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/site/Container";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "LUNIVAAQ - Natural Beauty & Wellness",
  description:
    "Discover the power of nature with LUNIVAAQ's carefully curated collection of natural beauty and wellness products. Embrace rituals that nurture your body and soul.",
  keywords: [
    "natural beauty",
    "wellness",
    "skincare",
    "rituals",
    "organic",
    "sustainable",
  ],
  authors: [{ name: "LUNIVAAQ" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "LUNIVAAQ - Natural Beauty & Wellness",
    description:
      "Discover the power of nature with LUNIVAAQ's carefully curated collection of natural beauty and wellness products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUNIVAAQ - Natural Beauty & Wellness",
    description:
      "Discover the power of nature with LUNIVAAQ's carefully curated collection of natural beauty and wellness products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-cream-50 h-full"
      style={
        {
          "--font-inter": "Inter, system-ui, sans-serif",
          "--font-playfair": "'Playfair Display', serif",
        } as React.CSSProperties
      }
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <Container>
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
        </Container>
      </body>
    </html>
  );
}
