import Link from "next/link";

const pages = [
  { name: "Accueil", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

/**
 * @description Navbar component
 * @version 1.0.0
 */
const Navbar = () => {
  return (
    <nav className="flex gap-2 my-2">
      {pages.map((page) => (
        <Link key={page.href} href={page.href} className="p-1">
          {page.name}
        </Link>
      ))}
    </nav>
  );
};
export default Navbar;
