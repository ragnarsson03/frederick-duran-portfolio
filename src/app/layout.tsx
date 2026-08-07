import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frederick Durán | Software Architect & Full Stack Developer",
  description: "Portafolio profesional de Frederick Durán (ragnarsson03). Especializado en arquitectura web escalable, microservicios, Next.js, React, TypeScript y gestión de servidores.",
  keywords: ["Frederick Durán", "ragnarsson03", "Full Stack Developer", "Software Architect", "Next.js", "TypeScript", "React", "Tailwind CSS", "SIS-UNETI", "San Agustín"],
  authors: [{ name: "Frederick Durán", url: "https://github.com/ragnarsson03" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="bg-[#050811] text-slate-100 antialiased min-h-screen selection:bg-blue-500 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
