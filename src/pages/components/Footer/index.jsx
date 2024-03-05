import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-pink-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Bliss and Blooms</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
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