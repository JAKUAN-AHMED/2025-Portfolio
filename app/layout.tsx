import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Jakuan Ahmed - Full Stack Developer",
    template: "%s | Jakuan Ahmed",
  },
  description:
    "Junior FullStack Developer | Educator | Problem Solver - Portfolio showcasing modern web development skills",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Full Stack Developer",
    "Web Development",
    "Jakuan Ahmed",
    "Portfolio",
  ],
  authors: [{ name: "Jakuan Ahmed" }],
  creator: "Jakuan Ahmed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jakuan-ahmed.vercel.app",
    title: "Jakuan Ahmed - Full Stack Developer",
    description: "Junior FullStack Developer | Educator | Problem Solver",
    siteName: "Jakuan Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakuan Ahmed - Full Stack Developer",
    description: "Junior FullStack Developer | Educator | Problem Solver",
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
