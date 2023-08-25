import { FaHammer, FaTools } from "react-icons/fa";
import { BsGraphUp, BsFillBugFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { GiTestTubes, GiCycle } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { ImArrowUpRight, ImArrowDownRight } from "react-icons/im";
import { LuFileSearch } from "react-icons/lu";

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
    title: "Analyse",
    description: "Analyse d'application",
    icon: <LuFileSearch />,
    isActive: true,
  },
  {
    title: "Testing",
    description: "Tests fonctionnels et E2E",
    icon: <GiTestTubes />,
    isActive: true,
  },
  {
    title: "Documentation",
    description: "Documentation du code",
    icon: <HiOutlineDocumentText />,
    isActive: true,
  },
  {
    title: "Performance",
    description: "Analyse et optimisation",
    icon: <BsGraphUp />,
    isActive: false,
  },
  {
    title: "Sécurité",
    description: "Analyse et correction",
    icon: <MdSecurity />,
    isActive: false,
  },
  {
    title: "Mise à jour",
    description: "Mise à jour des dépendances",
    icon: <FaTools />,
    isActive: false,
  },
  {
    title: "Processus",
    description: "Création de process QA",
    icon: <GiCycle />,
    isActive: false,
  },
  {
    title: "Debugging",
    description: "Correction de bugs",
    icon: <BsFillBugFill />,
    isActive: false,
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

export const gains = [
  {
    icon: <ImArrowUpRight />,
    title: "Satisfaction utilisateurs",
    color: "indigo-500",
  },
  {
    icon: <ImArrowDownRight />,
    title: "Bugs en production",
    color: "amber-500",
  },
  {
    icon: <ImArrowUpRight />,
    title: "Possibilité d'évolution",
    color: "indigo-500",
  },
];

export const sections = {
  problem: {
    header: "Le soucis",
    title:
      "Une dette technique bloquante et pas assez de ressources pour la gérer",
  },
};

// Blog Informations
