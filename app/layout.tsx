import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jakuan Ahmed - Full Stack Developer",
  description:
    "Junior FullStack Developer | Educator | Problem Solver - Portfolio showcasing modern web development skills",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Full Stack Developer",
    "Web Development",
  ],
  authors: [{ name: "Jakuan Ahmed" }],
  creator: "Jakuan Ahmed",
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
