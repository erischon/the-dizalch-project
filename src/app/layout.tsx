import "./globals.css";

/**
 * @description Root Layout
 * @version 1.0.0
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
