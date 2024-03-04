import React, { useState, useEffect } from 'react';
import Image from 'next/image';



const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/279A1860.jpg",
      alt: 'Image 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      src: "/279A1860.jpg",
      alt: 'Image 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      src: "/279A1860.jpg",
      alt: 'Image 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : ''
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <p className="text-center">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;