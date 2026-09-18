import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "Sankeerth Kumar Eswaravaka | Senior Software Engineer | Java/J2EE | Spring Boot | Kafka | Agentic AI | AWS",
  description:
    "Senior Software Engineer with 6 years in Java/J2EE, Spring Boot, Apache Kafka, Agentic AI, and AWS. Specializing in FinTech, Energy, Telecom, and Healthcare domains.",
  keywords: [
    "Senior Software Engineer",
    "Java",
    "J2EE",
    "Spring Boot",
    "Apache Kafka",
    "Agentic AI",
    "LangChain",
    "AWS",
    "Microservices",
    "RAG Pipelines",
    "Portfolio",
  ],
  authors: [{ name: "Sankeerth Kumar Eswaravaka" }],
  openGraph: {
    title: "Sankeerth Kumar Eswaravaka | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in Java/J2EE, Spring Boot, Kafka, Agentic AI & AWS.",
    url: "https://sankeerth.vercel.app",
    siteName: "Sankeerth Kumar Eswaravaka Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankeerth Kumar Eswaravaka | Senior Software Engineer",
    description: "Senior Software Engineer specializing in Java/J2EE, Spring Boot, Kafka, Agentic AI & AWS.",
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
