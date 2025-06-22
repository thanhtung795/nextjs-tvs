// HelmetProviderWrapper.tsx
"use client";
import { HelmetProvider } from "react-helmet-async";

export default function HelmetProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HelmetProvider context={{}}>{children}</HelmetProvider>;
}
