// Third Party Dependencies

// App Dependencies
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
