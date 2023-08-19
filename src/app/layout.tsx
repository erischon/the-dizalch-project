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
          <div className=" bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100 ">
            {children}
          </div>
        </body>
      </html>
    </MyThemeContextProvider>
  );
}
