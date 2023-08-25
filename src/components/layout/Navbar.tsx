import Link from "next/link";

const pages = [
  // { name: "Accueil", href: "/" },
  // { name: "Services", href: "/#services" },
  // { name: "About", href: "/#about" },
  { name: "Blog", href: "/blog" },
];

/**
 * @description Navbar component
 * @version 1.0.0
 */
export default function Navbar() {
  return (
    <nav className="flex gap-2 my-2 h-full">
      {pages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className="p-1 uppercase text-sm font-semibold"
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
}
