import type { Metadata } from "next";
import { Inter, Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Sublet",
  description: "Sublet is a platform for subletting apartments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Navbar />
        <main className="container py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
