import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-pink-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex flex-col items-center"> {/* Flex container */}
              <h4 className="text-lg font-bold mb-4">Bliss and Blooms</h4>
              <h1>weddings . events</h1>
              {/* Social Media Handles */}
              <div className="flex justify-center space-x-4 mt-4">
                <Link
                  href="https://www.facebook.com/eventsbyNiki1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <div className="bg-gray-200 p-2 rounded">
                    <FaFacebook size={20} />
                  </div>
                </Link>
                <Link
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <div className="bg-gray-200 p-2 rounded">
                    <FaTwitter size={20} />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/bliss.n.blooms_events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <div className="bg-gray-200 p-2 rounded">
                    <FaInstagram size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">Facebook</Link>
              </li>
              <li>
                <Link href="#">Twitter</Link>
              </li>
              <li>
                <Link href="#">Instagram</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: blissnbloomsevents@gmail.com</li>
              <li>Phone: +254 715 223428 | +254 710 391 049</li>
              <li>Address: Eldoret, Kenya (EA) Along Nairobi Road, Opp. Eldoret
                Premier, Elgon View</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} LancolaTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;