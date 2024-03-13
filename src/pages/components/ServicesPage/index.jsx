import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Image from 'next/image';

const ServiceCard = ({ imageSrc, alt, title, description }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
     {/* <div className="bg-gray-200 dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105"> */}

      <Image
        src={imageSrc}
        alt={alt}
        width={800}
        height={600}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2 text-pink-600 dark:text-pink-400">{title}</h3>
      <p className="text-md text-center px-4 text-gray-600 dark:text-gray-300">{description}</p>
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
      alt: "Small Celebrations",
      title: "Small Celebrations",
      description: "We also specialize in intimate gatherings and small celebrations."
    },
    {
      imageSrc: "/services/0Q0A6885.jpg",
      alt: "Event Planning and Coordination",
      title: "Event Planning and Coordination",
      description: "Our team of experienced event planners will work with you to create a custom event plan tailored to your budget and timeline."
    },
    {
      imageSrc: "/services/BPK-102.jpg",
      alt: "Corporate Events",
      title: "Corporate Events",
      description: "We offer comprehensive corporate event planning services, from conferences and seminars to product launches and team-building events."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen ml-80 dark:text-white dark:bg-gray-900">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center py-16">
        <h1 className="text-4xl font-serif text-gray-800 dark:text-white mb-6">Our Services</h1>
        <div className="w-16 h-1 bg-pink-500 dark:bg-pink-400 mb-4"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl text-center leading-relaxed">
          At Bliss & Blooms, we curate exceptional events that leave a lasting impression. From intimate gatherings to grand celebrations, our team of dedicated professionals brings your vision to life with meticulous attention to detail and a touch of elegance. Indulge in unforgettable experiences tailored to your unique style and preferences.
        </p><br />
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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