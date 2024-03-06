import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Image from 'next/image';

const ServiceCard = ({ imageSrc, alt, title, description }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-lg p-4 flex flex-col items-center">
      <Image
        src={imageSrc}
        alt={alt}
        width={6555}
        height={4413}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-md">{description}</p>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      imageSrc: "/services/0Q0A6863.jpg",
      alt: "Luxury Weddings",
      title: "Luxury Weddings",
      description: "We create luxurious and unforgettable wedding experiences for our clients."
    },
    {
      imageSrc: "/services/BPK-101.jpg",
      alt: "Destination Weddings",
      title: "Destination Weddings",
      description: "Plan your dream destination wedding with our expert team. We handle all the details, so you can relax and enjoy your special day."
    },
    {
      imageSrc: "/services/ROP08221.jpg",
      alt: "Little Celebrations",
      title: "Little Celebrations",
      description: "We also specialize in intimate gatherings and small celebrations."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen ml-80">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center py-16">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-lg mb-8">
          Insert Service information here. We are a company that specializes
          in a variety of services.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
