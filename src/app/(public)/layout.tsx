import { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Brand from "@/components/layout/Brand";

import { seoData } from "@/data/infos";

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  authors: seoData.author,
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    images: [
      {
        url: seoData.image,
        alt: seoData.title,
      },
    ],
    url: seoData.url,
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    creator: seoData.twitter,
    title: seoData.title,
    description: seoData.description,
    images: [seoData.image],
  },
};

/**
 * @description Portfolio Layout, this is the layout for the portfolio pages
 * @version 1.0.0
 */
export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full justify-between">
      <header className="px-4 lg:px-8 flex justify-between items-center min-h-[70px]">
        <Brand />

        <div className="flex gap-2 sm:gap-8 items-center">
          <Navbar />
        </div>
      </header>

      <main className="">{children}</main>

      <footer className="px-4 lg:px-8 bg-gray-900">
        <Footer />
      </footer>
    </div>
  );
}
