import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src="/B21A6289.jpg" // Replace with your image path
            alt="Header image" // Descriptive alt text for accessibility
            width={4837}
            height={3159}
            layout="responsive" // Set layout to responsive
            objectFit="cover" // Apply object-fit: cover style
            className="max-h-96" // Set maximum height to control the height
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
