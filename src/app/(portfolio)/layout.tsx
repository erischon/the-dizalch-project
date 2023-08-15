import { Metadata } from "next";

import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import Brand from "@/components/Brand";
import Header from "@/components/portfolio/Header";

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
const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full justify-between">
      <header className="flex justify-between items-center px-4 lg:px-12">
        <Brand />

        <div className="flex gap-2 sm:gap-8 items-center">
          <Navbar />

          <Header />
        </div>
      </header>

      <main className="px-4 lg:px-8 flex-grow">{children}</main>

      <footer className="bg-stone-900 px-4 lg:px-8">
        <Footer />
      </footer>
    </div>
  );
};
export default PortfolioLayout;
