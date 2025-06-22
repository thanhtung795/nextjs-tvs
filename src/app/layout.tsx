import AppLayout from "@/layout/AppLayout";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { Outfit } from 'next/font/google';
import HelmetProviderWrapper from "@/components/providers/HelmetProviderWrapper";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tin Viet Soft",
  description: "Website của Tín Việt Soft",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${outfit.variable}`}>
      <body suppressHydrationWarning={true}>
    <HelmetProviderWrapper>
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
    </HelmetProviderWrapper>
      </body>
    </html>
  );
}
