import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-10 w-80 flex flex-col justify-between">
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
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              {/* You can add icons here */}
              <span>HOME</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              {/* You can add icons here */}
              <span>ABOUT</span>
            </Link>
          </li>
          <li>
            <Link
              href="/ourwork"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              {/* You can add icons here */}
              <span>OUR WORK</span>
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              {/* You can add icons here */}
              <span>SERVICES</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              {/* You can add icons here */}
              <span>CONTACT</span>
            </Link>
          </li>
        </ul>
      </div>
<hr />
      {/* Social Links */}
      <div className="flex flex-col items-center text-pink-500">
        <Link
          href="mailto:blissnbloomsevents@gmail.com"
          className="hover:text-gray-900"
        >
          blissnbloomsevents@gmail.com
        </Link>
        <Link
          href="mailto:hello@blissnbloomsevents.co.ke"
          className="hover:text-gray-900"
        >
          hello@blissnbloomsevents.co.ke
        </Link>
        <Link href="tel:+254715223428" className="hover:text-gray-900">
          +254 715 223428
        </Link>
        <Link href="tel:+254710391049" className="hover:text-gray-900">
          +254 710 391 049
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;