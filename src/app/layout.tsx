


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../../components/theme-provider";




const inter = Inter({ subsets: ["latin"] });





export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <header style={{ backgroundColor: "lightblue", padding: '1rem' }}>
            <p>header</p>

          </header>
          {children}
          <footer style={{ backgroundColor: "gray", padding: '1rem' }}>
            <p>footer</p>

          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}


