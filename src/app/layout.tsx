"use client";

import { MyThemeContextProvider } from "@/store/ThemeContext";

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
    <MyThemeContextProvider>
      <html lang="en">
        <body>
          <div className="dark:bg-gray-800 bg-gray-50 dark:text-gray-100 text-gray-800">
            {children}
          </div>
        </body>
      </html>
    </MyThemeContextProvider>
  );
}
