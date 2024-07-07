import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comic"
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
