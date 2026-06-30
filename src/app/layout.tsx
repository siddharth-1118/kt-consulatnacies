import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shree Krishna Tax Consultants (K.T.C.) | Expert Tax & Accounting Services",
  description: "Professional tax advisory, GST filing, Income Tax returns, statutory compliance, and bookkeeping services by Hemanth Kumar Chennuru. Get expert financial solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
