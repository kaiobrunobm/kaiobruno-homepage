import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KaioBruno - Homepage",
  description: "Kaio Bruno personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-very-light-primary">
      <body className={inter.className}>
        <div className="flex flex-col items-start justify-between text-very-dark-primary">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
