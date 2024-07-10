import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comic",
  description: "Simple funny comic site",
  authors: { name: "KOSMOGOR" },
  icons: "https://moodle.innopolis.university/theme/image.php/academi/theme/1716928122/favicon"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
        <header>
            <div id="hText">Funny comic</div>
        </header>

        {children}
    </body>
  );
}
