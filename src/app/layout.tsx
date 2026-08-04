import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frederick Durán | Fullstack Developer Portfolio (Next.js, TypeScript)",
  description: "Portafolio profesional de Frederick Durán (ragnarsson03). Desarrollador Fullstack especializado en Next.js, React, TypeScript, Node.js y gestión de infraestructura.",
  keywords: ["Frederick Durán", "ragnarsson03", "Fullstack Developer", "Next.js", "TypeScript", "React", "Tailwind CSS", "SIS-UNETI", "San Agustín", "Dólar BCV"],
  authors: [{ name: "Frederick Durán", url: "https://github.com/ragnarsson03" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="bg-[#090d16] text-slate-100 antialiased min-h-screen selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
