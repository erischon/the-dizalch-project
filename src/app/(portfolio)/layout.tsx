import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const seoData = {
  title: "The Dizalch Project",
  description: "A project for Freelance Developers",
  url: "https://dizalch.com",
  image: "https://dizalch.com/images/og-image.png",
  twitter: "@erischon",
};

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
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
    <div className="flex flex-col w-full h-screen justify-between">
      <header className="flex justify-between items-center px-4">
        <Navbar />
      </header>

      <main className="flex flex-col flex-grow px-4">{children}</main>

      <footer className="bg-stone-900 px-4">
        <Footer />
      </footer>
    </div>
  );
};
export default PortfolioLayout;
