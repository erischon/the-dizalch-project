/**
 * @description Portfolio Layout, this is the layout for the portfolio pages
 * @version 1.0.0
 */
const PortfolioPagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col flex-grow w-full max-w-3xl px-4 mx-auto">
      {children}
    </div>
  );
};
export default PortfolioPagesLayout;
