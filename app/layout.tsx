import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Navbar from "@/components/Navbar";

const font = Roboto({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "BrandNest Solutions | Innovative IT Solutions for Your Business",
  description: "BrandNest Solutions is a leading IT company offering web development, software solutions, cloud services, and digital transformation to empower your business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
