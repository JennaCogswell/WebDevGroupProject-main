import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

/**
 * @Author Santi Rijal
 */

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Culinary Explorer",
  description: "A recipe website for sharing recipes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
