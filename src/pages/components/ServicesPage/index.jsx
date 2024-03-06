import React from 'react';
import Footer from '../Footer';
import Header from '../Header';


const ServicesPage = () => {

  return (
    <div className="flex flex-col min-h-screen ml-80">
      <div className="flex-grow">
        <Header />
        <div className="flex flex-col justify-center items-center flex-grow py-16">
          {/* Our Services Section */}
          <h1 className="text-3xl font-bold mb-4">Our Services</h1>
          <p className="text-lg mb-8">
            Insert Service information here. We are a company that specializes
            in a variety of services.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Luxury Weddings</h3>
              <p className="text-md">
                We create luxurious and unforgettable wedding experiences for
                our clients.
              </p>
            </div>
            <div className="bg-gray-200 shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Destination Weddings</h3>
              <p className="text-md">
                Plan your dream destination wedding with our expert team. We
                handle all the details, so you can relax and enjoy your special
                day.
              </p>
            </div>
            <div className="bg-gray-200 shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Little Celebrations</h3>
              <p className="text-md">
                We also specialize in intimate gatherings and small
                celebrations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;