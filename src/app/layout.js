import localFont from "next/font/local";
import { Roboto } from 'next/font/google';
import "./globals.css";
import theme from "./theme.js";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-approuter"
import { ThemeProvider } from "@emotion/react";

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
  });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
