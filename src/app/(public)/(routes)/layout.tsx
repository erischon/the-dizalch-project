/**
 * @description Portfolio Layout, this is the layout for the portfolio pages
 * @version 1.0.0
 */
export default function PortfolioPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-3xl mx-auto">{children}</div>;
}
