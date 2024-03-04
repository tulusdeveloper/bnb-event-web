import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex min-h-screen ${inter.className}`}>
      {/* Left Navigation */}
      <nav className="bg-white shadow-md p-6 w-64">
        {/* Logo */}
        <div className="p-6">
          <Link href="/">
            <Image
              src="/blissnbloomslogo.png"
              alt="Logo"
              width={150}
              height={50}
              className="mx-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-4 flex flex-col items-center">
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              {/* You can add icons here */}
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              {/* You can add icons here */}
              <span>About</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              {/* You can add icons here */}
              <span>Services</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              {/* You can add icons here */}
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          {/* Your existing content */}
        </div>
      </main>
    </div>
  );
}