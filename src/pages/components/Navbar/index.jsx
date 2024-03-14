import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    // <nav className="bg-white shadow-md p-10 w-80 flex flex-col justify-between">
    <nav className="bg-white dark:bg-gray-800 dark:text-white shadow-md p-10 w-80 flex flex-col justify-between fixed top-0 left-0 bottom-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-10">
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
      <div>
        <ul className="space-y-6 flex flex-col items-center">
          <li>
            <Link
              href="/"
              className="flex items-center text-gray-700 group hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {/* You can add icons here */}
              <span className="group-hover:underline underline-offset-2 underline-dotted">
                HOME
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center text-gray-700 group hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {/* You can add icons here */}
              <span className="group-hover:underline underline-offset-2 underline-dotted">
                ABOUT
              </span>
            </Link>
          </li>
          
          <li>
            <Link
              href="/services"
              className="flex items-center text-gray-700 group hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {/* You can add icons here */}
              <span className="group-hover:underline underline-offset-2 underline-dotted">
                SERVICES
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/ourwork"
              className="flex items-center text-gray-700 group hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {/* You can add icons here */}
              <span className="group-hover:underline underline-offset-2 underline-dotted">
                OUR WORK
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex items-center text-gray-700 group hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {/* You can add icons here */}
              <span className="group-hover:underline underline-offset-2 underline-dotted">
                CONTACT
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      {/* Social Links */}
      <div className="flex flex-col items-center text-black dark:text-white">
        <Link
          href="mailto:blissnbloomsevents@gmail.com"
          className="hover:text-gray-900 dark:hover:text-white"
        >
          blissnbloomsevents@gmail.com
        </Link>
        <Link
          href="mailto:hello@blissnbloomsevents.co.ke"
          className="hover:text-gray-900 dark:hover:text-white"
        >
          hello@blissnbloomsevents.co.ke
        </Link>
        <Link href="tel:+254715223428" className="hover:text-gray-900 dark:hover:text-white">
          +254 715 223428
        </Link>
        <Link href="tel:+254710391049" className="hover:text-gray-900 dark:hover:text-white">
          +254 710 391 049
        </Link>
      </div>

      {/* Social Media Handles */}
      <div className="flex justify-center space-x-4 mt-4">
        <Link
          href="https://www.facebook.com/eventsbyNiki1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-black dark:hover:text-gray-900"
        >
          <div className="bg-gray-200 p-2 rounded">
            <FaFacebook size={20} />
          </div>
        </Link>
        <Link
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-black dark:hover:text-gray-900"
        >
          <div className="bg-gray-200 p-2 rounded dark:text-black dark:hover:text-gray-900">
            <FaTwitter size={20} />
          </div>
        </Link>
        <Link
          href="https://www.instagram.com/bliss.n.blooms_events"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-black dark:hover:text-gray-900"
        >
          <div className="bg-pink-600 p-2 rounded dark:text-white dark:hover:text-gray">
            <FaInstagram size={20} />
          </div>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;