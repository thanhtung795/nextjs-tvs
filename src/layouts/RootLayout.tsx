import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import AppLayout from "@/components/layout/AppLayout";

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
    <html lang="vi">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
