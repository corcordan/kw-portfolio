import type { Metadata } from "next";
import { Alex_Brush, Cormorant, Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alexFont = Alex_Brush({
     subsets: ["latin"],
     weight: "400",
     variable: "--font-alex"
})

const garamondFont = Cormorant_Garamond({
	subsets: ["latin"],
	variable: "--font-garamond"
})

const cormorantFont = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant"
})

export const metadata: Metadata = {
  title: "Kate Walsh's Portfolio",
  description: "A portfolio website for Kate Walsh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alexFont.variable} ${garamondFont.variable} ${cormorantFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
