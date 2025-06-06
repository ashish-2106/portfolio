import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Dancing_Script } from 'next/font/google';
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose weights you need
  variable: '--font-dancing', // optional: if using CSS variables
});

export const metadata: Metadata = {
  title: "Ashish Portfolio",
  description: "My personal developer portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          toastOptions={{
            style: {
              background: '#1a202c', // Dark theme background
              color: '#f7fafc',      // Light text color
            }
          }}
          position="top-center"
          reverseOrder={true}
        />
        {children}

      </body>
    </html>
  );
}
