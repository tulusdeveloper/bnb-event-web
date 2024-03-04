import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <div className={`flex min-h-screen ${inter.className}`}>

      {/* Left Navigation */}
      <Navbar /> {/* Render the Navbar component */}

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          {router.pathname === "/" && <HomePage />}
          {router.pathname === "/about" && <AboutPage />}
          {router.pathname === "/services" && <ServicesPage />}
          {router.pathname === "/contact" && <ContactPage />}
        </div>
      </main>
    </div>
  );
}