import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Simple portfolio site",
  authors: { name: "KOSMOGOR" },
  icons: "https://moodle.innopolis.university/theme/image.php/academi/theme/1716928122/favicon"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <body>
        {children}
    </body>
    </html>
  );
}
