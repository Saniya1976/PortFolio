import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Saniya Kumari | Full Stack Developer",
  description: "BCA Student, 9.55 CGPA, Full Stack Developer specializing in React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans selection:bg-[#6d0f1b]/40 selection:text-white`}>
        <div className="fixed inset-0 -z-10 bg-[#0f0a0d] overflow-hidden">
          {/* Subtle persistent background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6d0f1b]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#be185d]/5 rounded-full blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
