import React from 'react';
import Footer from '../Footer';


const ServicesPage = () => {


return (
  <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
     
      {/* Home page content goes here */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-lg">Insert  Service information here.</p>
        {/* Add more content as needed */}
      </div>
    </div>
    <Footer />
  </div>
);
};

export default ServicesPage;