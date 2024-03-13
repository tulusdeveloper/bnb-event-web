import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="text-white py-8 dark:text-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-96">
          <Image
            src="/B21A6289.jpg"
            alt="Header image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;