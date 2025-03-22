import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vechile",
  description: "Vechile Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Header />
          <main>{children}</main>
          <footer className="bg-blue-50 py-12">
            <div className="container">
              <div className="flex flex-col items-center justify-center gap-y-4">
                <p className="text-sm text-gray-600">
                  Made with ❤️ by{" "}
                  <Link
                    href="https://tejasviraj.vercel.app/"
                    target="_blank"
                    className="underline"
                  >
                    Tejasvi Raj
                  </Link>
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
