import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.scss";
import Layout from "@/components/Layout/Layout";
import Providers from "./providers";

const montserrat = Montserrat({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Hey Center",
  description: "Siempre disponible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
