import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "Sankeerth Kumar Eswaravaka | Senior Java Backend Developer",
  description:
    "Senior Java Backend Developer with 6 years in FinTech & Banking. Expert in Java 17, Spring Boot, Apache Kafka, and AWS. AWS Certified Solutions Architect & Developer.",
  keywords: [
    "Java Backend Developer",
    "Senior Software Engineer",
    "Spring Boot",
    "Apache Kafka",
    "AWS",
    "FinTech",
    "Banking",
    "Microservices",
    "Portfolio",
  ],
  authors: [{ name: "Sankeerth Kumar Eswaravaka" }],
  openGraph: {
    title: "Sankeerth Kumar Eswaravaka | Senior Java Backend Developer",
    description:
      "Senior Java Backend Developer specializing in FinTech & Banking systems.",
    url: "https://sankeerth.vercel.app",
    siteName: "Sankeerth Kumar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankeerth Kumar Eswaravaka | Senior Java Backend Developer",
    description: "Senior Java Backend Developer specializing in FinTech & Banking.",
    creator: "@sankeerth_dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-slate-100 antialiased font-sans overflow-x-hidden">
        <div className="fixed inset-0 bg-mesh-gradient pointer-events-none opacity-50" />
        <div className="fixed inset-0 animated-grid pointer-events-none" />
        <MotionProvider>
          <div className="relative z-10">{children}</div>
        </MotionProvider>
      </body>
    </html>
  );
}
