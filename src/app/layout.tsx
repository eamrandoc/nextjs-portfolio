import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // 🔥 change this
  title: {
    default: "Md Al Eamran | Full Stack Developer",
    template: "%s | Md Al Eamran",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, and scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
    "Md Al Eamran",
  ],
  authors: [{ name: "Md Al Eamran" }],
  creator: "Md Al Eamran",

  openGraph: {
    title: "Md Al Eamran | Full Stack Developer",
    description:
      "Explore projects, skills, and experience of Md Al Eamran.",
    url: "https://your-domain.com",
    siteName: "Eamran Portfolio",
    images: [
      {
        url: "/og-image.png", // 🔥 add this in public/
        width: 1200,
        height: 630,
        alt: "Md Al Eamran Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Al Eamran | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web technologies.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        {/* bg-background text-foreground ei 2 ta porey add kora hoyecha */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
           <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
