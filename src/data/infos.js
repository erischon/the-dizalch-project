import { FaHammer, FaTools } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { GiTestTubes } from "react-icons/gi";

// SEO data
export const seoData = {
  title: "The Dizalch Project",
  description: "A freelance web application project.",
  author: [{ name: "Eri Schön", url: "https://www.erischon.dev" }],
  url: "https://thedizalchproject.vercel.app/",
  image: "https://thedizalchproject.vercel.app/images/og-image.png",
  twitter: "@erischon",
};

// Revalidate times
export const revalidateTime = {
  blog: 60,
  projects: 60,
};

// Portfolio informations
// export const tagLine = "Votre ressource pour une application web sur mesure";
// export const tagLine = "La ressource Qualité pour votre application web React";
// export const tagLine = "L'Artisan Qualité pour votre application web React";
export const tagLine = "Votre ressource Qualité pour votre appli web React";
export const projectsListPageSize = 6;

export const services = [
  {
    title: "Testing",
    description: "Tester votre application web",
    icon: <GiTestTubes />,
    image: "/images/services/testing.jpg",
  },
  {
    title: "Performance",
    description: "Améliorer les performances de votre application web",
    icon: <BsGraphUp />,
    image: "/images/services/performance.jpg",
  },
  {
    title: "Sécurité",
    description: "Sécuriser votre application web",
    icon: <MdSecurity />,
    image: "/images/services/security.jpg",
  },
  {
    title: "Maintenance",
    description: "Sécuriser votre application web",
    icon: <FaTools />,
    image: "/images/services/security.jpg",
  },
  {
    title: "New feature",
    description: "Sécuriser votre application web",
    icon: <FaHammer />,
    image: "/images/services/security.jpg",
  },
];

// Blog Informations
