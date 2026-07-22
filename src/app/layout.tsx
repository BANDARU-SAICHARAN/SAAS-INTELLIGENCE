import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Sales Intelligence",
  description: "AI-powered Sales Intelligence Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} antialiased bg-[#060816] text-white`}
      >
        <ClerkProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}