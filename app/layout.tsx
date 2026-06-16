import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Store",
  description: "Products Store 3000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="rootModal"></div>
        <Header />
        <main className="container" style={{ padding: "32px 24px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
