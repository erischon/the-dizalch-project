import { FaHammer, FaTools } from "react-icons/fa";
import { BsGraphUp, BsFillBugFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { GiTestTubes } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";

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
  blog: 60 * 60 * 24, // 24 hours
  projects: 60 * 60 * 24, // 24 hours
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
    description:
      "Nous mettons en place des tests unitaires ainsi que des tests end to end afin que votre application web soit robuste et fiable",
    icon: <GiTestTubes />,
    image: "/images/services/testing.jpg",
  },
  {
    title: "Performance",
    description:
      "Nous annalysons, optimisons et améliorons les performances de votre application web pour qu'elle soit rapide et efficace.",
    icon: <BsGraphUp />,
    image: "/images/services/performance.jpg",
  },
  {
    title: "Sécurité",
    description:
      "Nous sécurisons votre application web grâce à des tests de sécurité et des audits afin de vous protéger contre les attaques malveillantes.",
    icon: <MdSecurity />,
    image: "/images/services/security.jpg",
  },
  {
    title: "Maintenance",
    description:
      "Nous effectuons la maintenance de votre application web ainsi que les mises à jour nécessaires pour qu'elle reste fonctionnelle.",
    icon: <FaTools />,
    image: "/images/services/security.jpg",
  },
  {
    title: "Debugging",
    description:
      "Nous aidons à résoudre les bugs pour que votre application web fonctionne correctement et sans erreurs.",
    icon: <BsFillBugFill />,
    image: "/images/services/security.jpg",
  },
  {
    title: "Documentation",
    description:
      "Nous documentons votre application web afin que vous puissiez la maintenir et la faire évoluer facilement.",
    icon: <HiOutlineDocumentText />,
    image: "/images/services/security.jpg",
  },
];

export const metrics = [
  {
    title: "Tests créés",
    value: "100+",
    icon: <GiTestTubes />,
  },
  {
    title: "Appli. optimisées",
    value: "30+",
    icon: <BsGraphUp />,
  },
  {
    title: "Années d'expériences",
    value: "3+",
    icon: <FaTools />,
  },
];

export const testimonials = [
  {
    name: "Julien D.",
    title: "CTO",
    company: "B-Sharpe",
    image: "/images/testimonials/b-sharpe.jpg",
    quote:
      "Approche rigoureuse et centrée sur les tests. Très bon relationnel pour s'intégrer efficacement dans l'équipe.",
  },
  {
    name: "Thomas C.",
    title: "CEO",
    company: "Butterfl.ai",
    image: "/images/testimonials/butterflai.png",
    quote:
      "Eri a développé pour nous une super API REST sous Django, je le recommande vivement !",
  },
  {
    name: "Michel S.",
    title: "DA",
    company: "Terre d'avance",
    image: "/images/testimonials/terre-davance.png",
    quote: "",
  },
];

// Blog Informations
