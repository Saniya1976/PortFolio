import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { LoadingScreen } from "@/components/LoadingScreen";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground").then(mod => ({ default: mod.ThreeBackground })), { ssr: false });

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
      <body className={cn(inter.variable, outfit.variable, "font-sans selection:bg-[#6d0f1b]/40 selection:text-white")}>
        <LoadingScreen />
        <SmoothScroll>
          <ThreeBackground />
          <div className="fixed inset-0 -z-10 bg-[#1a080a] overflow-hidden mesh-gradient bg-grid">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8e1c2a]/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4a0404]/15 rounded-full blur-[120px]" />
          </div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

