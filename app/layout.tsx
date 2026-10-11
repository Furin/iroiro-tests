import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iroiro Tests - いろいろテスト",
  description: "Tests japanese through simple flash card style training excercises with customizable training sets.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex">
        <nav className="fixed p-5">
          <Link href="/" className="flex h-22 text-2xl 7w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] cursor-pointer">
            Home
          </Link>
        </nav>
        <div className="min-h-full flex-1 flex flex-col mt-[128px] lg:mt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
